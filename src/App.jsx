import ColorModeContext from './contexts/ColorModeContext';
import { ThemeProvider, createTheme } from '@mui/material';
import { useState, useMemo } from 'react'
import IndexPage from './pages/IndexPage';

function App() {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <IndexPage />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App
