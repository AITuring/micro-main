export default [
  {
    path: '/user',
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
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
    microApp: 'Liaoshi',
  },
  {
    name: 'PPTist',
    icon: 'FilePptTwoTone',
    path: '/PPTist',
    microApp: 'PPTist',
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
