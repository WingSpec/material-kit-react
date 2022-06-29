import { useState, useContext } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProjectSort, ProjectList, ProjectCartWidget, ProjectFilterSidebar } from '../sections/@dashboard/projects';
// mock
import PROJECTS from '../_mock/projects';
// context
import { AuthContext } from '../App';

// ----------------------------------------------------------------------

export default function ProjectsPage() {
  const { state, dispatch } = useContext(AuthContext);

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  // TODO: connect to backend
  async function getProjects() {
    const uriBuildings = `${process.env.REACT_APP_API_ENDPOINT}/buildings`
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Token ${state.user.token}`
      }
    };

    const fetchResponse = await fetch(uriBuildings, requestOptions)
      .catch(error => {
        console.error(`Fetch response is:- ${error}`);
      }
    );
    
    const data = await fetchResponse.json()
      .catch(error => {
        console.error(`Fetch data Error is:- ${error}`);
      }
    );
    
    return data;
  }

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

        <ProjectList projects={PROJECTS} />
        <ProjectCartWidget />
      </Container>
    </Page>
  );
}
