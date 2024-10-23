import logo from '../assets/logo.png';
import cart from '../assets/bag.png';
import fondo from '../assets/fragance.jpg';
import styles from './Header.module.css';
import Listbag from './Listbag';

const Header = () => {
  return (
    <div>
       <div className={styles.greenLine}>
       CRAZY DAYS!, Martes Maquillaje, Miércoles Perfumes, Jueves Skincare ¡Hasta -80%!
        </div> 
       <div className={styles.logoContainer}>
         <img className = {styles.logo} src={logo} alt="Beauty" />

         <div className={styles.bagContainer}>
          <button className={styles.bagButton}>
            <img className = {styles.bag} src={cart} alt="Bag" /> 
            <span className = {styles.bagNumber}>4</span>  
         </button>
         </div>
       </div>
          <div className = {styles.fotoContainer}>
          <Listbag />
          <img className = {styles.foto} src={fondo} alt="Beauty" />  
          </div>
    </div>
  )
}

export default Header
