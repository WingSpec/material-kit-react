import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProjectSort, ProjectList, ProjectCartWidget, ProjectFilterSidebar } from '../sections/@dashboard/projects';
// mock
import PROJECTS from '../_mock/projects';

// ----------------------------------------------------------------------

export default function ProjectsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  // TODO: connect to backend
  // async function getProjects() {
  //   const config = {
  //     method: 'GET',
  //     url: process.env.REACT_APP_API_ENDPOINT + '/buildings',
  //     data: new FormData()
  //   };
    
  //   let projects = [];
  // }

  return (
    <Page title="Dashboard: Projects">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Projects
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProjectFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProjectSort />
          </Stack>
        </Stack>

        <ProjectList projects={JSON.parse(JSON.stringify(PROJECTS))} />
        <ProjectCartWidget />
      </Container>
    </Page>
  );
}
