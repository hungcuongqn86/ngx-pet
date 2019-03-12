export const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
    },
    {
        name: 'Version',
        url: '/version',
        icon: 'icon-star'
    },
    {
        name: 'Owner',
        url: '/owner',
        icon: 'cui-people'
    },
    {
        name: 'Pet management',
        url: '/mpet',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'Pet',
                url: '/mpet/pet/list',
                icon: 'icon-puzzle'
            },
            {
                name: 'Pet type',
                url: '/mpet/pettype/list',
                icon: 'cui-graph'
            }
        ]
    },
    {
        name: 'Settings',
        url: '/#',
        icon: 'icon-settings',
    }
];
