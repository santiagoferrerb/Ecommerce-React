import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider ({ children }) {

    const [ items , setItems ] = useState(null);
    const [ isLoading , setisLoading ] = useState(true);
    const [ count, setCount ] = useState(0);

    useEffect( () => {
       fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => {
            //  console.log(data)
             setisLoading(false)
             return setItems(data)})
          .catch(error => console.log(error))
       }, []
    );

    function handleAddClick () {
        const newNumber = count + 1;
        setCount(newNumber);
    }

    return (
        <ShoppingCartContext.Provider value={{
            items,
            setItems,
            isLoading,
            setisLoading,
            count,
            setCount,
            handleAddClick
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }