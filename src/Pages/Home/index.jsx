import { useContext } from 'react'
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import CardLoading from "../../Components/CardLoading"
import { ShoppingCartContext } from '../../Context'
import ProductDetail from '../../Components/ProductDetail'
import ShoppingCart from '../../Components/ShoppingCart'
import { FaceFrownIcon } from '@heroicons/react/24/outline'
// import { useParams } from 'react-router-dom'


function Home() {

   const { isLoading, isDetailOpen, isCartOpen, searchItem, setSearchItem, filteredItems, filteredByCategory } = useContext(ShoppingCartContext);

   // console.log(filteredItems);

   // const { category } = useParams();
   // console.log(category);

   return (
       <Layout>
         <input
            className='mt-8 w-80 border-2 border-slate-200 p-2 rounded-2xl sle focus:outline-none select-none'
            type="text"
            placeholder='Search a Product'
            onChange={ e => setSearchItem(e.target.value)}
            value={searchItem}
         />
         <div className='flex gap-x-4 gap-y-8 flex-wrap justify-center items-center w-full max-w-screen-xl mt-8'>
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
               : filteredByCategory?.map( item => {
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
            {filteredItems.length === 0 &&
               <div className=' flex gap-4'>
                  <FaceFrownIcon className='w-6 h-6'/>
                  <p>Product doesn't exist</p>
               </div>
            }
         </div>

         {isDetailOpen && <ProductDetail />}
         {isCartOpen && <ShoppingCart />}
       </Layout>
   )
}

  export default Home