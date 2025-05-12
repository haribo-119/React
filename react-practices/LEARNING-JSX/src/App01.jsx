// 조건부 렌더링과 리스트 렌더링
import './App.css'

// 1) 조건부
function getUserContent(userStatus){
    return(
        userStatus == "admin"? (
            <>
                <h2>Admin Dashboard</h2>
                <button>Manage Users</button>
            </>
        ) : userStatus === "member" ? (
            <p>Welcome to the community!</p>
        ) : (
            <a href="/signup">Singn up here</a>
        )
    );
}

// 2) 연산자 활용
const hasMessage = true
const message = "Hello, World!"
const nullCheck = null
const emptyStr = ""

// 3) 배열
const fruits = ["Apple","Banana","Cherry"]
const books = [
    {id:1, title:'React Basics',published:true,publisher:'Manning'},
    {id:2, title:'Advenced Hooks',published:false,publisher:'OReilly'},
    {id:3, title:'JSX in Depth',published:true,publisher:'Packt'}
];
const publisheds = books.filter(book => book.published)

function App01() {
  return(
    <>  1) 조건부

        {getUserContent("admin")}
        {hasMessage && <h2>You have new messages!</h2>}
        {/*hasMessage값이 참일 경우 뒤의 메세지가 출력  */}
        {message && <p>Message: {message}</p>}
        {/*message값이 비어 있지 않으므로 뒤에 메세지가 출력 */}


        <p> 2) 연산자
            <br/>
            ---Null Check연산자(??)---
            <br/>
            nullCheck : {nullCheck ?? <em>No message</em>}
            {/* nullCheck = null 인경우 위에 메세지 출력  */}
            <br/>
            emptyStr : {emptyStr ?? <em>No message</em>}
            {/* emptyStr = "" 인경우 위에 메세지 출력X  */}
        </p>
        <p>
            ---Null Check연산자(||)---
            <br/>
            nullCheck : {nullCheck || <em>Empty</em>}  
            {/* nullCheck = null 인경우 위에 메세지 출력  */}
            <br/>
            emptyStr : {emptyStr || <em>Empty</em>}  
            {/* emptyStr = "" 인경우 위에 메세지 출력 */}
        </p>
            3) 배열
            <br/>
            {[0,123,'A','Hello',true,false]} {/*출력 값 : 0123AHello  */}
            <br/>
            <ul>
                {fruits.map((fruits,index) => (
                    <li key={index}>{fruits}</li>
                ))}
            </ul>
            <br/>
            {publisheds.length > 0 && <h2>Published Books</h2>}
            {publisheds.length ?
              publisheds.map(book =>
                <article key={book.id}>
                    <strong>{book.title}</strong>
                    <em>-{book.publisher}</em>
                </article>
              )
              :<p>No published books found.</p>
            }

    </>
  )
}

export default App01;