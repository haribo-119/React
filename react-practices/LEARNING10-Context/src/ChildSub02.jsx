import { useContext } from 'react'
import { CountContext } from './contexts/CountContext02'

function ChildSub02() {
  // useContext - 바로 context에 접근
  // CountContext02의 CountProvider 함수의 count,setCount를 가저옴
  const { count, setCount } = useContext(CountContext)

  return (
    <div>
      <h2>Child2</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default ChildSub02