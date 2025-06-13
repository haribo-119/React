import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App01 from './App01.jsx'
import App02 from './App02.jsx'
import App03 from './App03.jsx'
import App04 from './App04.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App01 /> */}
    {/* <App02 /> */}
    {/* <App03 /> */}
    <App04 />
  </StrictMode>,
)
