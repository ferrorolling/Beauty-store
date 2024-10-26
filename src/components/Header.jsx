import logo from '../assets/logo.png';
import cart from '../assets/bag.png';
import fondo from '../assets/fragance.jpg';
import styles from './Header.module.css';
import Listbag from './Listbag';
import { useContext, useState } from 'react';
import { ListProductContext } from '../context/listProductContext';

const Header = () => {
 const {listProduct} = useContext(ListProductContext)
  const [visible, setvisible] = useState(false);

  const cartQuantity = listProduct.reduce((total, product) => total + product.quantity, 0);

  const handleClick = () => {
    setvisible(!visible);
  }

  return (
    <div>
       <div className={styles.greenLine}>
       CRAZY DAYS!, Martes Maquillaje, Miércoles Perfumes, Jueves Skincare ¡Hasta -80%!
        </div> 
       <div className={styles.logoContainer}>
         <img className = {styles.logo} src={logo} alt="Beauty" />

         <div className={styles.bagContainer}>
          <button className={styles.bagButton} onClick={handleClick}>
            <img className = {styles.bag} src={cart} alt="Bag" /> 
            <span className = {styles.bagNumber}>{cartQuantity}</span>  
         </button>
         </div>
       </div>
          <div className = {styles.fotoContainer}>
          <Listbag style={{ display: visible ? 'block' : 'none'}} />
          <img className = {styles.foto} src={fondo} alt="Beauty" />  
          </div>
    </div>
  )
}

export default Header
