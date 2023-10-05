import {
    Stack, Box,
    Typography,
    Button,
    Accordion, AccordionSummary, AccordionDetails, styled
} from '@mui/material';

import {
    HomeOutlined as HomeOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

import { IconLogo } from '../Icons/IconLogo';

export default function TMenu() {
    const ItemButton = styled(Button)({
        color: '#000000',
        fontWeight: 'bold',
        textTransform: 'none',
        justifyContent: 'space-between',
        flexGrow: 1,
        "&:hover": {
            color: '#696CFF'
        }
    })

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
                <ItemButton size='large' variant='text' startIcon={<HomeOutlinedIcon />} endIcon={<ExpandMoreIcon />} fullWidth>
                    Todos
                </ItemButton>
                <ItemButton size='large' variant='text' startIcon={<SettingsOutlinedIcon />} endIcon={<ExpandMoreIcon />} fullWidth>
                    Settings
                </ItemButton>
                <Accordion sx={{ width: '100%' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-settings-content"
                        id="panel-settings-header"
                    >
                        <Typography >Settings</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Profile
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Box>
    )
}