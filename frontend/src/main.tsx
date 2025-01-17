import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Ribbon from './components/Ribbon';
import theme from './theme';
import App from './App'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Ribbon />
            <App />
        </ThemeProvider>
    </StrictMode>,
)
