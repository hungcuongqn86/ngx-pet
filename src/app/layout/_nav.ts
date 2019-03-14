export const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
    },
    /*{
        name: 'Version',
        url: '/version',
        icon: 'icon-star'
    },*/
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
                url: '/mpet/pet',
                icon: 'icon-puzzle'
            },
            {
                name: 'Pet type',
                url: '/mpet/pettype',
                icon: 'cui-graph'
            },
            {
                name: 'Pet breed',
                url: '/mpet/petbreed',
                icon: 'fa fa-sitemap'
            }
        ]
    },
    /*{
        name: 'Settings',
        url: '/#',
        icon: 'icon-settings',
    }*/
];
