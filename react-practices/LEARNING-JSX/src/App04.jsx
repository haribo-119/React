//JSX 속성과 스타일
import './App.css'

function App04() {
    const styleA = {
        color:'darked',
        fontWeight :'bold',
    }
    const styleB = {
        color:'navy',
        textDecoration:'underline',
    }
    const isPrimary = true

    return(
        <>
            <div style={isPrimary ? styleA : styleB}>
                This text has
            </div>
        </>


             )
}

export default App04;