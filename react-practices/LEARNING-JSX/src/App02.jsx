//JSX 속성과 스타일
import './App.css'

function App02(){
    // 1) HTML에서 사용하는 속성과 차이가 있다

    const disableInput = true

    return(
            <>
                <label 
                    htmlFor="username"  // for
                >
                    Username:
                </label>
                <input
                    type = "text"
                    id = "username"

                className="input-field"        // class
                autoComplete="off"             // autocomplete
                
                maxLength={20}                 // maxlength
                spellCheck={true}              // spellCheck
                readOnly={false}               // readOnly
                tabIndex={0}                   // tabindex

                disabled={disableInput}
                placeholder={
                    disableInput ? "(DISABLED)" : "Enter your name"
                }

                >
                </input>
            </>
             )
}

export default App02;