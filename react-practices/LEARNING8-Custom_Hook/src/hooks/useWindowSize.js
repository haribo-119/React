import { useState, useEffect } from 'react'


// 2) 커스텀 훅 - useWindowSize
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    //창 크기(resize) 이벤트가 발생하면 handleResize를 실행하도록 등록
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener( // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
      'resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize