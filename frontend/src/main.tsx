import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { NuqsAdapter } from 'nuqs/adapters/react'
import Ribbon from './components/Ribbon';
import theme from './theme';
import App from './App'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NuqsAdapter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Ribbon />
                <App />
            </ThemeProvider>
        </NuqsAdapter>
    </StrictMode>,
)
