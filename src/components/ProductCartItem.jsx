import { useContext } from "react";
import { ListProductContext } from "../context/ListProductContext";
import styles from './ProductCartItem.module.css'

export const ProductCartItem = ({product}) => {

    const {listProduct, setListProduct }= useContext(ListProductContext)

    const handleClick = (id) => {
        const updatedList = listProduct.filter((product) => product.id !== id);
        setListProduct(updatedList);
      };

  return (
    <div className={styles.card}>
        <div className={styles.imageContainer}>
        <img className={styles.imagen} src={product.images[0]} alt={product.title} />
        </div>
        <div className={styles.titleButtonContainer}>
            <div className={styles.titleContainer}>
                <p className={styles.productTitle}>{product.title}</p>
                <p>${product.price}</p>
                <p>qty : {product.quantity}</p>
            </div>
        <button className={styles.button}  onClick={()=>handleClick(product.id)}>X</button> 
        </div>
    </div>
  )
}

