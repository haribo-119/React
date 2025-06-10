import './App.css'
import { useState, useMemo } from 'react'

function After01() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const heavyCalculation = (num) => {
    console.log('Calculating...')
    let result = 0
    for (let i = 0; i < 1000000000; i++) {
      result += num
    }
    return result
  }

  // 변경
  // useMemo 특정 값의 계산 결과를 기억해서, 의존성 배열에 있는 값이 바뀔 때만 다시 계산하게 해준다.
  // 불필요하게 무거운 계산을 반복하지 않도록 최적화하는 용도
  const calculatedValue = useMemo(
    () => heavyCalculation(count2), [count2]) 
    // [count2]는 count2의 값이 변할때만 파라미터로 값이 넣어지도록 한다

  return (
    <>
      <p>Counter 1: {count1}</p>
      <button onClick={
        () => setCount1(count1 + 1)
      }>+</button>
      <button onClick={
        () => setCount1(count1 - 1)
      }>-</button>
      <p>Counter 2: {calculatedValue}</p>
      <button onClick={
        () => setCount2(count2 + 1)
      }>+</button>
      <button onClick={
        () => setCount2(count2 - 1)
      }>-</button>
    </>
  )
}

export default After01