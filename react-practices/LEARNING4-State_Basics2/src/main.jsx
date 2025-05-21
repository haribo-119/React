import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 /*  왜 렌더링이 두 번 일어날까?
  *  <StrictMode>는 함수 컴포넌트의 body(즉, 함수 전체)를 두 번 실행해서
  *  side effect(부수 효과)가 안전하게 작성되었는지 확인한다
  *  실제로는 렌더링이 두 번 일어나지만, 이는 개발 환경에서만 그렇고,
  *  프로덕션(배포)에서는 한 번만 렌더링된다
  */

  //<StrictMode>
    <App />
  //</StrictMode>,
)
