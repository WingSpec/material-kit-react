import { useState, useContext, useEffect } from 'react';
// material
import { Container, Stack, Typography, LinearProgress } from '@mui/material';
// components
import Page from '../components/Page';
import { ProjectSort, ProjectList, ProjectCartWidget, ProjectFilterSidebar } from '../sections/@dashboard/projects';
// context
import { AuthContext } from '../App';

// ----------------------------------------------------------------------

export default function ProjectsPage() {
  const { state, dispatch } = useContext(AuthContext);

  const [openFilter, setOpenFilter] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded && state.isLoggedIn) {
      getProjects();
    }
  });

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  // TODO: connect to backend
  async function getProjects() {
    const uriBuildings = `${process.env.REACT_APP_API_ENDPOINT}/buildings/`
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Token ${state.user.token}`
      }
    };

    const fetchResponse = await fetch(uriBuildings, requestOptions);
    const data = await fetchResponse.json();
    
    setProjects(data);
    setIsLoaded(true);
  }
  console.log(isLoaded);
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

        { isLoaded
          ? <ProjectList projects={projects} />
          : <LinearProgress />
        }
        
        <ProjectCartWidget />
      </Container>
    </Page>
  );
}
