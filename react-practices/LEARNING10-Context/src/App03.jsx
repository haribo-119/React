import './App.css'
import { CountProvider } from './contexts/CountContext02'
import { ToggleProvider } from './contexts/ToggleContext03'
import Child02 from './Child02'
import Child03 from './Child03'

function App03() {
  return (
    <>
      <h2>App</h2>
      <CountProvider>
        <Child02 />
      </CountProvider>
      <ToggleProvider>
        <Child03 />
      </ToggleProvider>
    </>
  )
}

export default App03