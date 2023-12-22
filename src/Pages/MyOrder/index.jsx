import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import CartCard from "../../Components/CartCard";
import { totalPrice } from "../../utils";

function MyOrder() {

    const { order } = useContext(ShoppingCartContext);

    console.log(order);


    return (
        <Layout>
            <h2 className="pt-16">My Order</h2>
            <div className='w-5/6 flex flex-col shrink-0 items-start content-center pt-8'>
                {order?.slice(-1)[0].products.map(item => (
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
            <button className='bg-neutral-800 w-5/6 py-4 rounded-full mt-8 font-medium text-white text-2xl'>Pagar</button>
        </Layout>
    )
}

export default MyOrder