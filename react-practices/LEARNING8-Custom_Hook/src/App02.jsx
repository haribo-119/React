import './App.css'
import useWindowSize from './hooks/useWindowSize'

// 2) 커스텀 훅 - useWindowSize
const App02 = () => {
  const {width, height}
   = useWindowSize()

  return (
    <>
      <h2>Window Size</h2>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </>
  )

}

export default App02