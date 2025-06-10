import './App.css'
import {useState} from 'react'
// import Profile from './Profile'

import TempInput from './TempInput'
import UnitSelector from './UnitSelector'

import Form from './Form' 

function App(){

  /* 1) Profile.jsx(자식) 컴포넌트만 호출시, 자식 컴포넌트만 리렌더링 
   * 2) App.jsx(부모) 에서 컴포넌트 호출시, 부모, 자식 컴포넌트 리렌더링
   */
  // const users = ['Alice','Bob','Clark']
  // const [user, setUser] = useState(users[0])
  // const [status, setStatus] = useState(true)

  // console.log('App Rendered')

  // return(
  //   <>
  //     <h2>User Profile</h2>
  //     <button onClick={()=> setStatus(!status)}>
  //       Toggle Status
  //     </button>
  //     <button onClick={
  //       () => setUser(
  //         users[(users.indexOf(user)+1) % users.length]
  //       )}>
  //       Switch User
  //     </button>
  //     <p>
  //       <b>{user}</b> | {status ? 'Active':'Inactive'}
  //     </p>

  //     <Profile name={user}/>
  //   </>
  // )


  /*
   * state(상태) 끌어올리기 
   */
  // const [temperature, setTemperature] = useState("")
  // const [unit, setUnit] = useState("Celsius")

  // const convertedTemp = unit === "Celsius"
  //   ? (temperature * 9/5 + 32).toFixed(1)
  //   : ((temperature - 32) * 5/9).toFixed(1)

  // return (
  //   <div>
  //     <h2>Temperature Converter</h2>
  //     <p>
  //       Converted: {temperature ? convertedTemp : "--"} 
  //       {unit === "Celsius" ? "°F" : "°C"}
  //     </p>
  //     <TempInput
  //       value={temperature}
  //       unit={unit}
  //       onChange={setTemperature}
  //     />
  //     <UnitSelector
  //       unit={unit}
  //       onUnitChange={setUnit}
  //     />
  //   </div>
  // )


 /*
  * 4) Form 
  */
  return(
    <Form/>
  )
  

}

export default App