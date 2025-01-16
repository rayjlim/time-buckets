import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MessageQueue } from "@react-md/alert";

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MessageQueue id="main-alerts">
            <App />
        </MessageQueue>
    </StrictMode>,
)
