import ColorModeContext from './contexts/ColorModeContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState, useMemo } from 'react'
import IndexPage from './pages/IndexPage';
import themes from './themes';

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

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={themes[mode]}>
                <CssBaseline />
                <IndexPage />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App
