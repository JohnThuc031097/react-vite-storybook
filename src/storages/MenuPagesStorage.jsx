import {
    SyncOutlined as SyncOutlinedIcon,
    HomeOutlined as HomeOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
} from '@mui/icons-material';

const MenuPagesStorage = [
    {
        isOpen: false,
        title: 'Dashboard',
        icon: HomeOutlinedIcon,
        onClick: () => console.log('Click ' + this.title),
        items: null
    },
    {
        isOpen: false,
        title: 'Syncs',
        icon: SyncOutlinedIcon,
        onClick: () => console.log('Click ' + this.title),
        items: [
            {
                isOpen: false,
                title: 'Menu',
                isSelected: false,
                onClick: () => console.log('Click ' + this.title)
            },
            {
                isOpen: false,
                title: 'Master Data',
                isSelected: false,
                onClick: () => console.log('Click ' + this.title)
            },
            {
                isOpen: false,
                title: 'Customer',
                isSelected: false,
                onClick: () => console.log('Click ' + this.title)
            },
        ]
    },
    {
        isOpen: false,
        title: 'Settings',
        icon: SettingsOutlinedIcon,
        onClick: () => console.log('Click ' + this.title),
        items: [
            {
                isOpen: false,
                title: 'Profile',
                isSelected: false,
                onClick: () => console.log('Click ' + this.title)
            },
        ]
    },

]

export default MenuPagesStorage;