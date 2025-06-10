import { useContext } from 'react'
import ChildSub03 from './ChildSub03'
import { ToggleContext } from './contexts/ToggleContext03'

function Child03() {
  const { isOn } = useContext(ToggleContext)

  return (
    <div>
      <h2>Child3</h2>
      <p>Toggle {isOn ? 'On' : 'Off'}</p>
      <ChildSub03 />
    </div>
  )
}

export default Child03
