import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App02 from './App02.jsx'
import Before01 from './Before01.jsx'
import After01 from './After01.jsx'
import Befroe03 from './Before03.jsx'
import After03 from './After03.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App02 /> */}
    {/* <Before01/> */}
    {/* <After01 /> */}
    <Befroe03 />
  </StrictMode>,
)
