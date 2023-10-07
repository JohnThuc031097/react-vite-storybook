
import {
    Stack, Box,
    Typography,
    Button,
    styled
} from '@mui/material';

import {
    SyncOutlined as SyncOutlinedIcon,
    HomeOutlined as HomeOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

import { IconLogo } from '../Icons/IconLogo';
import { useState } from 'react';

const lsMenu = {
    syncs: {
        title: 'Syncs',
        isOpen: false,
    },
    settings: {
        title: 'Settings',
        isOpen: false,
    }
}
const ItemButton = styled(Button)({
    color: '#000000',
    fontWeight: 'bold',
    textTransform: 'none',
    justifyContent: 'flex-start',
    flexGrow: 1,
    "&:hover": {
        color: '#696CFF'
    },
})

export default function TMenu() {

    const [menu, setMenu] = useState(lsMenu)

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'white',
            width: '20%',
            padding: '10px 10px 10px 10px'
        }} >
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="start"
                spacing={2}
            >
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    justifyItems="center"
                    alignItems="stretch"
                    spacing={1}
                >
                    <IconLogo width={36} height={36}></IconLogo>
                    <Typography sx={{ color: '#000000', fontSize: '22px', fontFamily: "'Roboto', sans-serif", fontWeight: 'bold' }}>
                        T-Speed
                    </Typography>
                </Stack>
                <div style={{ paddingBottom: '10px' }}></div>
                <ItemButton size='large' variant='text' startIcon={<HomeOutlinedIcon />} endIcon={<ExpandMoreIcon />} fullWidth>
                    Dashboard
                </ItemButton>
                <ItemButton size='large' variant='text' startIcon={<SyncOutlinedIcon />} endIcon={<ExpandMoreIcon />} fullWidth>
                    Syncs
                </ItemButton>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="start"
                    spacing={2}
                >
                    <ItemButton size='small' variant='text' fullWidth>
                        Master Data
                    </ItemButton>
                    <ItemButton size='small' variant='text' fullWidth>
                        R-Keeper
                    </ItemButton>
                    <ItemButton size='small' variant='text' fullWidth>
                        CO/SO
                    </ItemButton>
                </Stack>
                <ItemButton size='large' variant='text' startIcon={<HomeOutlinedIcon />} endIcon={<ExpandMoreIcon />} fullWidth>
                    Syncs
                </ItemButton>
                <ItemButton size='large' variant='text' startIcon={<SettingsOutlinedIcon />} endIcon={<ExpandMoreIcon />} fullWidth>
                    Settings
                </ItemButton>
            </Stack>
        </Box >
    )
}