import { useState, useContext, useEffect } from 'react';
// material
import { Container, Stack, Typography, LinearProgress } from '@mui/material';
// components
import Page from '../components/Page';
import { ProjectSort, ProjectList, ProjectFilterSidebar } from '../sections/@dashboard/projects';
// context
import { AuthContext } from '../App';

// ----------------------------------------------------------------------

export default function ProjectsPage() {
  const { state, dispatch } = useContext(AuthContext);

  const [openFilter, setOpenFilter] = useState(false);
  const [projects, setProjects] = useState(JSON.parse(sessionStorage.getItem('projects')));
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(JSON.parse(sessionStorage.getItem('projects')));

  // on page load, call getProjects
  useEffect(() => getProjects(), []);

  // whenever the value of filter changes, call filterProjects
  // also set projects as a dependency so that filterProjects is called when projects are initially loaded
  useEffect(filterProjects, [filter, projects]);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  // callback function sent to ProjectFilterSidebar
  // sets value of filter based on value selected
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  // set filteredProjects based on value of filter
  function filterProjects() {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.buildingStatus === filter));
    }
  }

  // get projects from API backend
  async function getProjects() {
    if (projects) {
      setIsLoaded(true);
      return;
    }
    const uriBuildings = `${process.env.REACT_APP_API_ENDPOINT}/buildings/`;
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Token ${state.user.token}`,
      },
    };

    const fetchResponse = await fetch(uriBuildings, requestOptions);
    const data = await fetchResponse.json();

    setProjects(data);
    sessionStorage.setItem('projects', JSON.stringify(data));
    setIsLoaded(true);
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
              defaultValue={filter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
              onChangeFilter={handleChangeFilter}
            />
            <ProjectSort />
          </Stack>
        </Stack>

        {isLoaded ? <ProjectList projects={filteredProjects} /> : <LinearProgress />}
      </Container>
    </Page>
  );
}
