import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// theme
import ThemeProvider from './theme';
// scroll to top on load
import ScrollToTop from './components/ScrollToTop';
// global chart style
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// layouts
import DashboardLayout from './layouts/dashboard';


// pages (using route-based code-splitting: https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)
const BlogPage = lazy(() => import('./pages/BlogPage'))
const UserPage = lazy(() => import('./pages/UserPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardAppPage = lazy(() => import('./pages/DashboardAppPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
// import InspectionPage
// import ReportPage(s?)

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      {/* TODO: make loading prettier */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route path='app' element={<DashboardAppPage />} />
            <Route path='user' element={<UserPage />} />
            <Route path='projects' element={<ProjectsPage />} />
            <Route path='blog' element={<BlogPage />} />
          </Route>
          {/* TODO: Implement AuthContext */}
          <Route path='/' element={<Navigate to='/login' />}/>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='404' element={<NotFoundPage />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
