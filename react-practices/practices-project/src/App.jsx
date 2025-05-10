import Child from './Child'
import {ClassComp, FunctionComp, ArrowFunctionComp} from './Components'

function Hello() { // 컴포넌트
  return <h1>Hello1</h1>
}


function App() {

  return(
    <>
      <Hello />
      <h2>World</h2>
      <Child />
      <ClassComp/>
      <FunctionComp/>
      <ArrowFunctionComp/>
    </>
  )
}

export default App