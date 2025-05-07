import React, { useState } from "react";

const Input2 = () => {
    const [inputs,setInputs] = useState({
        name:"",
        email:"",
        tel:""
    });

    const Change = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        // input[id] = value; 이렇게는 안됨, 리엑트는 상태관리가 필요
        // Js는 오브젝트, 배열은 힙메로리에 관리됨
        // 리엑트에서는 힙메모리에 데이터를 변경을 알지 못함
        setInputs({
            ...inputs, // 스르리드 inputs을 깊은 복사-> 새로운 inpurts를 생성
            [id]:value // 변경후, 저장
        });
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={inputs.name} onChange={Change}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={inputs.email} onChange={Change}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={inputs.tel} onChange={Change}/>
            </div>
        <p>이름 : {inputs.name}</p>
        <p>이메일 : {inputs.email}</p>
        <p>전화번호 : {inputs.tel}</p>
        </div>
    );

};

export default Input2;