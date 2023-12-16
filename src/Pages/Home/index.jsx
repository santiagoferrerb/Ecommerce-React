import { useState, useEffect, useContext } from 'react'
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import CardLoading from "../../Components/CardLoading"
import { ShoppingCartContext } from '../../Context'


function Home() {

   const { items, isLoading } = useContext(ShoppingCartContext)

   return (
       <Layout>
         <div className='flex gap-x-4 gap-y-8 flex-wrap justify-center items-center w-full max-w-screen-xl'>
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
                     key={item.id}
                     img = {item.image}
                     title = {item.title}
                     price = {item.price}
                     category = {item.category}
                     />
                  }
               )
            }
          </div>
       </Layout>
   )
}

  export default Home