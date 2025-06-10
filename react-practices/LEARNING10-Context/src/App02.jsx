import './App.css'
import { CountProvider } from './contexts/CountContext02'
import Child02 from './Child02'

function App02() {
  return (
    <CountProvider>
      <h2>App</h2>
      <Child02 />
    </CountProvider>
  )
}

export default App02