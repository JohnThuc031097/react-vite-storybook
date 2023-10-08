import {
    Stack, Box,
    List, ListSubheader, ListItemButton, ListItemIcon, ListItemText,
    Collapse,
    Typography,
    Button,
    styled,
} from '@mui/material';
import {
    SyncOutlined as SyncOutlinedIcon,
    HomeOutlined as HomeOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    FiberManualRecord as FiberManualRecordIcon,
} from '@mui/icons-material';

import { IconLogo } from '../Icons/IconLogo';
import MenuList from './MenuList';



const lsMenu = [
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

export default function TMenu() {

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'white',
            width: '320px',
            padding: '10px 10px 10px 10px'
        }} >
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="start"
                spacing={1}
            >
                <div style={{ paddingBottom: '20px' }}></div>
                <Stack
                    direction="row"
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                    spacing={1}
                    sx={{ paddingLeft: '10px' }}
                >
                    <IconLogo width={42} height={42}></IconLogo>
                    <Typography sx={{ paddingLeft: '20px', color: '#000000', fontSize: '30px', fontWeight: 'bold' }}>
                        T-Monitor
                    </Typography>
                </Stack>
                <div style={{ paddingBottom: '20px' }}></div>

                <List
                    sx={{
                        width: '100%',
                    }}
                    component="nav"
                >
                    {lsMenu.map((menu, index) => {
                        return (
                            <MenuList key={index} Icon={menu.icon} title={menu.title} items={menu.items} />
                        )
                    })}
                </List>

            </Stack>
        </Box >
    )
}