import React, {useState} from 'react';
// 리엑트에서 동적으로 변경되는 값을 state 라고 부름
// state를 관리하는 함수 명을 useState
const Counter = () =>{
    const [num,setNumber] = useState(0);
    // num은 useState(0) 기본 값을 가져옴 num = 0; 같음
    // setNumber는 num의 변경 값
    const increase = () => {
        setNumber(num + 1);
        // num = +1; 하면 안되고, 반드시 setNumber을 통해야 한다
    }

    const decrease = () => {
        setNumber(num - 1);
    }

    return(
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;