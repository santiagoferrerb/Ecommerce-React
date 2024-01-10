import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { totalPrice, totalProducts } from "../../utils";
import { Link } from "react-router-dom";


function MyOrders() {

    const {order} = useContext(ShoppingCartContext);

    return (
        <Layout>
            <h2 className="pt-12">My Orders</h2>
            {
                order.map((item, index) => (
                    <Link key={index} to={`/my-order/${order.indexOf(item)+1}`}
                    className="flex shrink-0 px-4 gap-4  w-full h-24 items-center justify-start"
                    >
                        <OrdersCard
                            key = {order.indexOf(item)}
                            number = {order.indexOf(item)+1}
                            date = {`${item.date.getDate()}-${item.date.getMonth()}-${item.date.getFullYear()} `}
                            totalProducts = {totalProducts(item.products)}
                            totalPrice = {totalPrice(item.products)}
                        />
                    </Link>
                )
                )
            }
        </Layout>
    )
}

export default MyOrders