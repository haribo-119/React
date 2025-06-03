import './App.css'
// 1) 생명주기
// import ClassComp from './ClassComp'
// import FuncComp from './FuncComp'
// import { useState } from 'react'

// 2) useEffect
import {useState, useEffect} from 'react'

const App = () => {

  //1) 생명주기 
  // const [selected, setSelected] = useState('')

  // return (
  //   <>
  //     {['', 'ClassComp', 'FuncComp'].map((option) => (
  //       <label key={option}>
  //         <input
  //           type="radio" value={option}
  //           checked={selected === option}
  //           onChange={(e) => setSelected(e.target.value)}/>
  //         {option || 'None'}
  //       </label>
  //     ))}
  //     {selected && (selected === 'ClassComp' ? <ClassComp /> : <FuncComp />)}
  //   </>
  // )

  // 2) useEffect
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const handleIncrease = (setter) => { setter((prev) => prev + 1) }

  useEffect(() => {
    console.log(`C1: ${count1}, C2: ${count2}`)
  }, [count1]) // console.log에는 count1이 클릭되어야 이벤트가 발생됨
  // useEffect의 [] 배열이 비어있으면 모든 이벤트에 발생 됨

  return (
    <div>
      <h2>Count1: {count1}</h2>
      <button onClick={() => handleIncrease(setCount1)}>Count1++</button>

      <h2>Count2: {count2}</h2>
      <button onClick={() => handleIncrease(setCount2)}>Count2++</button>
    </div>
  )

}
export default App