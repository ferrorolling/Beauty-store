import { useState } from "react"
import { ListProductContext } from "./listProductContext"


//creamos un provider.
export const ListProductProvider = ({children}) => {

    const [listProduct, setListProduct] = useState([])

  return (
    <ListProductContext.Provider value ={{listProduct, setListProduct}}>
         {children}
    </ListProductContext.Provider>
  )
}

