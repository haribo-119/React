import './App.css'
// useActionState 
// 1) 폼(form)과 관련된 비동기 작업을 쉽게 처리할 수 있게 해준다
// 2) 상태(state)와 액션(action), 그리고 비동기 작업의 진행 상태(pending)를 한 번에 관리
import {useActionState} from 'react'
import {rollDice} from './asynctasks'

const App02 = () => {
  const [dice, submitAction, isPending]
  = useActionState(
    async () =>{
      try {
        const result = await rollDice()
        return result
      } catch(e){
        return e
      }
    }, 7 //dice 초기값
  )

  return (
    <div>
      <form action ={submitAction}>
      <button 
        type='submit' disabled={isPending}>
      {isPending?'Rolling...' : 'Roll Dice'}
      </button>
      {dice instanceof Error
       && <p>Error : {dice.message}</p>}

      {!(dice instanceof Error)
      && <p>Dice result : {dice}</p>}
      </form>
    </div>
  )

}

export default App02