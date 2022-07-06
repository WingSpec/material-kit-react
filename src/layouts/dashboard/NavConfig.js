// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const projects = JSON.parse(sessionStorage.getItem('projects'));

const navConfig = [
  {
    title: 'projects',
    path: '/projects',
    icon: getIcon('akar-icons:folder'),
    // children: [All, project1, project2, ...]
    children: [
      {
        title: 'all',
        path: '/projects/all',
      },
    ].concat(
      projects.map((project) => {
        return {
          title: project.address,
          path: `/projects/${project.id}`,
        };
      })
    ),
  },
  {
    title: 'user',
    path: '/user',
    icon: getIcon('akar-icons:person'),
  },
];

export default navConfig;
