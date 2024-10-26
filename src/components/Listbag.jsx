import { useContext } from 'react'
import styles from './Listbag.module.css'
import { ListProductContext } from '../context/listProductContext'
import { ProductCartItem } from './ProductCartItem'


export const Listbag = ({style}) => {

  
   const {listProduct}= useContext(ListProductContext)
   const totalPrice = Number.parseFloat(listProduct.reduce((total, product) => total + product.quantity * product.price, 0)).toFixed(2);

  return (
    <div className={styles.container} style={style}>
      
      {listProduct.length === 0 ? (
        <p className={styles.anadirAlCarrito}>Añade productos al carrito</p>
    ) : (
      listProduct.map((product)=>(
        <ProductCartItem  key={product.id}  product = {product} />
      ))
    )
    
     }
      {listProduct.length > 0 && <div>

        <h3>Total  ${totalPrice}</h3>
        <button className={styles.ListbagButton}>Realizar compra</button></div>}
    </div>
  )
}

export default Listbag
