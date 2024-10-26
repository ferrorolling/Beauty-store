
import { ProductContainer } from "../components/ProductContainer"


const RootPage = ({products, pages}) => {

   
  return (
   
    <div>
      <ProductContainer products = {products} pages = {pages}/>
    </div>
  )
}

export default RootPage
