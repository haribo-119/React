import { useState } from 'react'

// 3) useRef 대신 변수에 저장했을때
// countVar가 초기화됨, 리랜더링 될때마다 다시 실행됨

// let countVar = 0 전역변수를 사용할 경우,
// APP.jsx 에서 <Counter1/> , <Counter1/>  중복으로 두번 사용하게될때
// 전역변수로 한가지  countVar 전역 변수만을 참조함

function Counter1() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  let countVar = 0 // 버튼 클릭시 리랜더링, 초기화됨

  const incrementVar = () => {
    countVar++
    console.log(
      'Var Count:', countVar 
    )
  }

  const syncCounts = () => {
    setCount1(countVar)
    setCount2(prev => prev + 1)
  }

  return (
    <>
      <h2>Counter App</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <button onClick={incrementVar}>
        local var
      </button>
      <button onClick={syncCounts}>
        useState
      </button>
    </>
  )
}

export default Counter1