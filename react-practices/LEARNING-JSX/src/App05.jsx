//JSX 속성과 스타일 (css 외부 파일 충돌 방지)
import './App.css'
import ButtonA from './ButtonA'
import ButtonB from './ButtonB'

function App5() {
    // 1) ButtonA, ButtonB의 컴포넌트는 전역으로 사용
    //    import './ButtonA.css' 와 import './ButtonB.css'로 구분했지만,
    //    className="button"이 같고, 컴포넌트가 전역으로 사용되어 .button{ } css를 모두 참조

    // 2) 위와 같은 문제로    ButtonA.css -> ButtonA.module.css 파일명 변경
    //    import styles from './ButtonA.module.css'; 
    //    <button className={styles.button}> 변수로 참조해서 적용되게 변경

    return(
        <>
            <ButtonA/>
            <ButtonB/>
        </>
    )

}

export default App5;

