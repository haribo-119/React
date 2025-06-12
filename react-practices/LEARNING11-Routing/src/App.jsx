import './App.css'

// Routes는 다수의 Route중 URL과 일치하면 렌더링됨
// Link는 각각에 지정된 경로로 URL을 변경하여 다른 페이지로 이동
import {Routes, Route, Link }
 from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </nav>
      <Routes>
        <Route path='/'
         element={<Home />} />
        <Route path='/about'
         element={<About />} />
        <Route path='/contact'
         element={<Contact />} />
      </Routes>
    </>
  )
}

export default App