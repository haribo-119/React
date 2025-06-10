import React from 'react'

function Child({ active }) {
  console.log(
    'Child rendered'
  )
  return (
    <p>
      Child: {
        active ? 'Active' : 'Not active'
      }
    </p>
  )
}
// React.memo는 리액트에서 컴포넌트의 불필요한 리렌더링을 막아주는 고차 컴포넌트
export default React.memo(Child)