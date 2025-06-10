import './App.css'
import { useState } from 'react'

// 1) useReducer
// import React, { useReducer } from 'react' // {userReducer} 리엑트에서 제공되는 기능
// import { userReducer, initialState }
// from './reducers/userReducer'

// 2) data.js
// import React, { useReducer } from 'react' 
// import { userReducer, init }
// from './reducers/userReducer'
// import data from './data'

// 3) countReducer.js
import React, { useReducer } from 'react'
import { countReducer, initialState }
 from './reducers/countReducer'


function App() {
  // const [name, setName] = useState('')
  // const [year, setYear] = useState('')
  // const [warning, setWarning] = useState('')

  // const handleNameChange = (newName) => {
  //   const formattedName = newName.trim().toLowerCase()
  //   setName(formattedName)
  // }

  // const handleYearChange = (newYear) => {
  //   const age = new Date().getFullYear() - newYear
  //   if (age < 18) {
  //     setWarning('Must be at least 18 yrs old!')
  //   } else {
  //     setWarning('')
  //     setYear(newYear)
  //   }
  // }

  // return (
  //   <div>
  //     <input
  //       type="text"
  //       placeholder="Enter name"
  //       value={name}
  //       onChange={
  //         (e) => handleNameChange(e.target.value)}
  //     />
  //     <input
  //       type="number"
  //       placeholder="Enter birth year"
  //       value={year}
  //       onChange={
  //         (e) => handleYearChange(e.target.value)}
  //     />
  //     {
  //       warning && (
  //         <p style={{ color: 'red' }}>{warning}</p>
  //       )
  //     }
  //     <p>Name: {name}</p>
  //     <p>Year: {year}</p>
  //   </div>
  // )


  /* 
   * 1) useReducer - 여러 컴포넌트에서 상태를 공유할 때 사용
   *    reducer는 "상태"와 "액션"을 받아서 "새로운 상태"를 반환하는 함수이다
   */
//  const [state, dispatch] // 대부분 state, dispatch 라고 명시 (변수 이름은 변경가능)
//   = useReducer(userReducer, initialState) // useReducer(함수, 초기값)

  //   // 2) data.js
  //   const [state,dispatch]
  //   // userReducer.js에 init은 init함수를 호출, data는 파라미터 값으로 들어감
  //   = useReducer (userReducer,data,init)  

  // return (
  //   <div>
  //     <input
  //       type="text" placeholder="Enter name"
  //       value={state.name}
  //       onChange={(e) => dispatch({ 
  //         // userReducer.js 에서
  //         // type은 userReducer(state, action)에서 action값으로 입력됨
  //         // payload는 userReducer(state, action)에서  return문의 ation.payload로 입력됨
  //         type: 'SET_NAME',  payload: e.target.value })}
  //     />
  //     <input
  //       type="number" placeholder="Enter birth year"
  //       value={state.year}
  //       onChange={(e) => dispatch({ 
  //         type: 'SET_YEAR', payload: e.target.value })}
  //     />
  //     {state.warning
  //      && <p style={{ color: 'red' }}>{state.warning}</p>}
  //     <p>Name: {state.name}</p>
  //     <p>Year: {state.year}</p>
  //     {/* 2) data.js */}
  //     <button onClick={
  //       () => dispatch({ type: 'RESET', payload: data })}>
  //       Reset
  //     </button>

  //   </div>
  // )


  // 3) countReducer.js
  const [state, dispatch]
  = useReducer(countReducer, initialState)

  const handleClick = (type, value, event) => {
    // clientX, clientY는 브라우저가 자동으로 제공하는 이벤트 객체의 속성
    const {clientX:x, clientY: y} = event
    dispatch({
      type, payload:{value}, meta:{x,y}
    })
  }

  return(
    <>
      <p>Count : {state.count}</p>
      <button onClick={(e) => handleClick('INC',1,e)}>+1</button>
      <button onClick={(e) => handleClick('DEC',1,e)}>-1</button>
      <button onClick={(e) => handleClick('INC',2,e)}>+2</button>
      <button onClick={(e) => handleClick('DEC',2,e)}>-2</button>
    </>
  )

}

export default App
