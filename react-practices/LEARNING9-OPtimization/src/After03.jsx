import './App.css'
import { useState, useCallback } from 'react'
import Child from './Child03'

function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(true)

// useCallback 함수(여기서는 handleClick)를 메모이제이션해서
// 의존성 배열이 바뀔 때만 새로 만들어준다
  const handleClick = useCallback(
    () => { setCount(c => c + 1) }, [])
/*
  [] 의존성 배열
배열이 비어 있으니,
컴포넌트가 처음 렌더링될 때 딱 한 번만
이 함수를 만들고,
그 이후에는 handleClick 함수가 절대 바뀌지 않는다
*/ 

  return (
    <>
      <h2>Parent</h2>
      <button onClick={() => setActive(a => !a)}>
        Toggle Active
      </button>
      <p>Count: {count}</p>
      <Child active={active} 
        onClick={handleClick} />
    </>
  )
}
export default App