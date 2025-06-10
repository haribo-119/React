import './App.css'
import Counter from './Counter'
import Counter1 from './Counter1'
import {useRef} from 'react'


const App = () => {
  <>
    {/* 4) useRef사용시, 2개의 컴포넌트가 사용되어도, 각각의 다른 값으로 저장됨  */}
    {/* <Counter/> 
    <Counter/> */}

    {/* 3) useRef 대신 변수에 저장했을때, 저장되지 않음 */}
    {/* <Counter1/> 
    <Counter1/>  */}
  </>

  // 5) 버튼 클릭시 input창에 커서가 위치할 수 있도록 구현
  // useRef에는 DOM 요소를 담을 수도 있다
  const inputRef = useRef(null) // DOM 요소를 담을 때, null로 초기화

  const handleFocus = () => {
    console.log(inputRef.current) // <input> 태그가 담김
    inputRef.current.focus() // 커서를 포커스
  }

    return (
      <div>
        {/*ref 객체에 넣어준다,input 요소가 담기게 됨*/}
        <input ref={inputRef}      
        type="text" placeholder='Type...'/>
        <button onClick={handleFocus}>
          Focus Input
        </button>
      </div>
    )

}

export default App