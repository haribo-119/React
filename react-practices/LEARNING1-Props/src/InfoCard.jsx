import style from './Card.module.css'

// 1-1) 개선전
// const InfoCard = (props) => (
//     <div className={style.card}>
//         <h2>{props.title}</h2>
//         <p>{props.content}</p>
//         <p>Author : {props.author}</p>
//     </div>
// )

// 1-2) 개선후
// const InfoCard = ({title,content,author}) => (
//     <div className={style.card}>
//         <h2>{title}</h2>
//         <p>{content}</p>
//         <p>Author : {author}</p>
//     </div>
// )

// 1-3) 개선후
const InfoCard =({
        title="(No title)",
        content,
        author="Anonymous"
    }) =>(    
    <div className={style.card}>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Author : {author}</p>
    </div>)


export default InfoCard