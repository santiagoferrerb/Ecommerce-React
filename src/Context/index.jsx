import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider ({ children }) {

    const [ items , setItems ] = useState(null);
    const [ isLoading , setisLoading ] = useState(true)
 
    useEffect( () => {
       fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => {
             console.log(data)
             setisLoading(false)
             return setItems(data)})
          .catch(error => console.log(error))
       }, []
    );

    return (
        <ShoppingCartContext.Provider value={{
            items,
            setItems,
            isLoading,
            setisLoading,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }