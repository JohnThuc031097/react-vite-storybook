import {
    Stack,
    List,
    Typography,
    useTheme,
} from '@mui/material';

import { IconLogo } from '../Icons/IconLogo';
import MenuListComponent from './MenuListComponent';
import MenuPagesStorage from '../../storages/MenuPagesStorage';

export default function MenuComponent() {
    // const menuPageContext = useContext(MenuPagesStorage)
    const theme = useTheme()

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.text.primary,
                width: '15%',
                minWidth: '250px',
                borderRadius: '15px',
            }}
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
                <Typography sx={{ paddingLeft: '0px', fontSize: '24px', fontWeight: 'bold' }}>
                    T-Monitor
                </Typography>
            </Stack>
            <div style={{ paddingBottom: '10px' }}></div>

            <List
                sx={{
                    width: '100%',
                    height: '75vh',
                    overflow: 'auto',
                }}
                component="nav"
            >
                {MenuPagesStorage.map((menu, index) => {
                    return (
                        <MenuListComponent key={index} Icon={menu.icon} title={menu.title} items={menu.items} />
                    )
                })}
            </List>
            <Typography sx={{
                display: 'flex', flexDirection: 'row', justifyContent: 'center',
                width: '100%',
                fontSize: '12px', fontStyle: 'italic',
                pb: 2
            }}>
                Version v1.0 - Coder by ThucNobita
            </Typography>
        </Stack>
    )
}