import { createTheme } from '@mui/material';

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
                paper: '#141A1F',
                input: '#1F262E'
            },
            primary: {
                main: '#141A1F',
            },
            text: {
                primary: 'white',
                secondary: '#AAB2BE',
            },
            action: {
                hover: '#1F262E'
            }
        },
    })
}

export default themes