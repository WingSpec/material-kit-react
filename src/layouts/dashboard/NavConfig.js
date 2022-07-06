// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'projects',
    path: '/projects',
    icon: getIcon('akar-icons:folder'),
  },
  {
    title: 'user',
    path: '/user',
    icon: getIcon('akar-icons:person'),
  },
];

export default navConfig;
