import './App.css'
import { useState } from 'react'
import Child01 from './Child01'

// test
function App01(){
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>App</h2>
      <Child01
        count={count} setCount={setCount}
        />
    </div>
  )

}

export default App01