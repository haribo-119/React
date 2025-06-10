import styles from './Card.module.css'

// 4-1) CardLayout.jsx (children)
const CardLayout = ({
    title, children // 내부 요소들인 들어옴
}) => {
    console.log(children)
    return(
    <div className={styles.card}>
        <h2>{title}</h2>
        <div className="content">
            {children}
        </div>
    </div>
    )
}

export default CardLayout;