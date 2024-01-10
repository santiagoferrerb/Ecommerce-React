import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import CartCard from "../../Components/CartCard";
import { totalPrice } from "../../utils";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MyOrder() {

    const { order } = useContext(ShoppingCartContext);

    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
    if(index === 'last') {
        index = order.length
    }

    return (
        <Layout>
            <div className='flex gap 4 w-full justify-center items-center pt-16 gap-4' >
                <Link to={'/my-orders'}>
                    <ChevronLeftIcon className='h-4 w-4'/>
                </Link>
                <h2>My Order</h2>
            </div>
            <div className='w-5/6 flex flex-col shrink-0 items-start content-center pt-8 truncate'>
                {order?.[index-1].products.map(item => (
                    <CartCard
                        key={item.id}
                        id = {item.id}
                        img = {item.image}
                        title = {item.title}
                        price = {item.price}
                        qty = {item.quantity}
                        wMax = {true}
                    />))
                }
            </div>
            <h2 className="w-5/6 p-2 flex justify-center gap-2 font-bold text-xl">
               <span>Total:</span>
               <span>${totalPrice(order[(index-1)].products)}</span>
            </h2>
        </Layout>
    )
}

export default MyOrder