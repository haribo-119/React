import style from './Card.module.css'

const ProductCard = ({
    name, price, formatPrice
}) => {
    const displayedPrice
    = formatPrice(price)

    return(
        <div className={style.card}>
            <h2>{name}</h2>
            <p>Price : {displayedPrice}</p>
        </div>
    )
}

export default ProductCard