import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider ({ children }) {

    //Estados
    const [ items , setItems ] = useState(null);
    const [ isLoading , setisLoading ] = useState(true);
    const [ count, setCount ] = useState(0);
    const [ isDetailOpen , setisDetailOpen] = useState(false);
    const [ productToShow, setProductToShow ] = useState({});
    const [ productsCart, setProductsCart ] = useState([]);
    const [ isCartOpen , setisCartOpen] = useState(false);
    const [ order , setOrder ] = useState([]);


    //Llamado al API de Productos
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

    //Shopping Cart

    function handleAddClick (id) {
        setisDetailOpen(false);
        setisCartOpen(true);

        const newNumber = count + 1;
        setCount(newNumber);

        const cartArray = [...productsCart];
        const product = items.filter(item => item.id === id);
        const isInCart = cartArray.some(item => item.id === id)

        if(!isInCart ) {
            product[0].quantity = 1
            cartArray.push(...product);
            setProductsCart(cartArray);
        } else {
            const moreProduct = productsCart.find(item => item.id === product[0].id)
            moreProduct.quantity += 1
        }
    }

    function deleteFromCart(id){
        const product = productsCart.find(item => item.id === id);
        const isInCart =  product.quantity > 1 ? true : false;
        const productIndex = productsCart.indexOf(product)

        const newNumber = count - 1;
        setCount(newNumber);

        if (isInCart) {
            productsCart[productIndex].quantity -= 1;
        } else {
            const newArray = [...productsCart];
            newArray.splice(productIndex,1);
            setProductsCart(newArray);
        }
    }


    //Product Detail
    function changeDetailState (id) {
        const product = items.filter(item => item.id == id);
        // const newState = !isDetailOpen;
        setisCartOpen(false);
        setisDetailOpen(true);
        setProductToShow(product);
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
            setProductToShow,
            productsCart,
            setProductsCart,
            isCartOpen,
            setisCartOpen,
            deleteFromCart,
            order,
            setOrder
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }