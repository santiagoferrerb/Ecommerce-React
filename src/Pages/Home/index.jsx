import { useContext } from 'react'
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import CardLoading from "../../Components/CardLoading"
import { ShoppingCartContext } from '../../Context'
import ProductDetail from '../../Components/ProductDetail'
import ShoppingCart from '../../Components/ShoppingCart'


function Home() {

   const { items, isLoading, isDetailOpen, isCartOpen } = useContext(ShoppingCartContext);

   return (
       <Layout>
         <div className='flex gap-x-4 gap-y-8 flex-wrap justify-center items-center w-full max-w-screen-xl mt-16'>
            {
               isLoading ?
               <>
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
                  <CardLoading />
               </>
               : items?.map( item => {
                  return <Card
                     key = {item.id}
                     id = {item.id}
                     img = {item.image}
                     title = {item.title}
                     price = {item.price}
                     category = {item.category}
                     />
                  }
               )
            }
         </div>

         {isDetailOpen && <ProductDetail />}
         {isCartOpen && <ShoppingCart />}
       </Layout>
   )
}

  export default Home