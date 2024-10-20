
import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0');

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

    const productsData = await response.json();
        
        const productList = productsData.products;
        const filteredProducts = productList.filter(product => 
          ["fragrances", "beauty", "skin-care"].includes(product.category)
        );
        setPages(filteredProducts.length);
        setProducts(filteredProducts)

      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []);

  return { products, loading, error ,pages }; 
};

