import MenuComponent from '../components/Menu/MenuComponent'
import NavbarComponent from '../components/Navbar/NavbarComponent'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function IndexPage() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        bgcolor: '#F5F5F9',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 3,
                    }}
                >
                    <MenuComponent />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignContent: 'flex-start'
                        }}
                    >
                        <NavbarComponent />
                    </Box>
                </Box>
            </Container>
        </>
    )
}