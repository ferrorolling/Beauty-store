
import { useState } from 'react';
import { Pagination } from './Pagination';
import { ProductCard } from './ProductCard';
import {useProducts} from '../customHooks/useProducts'
import {Link} from 'react-router-dom'

export const ProductContainer = () => {

  
    const [currentPage,setCurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(3)
    const {products, pages} = useProducts()
    const productsPages = products.slice((currentPage * itemsPerPage)-itemsPerPage, currentPage * itemsPerPage)


  return (
    <>
        <div className="product__container">
            {products.length > 0 ? 
            (
            productsPages.map(product => (
                
                <ProductCard 
                key={product.title} 
                product={product}
              
                />
            ))
            ) :
            (
            <p>No hay productos disponibles.</p>
            )}
            </div>
            <div>
            <Pagination filteredProducts={pages} 
                        currentPage = {currentPage} 
                        setCurrentPage = {setCurrentPage}
                        itemsPerPage={itemsPerPage}
                        setitemsPerPage ={setitemsPerPage}
                        />
            </div>
    </>
  )
}
