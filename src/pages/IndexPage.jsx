import MenuComponent from '../components/Menu/MenuComponent'
import NavbarComponent from '../components/Navbar/NavbarComponent'

import {
    Box,
} from '@mui/material';

export default function IndexPage() {
    return (
        <Box
            bgcolor='background.default'
            color='text.primary'
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '95vh',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                borderRadius: 1,
            }}
        >
            <MenuComponent />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    flexGrow: 1,
                }}
            >
                <NavbarComponent />
            </Box>
        </Box>
    )
}