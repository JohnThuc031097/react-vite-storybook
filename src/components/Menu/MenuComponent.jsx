import {
    Stack, Box,
    List,
    Typography,
} from '@mui/material';

import { IconLogo } from '../Icons/IconLogo';
import MenuListComponent from './MenuListComponent';
import MenuListStorage from '../../storages/MenuListStorage';

export default function MenuComponent() {

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'white',
            width: '300px',
            height: '650px',
            padding: '10px 10px 10px 10px',
            borderRadius: '20px'
        }} >
            <Stack
                direction="column"
                justifyContent="center"
                justifyItems={'center'}
                alignItems="center"
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
                        height: '450px',
                        overflow: 'auto',
                    }}
                    component="nav"
                >
                    {MenuListStorage.map((menu, index) => {
                        return (
                            <MenuListComponent key={index} Icon={menu.icon} title={menu.title} items={menu.items} />
                        )
                    })}
                </List>
                <Typography sx={{ pt: '40px', color: '#000000', fontSize: '14px', fontStyle: 'italic' }}>
                    Version v1.0 - Coder by ThucNobita
                </Typography>
            </Stack>
        </Box >
    )
}