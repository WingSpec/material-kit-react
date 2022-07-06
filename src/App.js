import React, { Suspense, lazy, createContext, useReducer } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';
// theme
import ThemeProvider from './theme';
// scroll to top on load
import ScrollToTop from './components/ScrollToTop';
// global chart style
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// layouts
import DashboardLayout from './layouts/dashboard';

// pages (using route-based code-splitting: https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)
const BlogPage = lazy(() => import('./pages/BlogPage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardAppPage = lazy(() => import('./pages/DashboardAppPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
// TODO: import InspectionPage
// TODO: import ReportPage(s?)

// ----------------------------------------------------------------------

const initialState = {
  isLoggedIn: JSON.parse(sessionStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(sessionStorage.getItem('user')) || null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      sessionStorage.setItem('isLoggedIn', JSON.stringify(action.payload.isLoggedIn));
      sessionStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
      };
    case 'LOGOUT':
      sessionStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

// conditional routing following
// https://surajsharma.net/blog/react-conditional-routing
export const AuthContext = createContext();

function PrivateRoute() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/projects/all" />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route path="projects" element={<Navigate to="/projects/all" />} />
        <Route path="projects/all" element={<ProjectsPage />} />
        <Route path="projects/:projectId" element={<DashboardAppPage />} />
        <Route path="user" element={<UserPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

function PublicRoute() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Suspense
        fallback={
          <Backdrop open>
            <CircularProgress />
          </Backdrop>
        }
      >
        <AuthContext.Provider value={{ state, dispatch }}>
          {state.isLoggedIn ? <PrivateRoute /> : <PublicRoute />}
        </AuthContext.Provider>
      </Suspense>
    </ThemeProvider>
  );
}
