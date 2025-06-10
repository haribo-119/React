import ChildSub01 from './ChildSub01'

function Child01 ({count,setCount}){
  return (
    <div>
      <h2>Child1</h2>
      <ChildSub01
        count={count}
        setCount={setCount} />
    </div>
  )

}

export default Child01