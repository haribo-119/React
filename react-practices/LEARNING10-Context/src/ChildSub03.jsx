import { useContext } from 'react'
import { ToggleContext } from './contexts/ToggleContext03'

function ChildSub03() {
  const { toggle } = useContext(ToggleContext)

  return (
    <div>
      <h2>Child4</h2>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default ChildSub03