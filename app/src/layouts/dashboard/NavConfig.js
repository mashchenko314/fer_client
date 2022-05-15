// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = {
  path1: [
    {
      title: 'Главная',
      path: '/dashboard/',
      icon: getIcon('eva:pie-chart-2-fill'),
    },
  ],

  path2: [
    {
      title: 'Поддержка',
      path: '/dashboard/support',
      icon: getIcon('eva:question-mark-circle-fill'),
    },
  ],

  exit: [
    {
      title: 'Выйти',
      path: '/register',
      icon: getIcon('eva:log-out-fill'),
    },
  ]
}

export default navConfig;
