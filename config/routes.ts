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
      name: 'avatar-gen',
      icon: 'IdcardTwoTone',
      path: '/avatar-gen',
      microApp: 'avatar-gen',
    },
    {
      name: 'Liao',
      icon: 'CompassTwoTone',
      path: '/Liao',
      microApp: 'Liao',
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
        icon: 'smile',
        component: './Welcome',
    },
    {
        path: '/admin',
        name: 'admin',
        icon: 'crown',
        access: 'canAdmin',
        component: './Admin',
        routes: [
            {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
            },
        ],
    },
    {
        name: 'list.table-list',
        icon: 'table',
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
