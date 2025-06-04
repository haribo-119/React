import {useState} from 'react'


// 1) 커스텀 훅 만들기
// useCounter 처럼 use로 시작해야 리엑트가 훅으로 인식한다
function useCounter (initialValue = 0){
    const [count,setCount] = useState(initialValue)

    const increment = () => {
        setCount((prev) => prev +1 )
    }

    const decrement = () => {
        setCount((prev) => prev -1 )
    }

    return { count, increment, decrement}

}

export default useCounter