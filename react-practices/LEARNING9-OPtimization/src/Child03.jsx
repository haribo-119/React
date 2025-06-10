import React from 'react'

function Child03({ active, onClick }) {
  console.log(
    'Child rendered'
  )

  return (
    <div>
      <p>Child: {
        active ? 'Active' : 'Not active'
      }</p>
      <button onClick={onClick}>
        Increase
      </button>
    </div>
  )
}

export default React.memo(Child03)