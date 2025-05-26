import { useState, useRef } from 'react'

// 1) useRef
// useState와 useReducer는 값을 바꿀 때 화면도 렌더링되지만
// useRef는 렌더링과 관계없이 변경 가능한 값들을 가실 수 있다
// function Counter() {
//   const count1 = useRef(0)
//   const [count2, setCount2] = useState(0)

//   const incrementRef = () => {
//     count1.current += 1
//     console.log('Ref Count:', count1.current)
//   }
  
//   return (
//     <>
//       <h2>Counter Counter</h2>
//       <p>Count 1: {count1.current}</p> 
//       {/* count1.current - 현재 값을 나타냄  */}
//       <p>Count 2: {count2}</p>
//       <button onClick={incrementRef}>useRef</button>
//       <button onClick={() => setCount2(c => c + 1)}>useState</button>
//     </>
//   )
// }

// 2) const refCount = useRef(0)
function Counter() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const refCount = useRef(0)
    
    
    const incrementRef = () => {
      refCount.current += 1
      console.log(
        'Ref Count:', refCount.current
      )
    }
  
    const syncCounts = () => {
      setCount1(refCount.current)
      setCount2(prev => prev + 1)
    }
  
    return (
      <>
        <h2>Counter Counter</h2>
        <p>Count 1: {count1}</p>
        <p>Count 2: {count2}</p>
        <button onClick={incrementRef}>
          useRef
        </button>
        <button onClick={syncCounts}>
          useState
        </button>
      </>
    )
  }

export default Counter