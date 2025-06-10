import './App.css'
// 2) 버튼 name
import Button from './Button'

function App(){
  
  // 1) 버튼 onClick
//   function handleClick(){
//     console.log('Event 1')
//   }

// return(
//   <>
//     <button onClick={handleClick}>
//       Button 1
//     </button>
//     <button onClick={()=> {console.log('Event 2')}}>
//       Button 2
//     </button>
//   </>
// )

// 2) 버튼 name , 3) 버튼 이벤트처리, 4) 이벤트 정보
  // return (
  //   <>
  //     <Button name={'Home'}/>
  //     <Button name={'Store'}/>
  //     <Button name={'Contact'}/>
  //   </>
  // )

  return (
    <>
      <input 
        onFocus = {() => console.log('Focus')} // input창 클릭
        onBlur  = {() => console.log('Blur')}  // input 외 클릭
        onChange = {(e) => console.log('e.target.value')} // 내용 입력시
        onKeyDown = {(e) => {
          console.log(e.key,'DOWN') // 키보드 버큰 입력시
          if(e.key === 'Enter' && e.shiftKey){
            console.log('Shift + Enter DOWN')
          }
        }}
        onKeyUp = {(e) => {console.log(e.key,'UP')}} // 입력키 
      /> 
    </>
  )


}

export default App; 