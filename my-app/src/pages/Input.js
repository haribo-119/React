import React, { useState } from "react";

const Input = () => {
    const [textValue, setTextValue] = useState("");

    const Change = (e) => {
        setTextValue(e.target.value)
        // e.target :<input type="text" value=""> 에서 onChange 가 호출된 변경값을 가져온다
    };

    return (
        <div>
            <input type="text" value={textValue} onChange={Change} />
            <br/>
            <p>{textValue}</p>
        </div>
    );

};

export default Input;