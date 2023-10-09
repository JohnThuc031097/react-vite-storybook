import {
    SyncOutlined as SyncOutlinedIcon,
    HomeOutlined as HomeOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
} from '@mui/icons-material';

const menuListStorage = [
    {
        title: 'Dashboard',
        icon: HomeOutlinedIcon,
        onClick: () => console.log('Click ' + this.title),
        items: null
    },
    {
        title: 'Syncs',
        icon: SyncOutlinedIcon,
        onClick: () => console.log('Click ' + this.title),
        items: [
            {
                title: 'Menu',
                isSelected: false,
                onClick: () => console.log('Click ' + this.title)
            },
            {
                title: 'Master Data',
                isSelected: false,
                onClick: () => console.log('Click ' + this.title)
            },
            {
                title: 'Customer',
                isSelected: false,
                onClick: () => console.log('Click ' + this.title)
            },
        ]
    },
    {
        title: 'Settings',
        icon: SettingsOutlinedIcon,
        onClick: () => console.log('Click ' + this.title),
        items: [
            {
                title: 'Profile',
                isSelected: false,
                onClick: () => console.log('Click ' + this.title)
            },
        ]
    },

]

export default menuListStorage;