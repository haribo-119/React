// BrowserRouter는 URL을 다룰 수 있고 새로고침 없이 페이지를 전환가능
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App01 from './App01.jsx'
import App02 from './App02.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <App01 /> */}
    <App02 />
  </BrowserRouter>,
)
