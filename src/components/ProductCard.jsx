
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import PropTypes from 'prop-types';


export const ProductCard = ({product}) => {
  return (
 
   <div className ={styles.card}>
       <Link key ={product.id} to={`/detail/${product.id}`}>
      <div>
       <img className={styles.imagen} src={product.images[0]} alt={product.title} />
        <h3 className={styles.titulo}>{product.title}</h3>
        <p>{product.brand}</p>
        <p>Price: ${product.price}</p>
       </div>
       </Link>
        <button>add to card</button>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,

}