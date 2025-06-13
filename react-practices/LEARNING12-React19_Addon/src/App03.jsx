import './App.css'
// useOptimistic
// 서버 응답이 오기 전까지는 “예상 결과”를 UI에 보여주고, 서버 응답이 오면 실제 데이터로 교체한다
//예시:
//댓글을 작성하고 “등록” 버튼을 누르면, 서버에서 저장이 끝나기 전에
//바로 댓글이 화면에 보이게 하는 것
import {useState, useOptimistic} from 'react'
import {updateName} from './asynctasks'

const App03= () => {

  const [name, setName] = useState('(Empty)')
  const [optName, setOptName] = useOptimistic(name);

  const submitAction = async formData => {
    const newName = formData.get('name')
    setOptName(`⏳ ${newName}`)
    const updatedName = await updateName(newName)
    setName(updatedName)
  }

  return (
    <div>
      <form action ={submitAction}>
        <p>Your name is : {optName} </p>
        <p>
          <label>Change Name :</label>
          <input
            type='text'
            name='name'
            />
          <button type='submit'>
              Update
          </button>
        </p>
      </form>
    </div>
  )

}

export default App03