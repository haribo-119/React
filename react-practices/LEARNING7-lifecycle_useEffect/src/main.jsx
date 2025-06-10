import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JsonUseEffect from './JsonUseEffect.jsx'
import TimerStart from './TimerStart.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    // <JsonUseEffect />
    <TimerStart/>
  // </StrictMode>,
)
