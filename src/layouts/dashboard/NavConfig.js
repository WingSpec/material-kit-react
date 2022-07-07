// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const getProjectsCallback = () =>
  // [All, project1, project2, ...] or [All]
  [
    {
      title: 'all',
      path: '/projects/all',
    },
  ].concat(
    (JSON.parse(sessionStorage.getItem('projects')) || []).map((project) => ({
      title: project.address,
      path: `/projects/${project.id}`,
    }))
  );

const navConfig = [
  {
    title: 'projects',
    path: '/projects',
    icon: getIcon('akar-icons:folder'),
    // pass a callback function to be called on render
    // need this because projects is populated asynchronously, so we want to be able
    // to both render when we have no projects and when we do have projects
    children: { callback: getProjectsCallback },
  },
  {
    title: 'user',
    path: '/user',
    icon: getIcon('akar-icons:person'),
  },
];

export default navConfig;
