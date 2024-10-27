
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ListProductContext } from '../context/ListProductContext';


export const ProductCard = ({product}) => {

  const {setListProduct, listProduct} = useContext(ListProductContext)

  const handleClick = (product)=>{ 
    const productExists = listProduct.find((p) => p.id === product.id)

  if(productExists){
      const products = listProduct.map(item => item.id == product.id ? {...item, quantity: item.quantity + 1} : item);
      setListProduct(products)
  } else {
      setListProduct([...listProduct,{...product, quantity: 1}]) 
  }

  }

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
        <button onClick={()=> handleClick (product)}>add to card</button>
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