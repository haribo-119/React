import './App.css'
import useCounter from './hooks/useCounter'


// 1) 커스텀 훅 만들기
const App01 = () => {

  //1) 커스텀 훅은 반드시 컴포넌트(const App)안에서 실행되어야 한다
  const {
    count, increment, decrement
  } = useCounter(0)


return (
  <>
    <h2>Counter: {count}</h2>
    <button onClick={increment}>
      Increment
    </button>

    <button onClick={decrement}>
      Decrement
    </button>
  </>
 )
}

export default App01