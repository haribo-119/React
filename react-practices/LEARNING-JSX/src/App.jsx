import './App.css'

// 1) JSX 중괄호, 문자열 삽입법
// JSX 요소들은 자바스크립트 객체로 변환될 대상이므로 HTML에 비해 엄격한 문법 준수가 요구된다
const element1 =<h2>Hello, world!</h2>
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)

const language = "javaScript"

// 2) 함수 삽입법
function BasicExpressions(){
  const name = "John"
  const age = 25;
  const isAdmin = true;

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age next year : {age + 1}</p>
      <p>{name + "'s Profile"}</p>
      <p>{`${name} is ${age} years old`}</p>
      <p>Admin status : {String(isAdmin)}</p>
    </div>
  );
}

function App(){
  return(
    <>
    {/* 주석 방법 */}
    <h1>JSX</h1>
    {language} {/*중괄호 삽입법*/} 
    <br />
    {"HelloWorld"} {/*문자열 삽입*/}
    <br />
    <BasicExpressions />
    </>
  )
}
export default App;