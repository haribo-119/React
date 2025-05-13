//JSX 속성과 스타일
import './App.css'
import logo from './assets/logo.jpg'

const logoAlt = 'twitter Logo'
console.log(logo)

function App03() {
    
    const divStyle = {
        backgroundColor : 'lightblue',
        margin:'12px',
        padding:'20px',
        borderRadius:'8px'
    }
    
    return(
            <>
            {/* 1) 이미지 출력 */} 
             <img
                src={logo}
                alt={logoAlt}
                width={100}
                height={80}
                />
             {/* 2) 속성1 */} 
             <span style={
                {
                  fontWeight:"bold",
                  fontStyle:"italic"
                }
             }>
                Bold & Italic
             </span>
            
            {/* 3) 속성2 */} 
            <div style={divStyle}>
                DIV 1
            </div>
            
            <div
                style={{
                // spread 연산자란? (divStyle)의 모든 속성을 복사해서 가져온다
                // 만약 divStyle에 같은 속성이 있다면, 여기서 지정한 값이 덮어씁니다(우선 적용).
                  ...divStyle, // <- spread 연산자
                  backgroundColor : 'lightgreen',
                  color:'darkblue',
                  fontWeight:'bold',
                }}
            >
                DIV 2
            </div>
            
            
            </>


             )
}

export default App03;