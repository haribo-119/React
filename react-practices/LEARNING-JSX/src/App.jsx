import './App.css'

const language = "javaScript"

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

function ElementExpressions(){
  return(
    <section>
      {element1}
      {element2}
    </section>
  )
}


// 2) 문자열
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
      <p>Admin status : {String(isAdmin)}</p>{/*String으로 변환*/}
    </div>
  );
}

// 3) 배열
function ObjectArrayExpressions(){
  const user = {
    name : "Jane",
    email : "jane@example.com"
  };
  const colors = ["red","blue","green"];
  const numbers =[1,2,3,4,5];

  return (
    <div>
      <p>User : {user.name}({user.email})</p>
      <p>First color : {colors[0]}</p>
      <p>Color count : {colors.length}</p>
    
      <p>Doubleds : {
        numbers.map(n => n*2).join(",")
        }</p>

       <p>Evens: {
         numbers.filter(n => n % 2 === 0).join(",")
        }</p> 
    </div>
  );

}


// 4) 함수형 
function FunctionExpressions(){
  const getGreeting = (name) => `Hello, ${name}!`;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const calculateTotal = (items) => {
    return items.reduce((sum,item) => sum + item.price,0);
  };

  const items = [{id:1, price:10},{id:2, price:20}];

  return(
    <div>
      <p>{getGreeting("Alice")}</p>
      <p>Today : {formatDate(new Date())}</p>
      <p>Total : ${calculateTotal(items)}</p>
      <p>Good {(()=>{
        const hours = new Date().getHours();
        return hours < 12 ? "moring!" : "afternooon!";
      })()}</p>
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
    <ElementExpressions />
    <br />
    {"HelloWorld"} {/*문자열 삽입*/}
    <br />
    <BasicExpressions />
    <br />
    <ObjectArrayExpressions />
    <br />
    <FunctionExpressions />
    </>
  )
}
export default App;