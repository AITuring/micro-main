export default [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: 'alpha',
    icon: 'CrownTwoTone',
    path: '/alpha',
    microApp: 'alpha',
  },
  {
    name: 'Liao',
    icon: 'CompassTwoTone',
    path: '/Liao',
    microApp: 'Liao',
  },
  {
    name: 'shi',
    icon: 'TrophyTwoTone',
    path: '/shi',
    microApp: 'shi',
  },
  {
    name: 'PPTist',
    icon: 'FilePptTwoTone',
    path: '/PPTist',
    microApp: 'PPTist',
  },
  {
    path: '/jsplumb',
    name: 'jsplumb',
    icon: 'ApiTwoTone',
    microApp: 'jsplumb',
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'FlagTwoTone',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'CrownTwoTone',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'SmileTwoTone',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'AppstoreTwoTone',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
