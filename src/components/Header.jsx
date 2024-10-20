import logo from '../assets/logo.png';
import fondo from '../assets/fragance.jpg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
       <div className={styles.greenLine}>
       CRAZY DAYS!, Martes Maquillaje, Miércoles Perfumes, Jueves Skincare ¡Hasta -80%!
        </div> 
       <div className={styles.logoContainer}>
         <img className = {styles.logo} src={logo} alt="Beauty" />  
       </div>
       <div className=''>
       <img className = {styles.foto} src={fondo} alt="Beauty" />  
       </div>
    </div>
  )
}

export default Header
