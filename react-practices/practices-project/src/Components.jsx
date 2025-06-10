import React, {Component} from 'react';

// 이전에 사용하던 리엑트의 컴포넌트 구조 
// class 방식이 이제는 사용되지 않는다
// 최근에는 함수형 컴포넌트가 주로 사용됨
class ClassComp extends Component {
    render(){
        return <p>Class Comp</p>
    }
}

function FunctionComp() { // 함수형 컴포넌트
    return <p>Funtion Comp</p>
}

const ArrowFunctionComp = () =>{ // 함수형 컴포넌트
  return <p>Arrow Function  Comp</p>  
};

export { ClassComp, FunctionComp, ArrowFunctionComp};