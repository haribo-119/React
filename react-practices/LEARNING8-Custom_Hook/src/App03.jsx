import './App.css'
import { useFetch } from './hooks/useFetch'


// 3) useFetch - 사용자가 직접 커스텀한 훅
const App03 = () => {
  const { data, loading, error }
   = useFetch('http://localhost:3000/books') // http://localhost:3000/wrong

  return (
    <>
      <h2>Book List</h2>
      {loading ? <p>Loading...</p>
      : error ? <p>Error: {error}</p> 
      : (
      <ul>
        {data.map(book => (
        <li key={book.id}>
          <strong>{book.title} </strong>
          by {book.author}
        </li>))}
      </ul>)}
    </>
  )
}
export default App03