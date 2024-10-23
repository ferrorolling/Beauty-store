import { ProductDetailCard } from "../components/ProductDetailCard"

const DetailPage = ({products, pages}) => {
 
    return (
      <> 
        <ProductDetailCard products = {products} pages = {pages}/>  
      </>
    )
  }
  
  export default DetailPage
  