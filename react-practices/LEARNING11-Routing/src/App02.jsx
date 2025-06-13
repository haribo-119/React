import './App.css'
// useLocation - location.pathname - 개발자도구 컴포넌트에서 pathname을 반환
import { Routes, Route, useParams, useLocation }
 from 'react-router-dom'
import React, { useEffect } from 'react'

function Home() {
  const location = useLocation()

  useEffect(() => {
    console.log('Current Path:', location.pathname)
  }, [location])

  return <h1>Home Page</h1>
}

function User() {
  const { id } = useParams()
  const location = useLocation()

  useEffect(() => {
    console.log('Current Path:', location.pathname)
    console.log('URL Parameter (id):', id)
  }, [id, location])

  return <h1>User ID: {id}</h1>
}

function Search() {
  const location = useLocation()
  const queryParams // URLSearchParams는 /search?keyword=react의 keyword=react 파라미터 값을 가져옴
   = new URLSearchParams(location.search)
  const keyword = queryParams.get('keyword') // keyword 변수에는 value값인 react가 저장

  useEffect(() => {
    console.log('Current Path:', location.pathname)
    console.log(
      'Query Parameter (keyword):', keyword
    )}, [keyword, location])

  return <h1>Search Keyword: {keyword}</h1>
}

function App02() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  )
}

export default App02