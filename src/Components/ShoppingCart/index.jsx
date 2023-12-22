import { useContext } from 'react';
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import CartCard  from '../CartCard';
import { totalPrice, totalProducts } from '../../utils';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {

    const { setisCartOpen, productsCart, setProductsCart, order, setOrder } = useContext(ShoppingCartContext);

    // console.log(productsCart);

    function handleCheckout () {
        const orderDate = new Date();
        const orderToAdd = {
            date: orderDate,
            products: productsCart,
            totalProducts: totalProducts(productsCart),
            totalPrice: totalPrice(productsCart),
        }
        setProductsCart([]);
        setOrder([...order, orderToAdd]);
    }


    return (
        <aside className='bg-white backdrop-blur border-white-64 shadow-2xl shopping-cart flex flex-col right-0 fixed'>
            <div className='p-8 flex justify-between items-center'>
                <h2 className='font-mediun text-xl'>Cart</h2>
                <XMarkIcon
                    onClick={() => setisCartOpen(false)}
                    className="h-6 w-6 text-black-500 cursor-pointer"
                />
            </div>

            <div className='cart-card flex flex-col shrink-0 items-start content-center overflow-y-scroll'>
                {productsCart.map(item => (
                    <CartCard
                        key={item.id}
                        id = {item.id}
                        img = {item.image}
                        title = {item.title}
                        price = {item.price}
                        qty = {item.quantity}
                        wMax = {false}
                    />))
                }
            </div>

            <div className=' bg-white/60 shadow-2xl  shadow-black flex flex-col items-center justify-between h-40 px-8 py-4 w-full fixed bottom-0  rounded-t-2xl'>
                <p className='flex justify-between items-center w-full h-full'>
                    <span className='font-bold text-xl uppercase '>Subtotal:</span>
                    <span className=' font-bold text-xl'>$ {totalPrice(productsCart).toFixed(2)}</span>
                </p>
                {productsCart.length >= 1 && <Link to='/my-orders/last'>
                    <button
                        onClick={() => handleCheckout()}
                        className=' rounded-full p-8 font-bold text-lg uppercase w-80 text-center bg-neutral-800  py-2 cursor-pointer text-white shadow-black'
                    >
                        Checkout
                    </button>
                </Link>}
            </div>
        </aside>
    )
}

export default ShoppingCart
