
// 3) 버튼 이벤트 처리
// const handleEvent = (name, which) => {
//     console.log(name, which)
//   }

// 4) 이벤트 정보
const handleEvent = (name, e) => {
    console.log(name, e) // 상제 정보 SyntheticBaseEvent 객체에 담아서 보여줌
    //SyntheticBaseEvent 담는 이유는 브라우저마다 이벤트 처리가 
    // 조금씩 다르므로 SyntheticBaseEvent 객체에 담겨 출력하도록 만듬
    console.log(name, e.clientX, e.clientY) // 클릭시 (x,y 좌표)
    console.log(name, e.shiftKey) // 키보드의 shift + 클릭시 - console에 true를 반환
  }

const Button = ({name}) => (
// 2) 버튼 name
    // <button
    //     onClick = {
    //         () => console.log(name)
    //     }
    // >
    //     {name}
    // </button>

// 3) 버튼 이벤트 처리
    // <button
    //  onMouseEnter = {
    //     () => handleEvent(name, 'MouseEnter')
    //   }
    //   onMouseLeave = {
    //     () => handleEvent(name, 'MouseLeave')
    //   }
    //   onDoubleClick = {
    //     () => handleEvent(name, 'DoubleClick')
    //   }
    //   onContextMenu = { // 마우스 우클릭
    //     () => handleEvent(name, 'onContextMenu')
    //   }

    // >
    //     {name}
    // </button>


    // 4) 이벤트 정보
    <button
        onClick = {
            (e) => handleEvent(name, e)
        }
    >
        {name}
    </button>

)

export default Button