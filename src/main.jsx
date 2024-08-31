import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createTheme, ThemeProvider} from '@mui/material';
import App from './App.jsx'
import './index.css'


const theme = createTheme({})
createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
)
