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

// 2) AND 연산자 활용
const hasMessage = true
const message = "Hello, World!"
const nullCheck = null
const nullCheck1 = ""

function App01() {
  return(
    <>
        {getUserContent("admin")}
        {hasMessage && <h2>You have new messages!</h2>}
        {/*hasMessage값이 참일 경우 뒤의 메세지가 출력  */}
        {message && <p>Message: {message}</p>}
        {/*message값이 비어 있지 않으므로 뒤에 메세지가 출력 */}


        <p>
            ---Null Check연산자(??)---
            <br/>
            nullCheck : {nullCheck ?? <em>No message</em>}
            <br/>
            nullCheck1 : {nullCheck1 ?? <em>No message</em>}
            {/* nullCheck = null 인경우 위에 메세지 출력  */}
        </p>
        <p>
            ---Null Check연산자(||)---
            <br/>
            nullCheck : {nullCheck || <em>Empty</em>}  
            <br/>
            nullCheck1 : {nullCheck1 || <em>Empty</em>}  
            {/* nullCheck = null 인경우 위에 메세지 출력  */}
        </p>
    </>
  )
}

export default App01;