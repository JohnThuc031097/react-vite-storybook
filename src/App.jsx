import ColorModeContext from './contexts/ColorModeContext';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
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
    const themes = {
        'light': createTheme({
            palette: {
                background: {
                    default: '#F2F7FC',
                },
                primary: {
                    main: '#FFFFFF',
                },
                text: {
                    primary: '#525B68',
                }
            }
        }),
        'dark': createTheme({
            palette: {
                background: {
                    default: '#0F1D2C',
                },
                primary: {
                    main: '#141A1F',
                },
                text: {
                    primary: '#AAB2BE',
                }
            }
        })
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={themes[mode]}>
                <CssBaseline enableColorScheme />
                <IndexPage />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App
