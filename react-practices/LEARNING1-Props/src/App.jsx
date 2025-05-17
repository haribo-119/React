import './App.css'
import InfoCard from './InfoCard';
// 3-1) ProductCard
import ProductCard from './ProductCard';
// 4-1) CardLayout.jsx
import CardLayout from './CardLayout';

// 5-1) 고차 컴포넌트
import withConditionalCard from './withConditionalCard';
import SimpleCard from './SimpleCard';
const ConditionalSimpleCard = withConditionalCard(SimpleCard)
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
  // const product = {
  //   name:"Laptop",
  //   price:123.4567
  // };
  
  // return (
  //   <ProductCard
  //   {...product}
  //   formatPrice={(p) => `$${p.toFixed(2)}`}
  //   />
  // )

  // 4-1) CardLayout.jsx (children)
  // return(
  //     <div>
  //       <CardLayout title="About">
  //         <p>Props of Components</p>
  //       </CardLayout>

  //       <CardLayout title="Details">
  //         <ul>
  //           <li>Frature A</li>
  //           <li>Frature B</li>
  //           <li>Frature C</li>
  //         </ul>
  //       </CardLayout>

  //       <CardLayout title="Contact">
  //         <p>Email : example@example.com</p>
  //         <p>Phone : 123-456-7890</p>
  //       </CardLayout>
  //     </div>
  // )

  // 5-1)
  return(
    <>
      <ConditionalSimpleCard
        title="Active Card"
        content="This card is active"
        disabled={false}
        />
   
      <ConditionalSimpleCard 
        title="Disabled Card"
        content="This card is disabled"
        disabled={true}
      />
   </>
  )
}

export default App