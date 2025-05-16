import './App.css'
import InfoCard from './InfoCard'
// 3-1) ProductCard
import ProductCard from './ProductCard'


// 2-3) 배열로 변경
// const cards = [
// {
//   idx : 1,
//   title : "Props in React",
//   content : "Props pass data from one component to another.",
//   author:"Alice"
// },
// {
//   idx :2,
//   title : "React Composition",
//   content : "composition makes your components more reuasble"
// }
// ]



// 2-2) 변경후
// const cardData1 = {
//   title : "Props in React",
//   content : "Props pass data from one component to another.",
//   author:"Alice"
// };
// const cardData2 = {
//   title : "React Composition",
//   content : "composition makes your components more reuasble"
// };

function App(){
// 2-1) 변경전
  //  return(
  //   <>
  //     <InfoCard
  //       title="Props in React"
  //       content="Props pass data one component to another"
  //       author="Alice"
  //     />
  //     <InfoCard
  //       title="React Composition"
  //       content="Composision makes your components more reusable"
  //     />
  //   </>
  //  )

  // 2-2)
  // return(
  //   <>
  //     <InfoCard {...cardData1}/>
  //     <InfoCard {...cardData2}/>
  //   </>
  // )

  // 2-3) 배열 호출
  // return (
  //   <>
  //   {cards.map(cardData =>(
  //     <InfoCard key={cardData.idx} {...cardData}/>
  //   ))}
  //   </>
  // )


  // 3-1) ProductCard.jsx
  const product = {
    name:"Laptop",
    price:123.4567
  };
  
  return (
    <ProductCard
    {...product}
    formatPrice={(p) => `$${p.toFixed(2)}`}
    />
  )

}

export default App