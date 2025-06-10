import { createContext, useState } from 'react'

// createContext - context(공유 저장소)를 생성
const CountContext = createContext()

// CountProvider - 데이터를 공급하는 프로바이더
function CountProvider({ children }) {
  const [count, setCount] = useState(0)

  return (
    <CountContext value={{ count, setCount }}>
      {children}
    </CountContext>
  )
}

export { CountContext, CountProvider }