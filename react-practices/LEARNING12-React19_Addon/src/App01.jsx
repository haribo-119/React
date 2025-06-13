import './App.css'
// useTransition -  UI가 버벅이지 않게, "덜 중요한" 업데이트를 부드럽게 처리할 때 사용
// (예: 대량의 리스트 필터링, 무거운 컴포넌트 렌더링 등)
import {useState, useTransition} from 'react'
import {rollDice} from './asynctasks'

const App01 = () => {
  const [dice, setDice] = useState(null)
  const [error, setError] =  useState(null)
  const [isPending, startTransition] = useTransition()

  const handleRoll = () => {
    setError(null)
    // startTransition 실행이 완료되면 isPending을 true로 반환
    startTransition(async () =>{

      try{
        const result = await rollDice()
        setDice(result)
      } catch(err){
        setError(err.message)
      }
    })
  }

  return (
    <div>
      <button 
      onClick={handleRoll}
      disabled={isPending}>
      {isPending?'Rolling...' : 'Roll Dice'}
      </button>
      {error && <p>Error : {error}</p>}
      {!error && !isPending && dice
      && <p>Dice result : {dice}</p>}
    </div>
  )

}

export default App01