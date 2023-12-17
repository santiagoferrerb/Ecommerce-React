import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider ({ children }) {

    //Estados
    const [ items , setItems ] = useState(null);
    const [ isLoading , setisLoading ] = useState(true);
    const [ count, setCount ] = useState(0);
    const [ isDetailOpen , setisDetailOpen] = useState(false);
    const [ productToShow, setProductToShow ] = useState();

    //Llamado al API de Productos
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

    //Shopping Cart
    function handleAddClick () {
        const newNumber = count + 1;
        setCount(newNumber);
    }

    //Product Detail
    function changeDetailState (key) {
        const newState = !isDetailOpen;
        setisDetailOpen(newState)
        console.log(key);
    }



    return (
        <ShoppingCartContext.Provider value={{
            items,
            setItems,
            isLoading,
            setisLoading,
            count,
            setCount,
            handleAddClick,
            isDetailOpen,
            setisDetailOpen,
            changeDetailState,
            productToShow,
            setProductToShow
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }