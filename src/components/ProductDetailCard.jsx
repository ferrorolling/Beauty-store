
import { useProducts } from '../customHooks/useProducts';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProductDetailCard.module.css';
export const ProductDetailCard = () => {

const {products} = useProducts()
const navigate = useNavigate(); 
const {id} = useParams()
    

  if (!products || products.length === 0) {
    return <p>Loading products...</p>;
  }

  const product = products.find(product => product.id === Number(id));

  if (!product) {
    navigate('/');
    return null;
  }

return (
    <>
       <h1>{product.title}</h1>
       <hr></hr>
        <div className ={styles.card}>
          <div>
            <img className={styles.imagen} src={product.images[0]} alt={product.title} />
            <p>{product.brand}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p className={styles.description}><strong>Description:</strong> {product.description}</p>
            <p><strong>Stock:</strong> {product.stock}</p>         
        </div>
    </div>
    </>
  )
}

