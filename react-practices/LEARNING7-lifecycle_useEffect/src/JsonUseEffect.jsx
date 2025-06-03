import './App.css'
import { useState, useEffect} from 'react'


// 3)  useEffect - json 데이터 호출
const JsonUseEffect = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await fetch('/data/books.json') // 파일 경로에  백엑드에서 url이 들어감
          const data = await response.json()
          setBooks(data)
        } catch (error) {
          console.error('Failed to fetch books:', error)
        } finally {
          setLoading(false)
        }
      }
  
      fetchBooks()
    }, []) // [] 배열은 컴포넌트가 마운트 되는 시점에 딱 한번만 fetchBooks() 실행
  
    if (loading) return <p>Loading...</p>
  
    return (
      <div>
        <h2>Book List</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      </div>
    )
  }

export default JsonUseEffect