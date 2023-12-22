import { useContext } from 'react';
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {

    const { setisDetailOpen, productToShow } = useContext(ShoppingCartContext);

    return (
        <aside className='bg-white backdrop-blur border-white-64 shadow-2xl product-detail flex flex-col right-0 fixed'>
            <div className='p-8 flex justify-between items-center'>
                <h2 className='font-mediun text-xl'>Detail</h2>
                <XMarkIcon
                    onClick={() => setisDetailOpen(false)}
                    className="h-6 w-6 text-black-500 cursor-pointer"
                />
            </div>
            <figure className='relative flex flex-col w-full h-full justify-start items-center'>
                <img
                    className='mt-16 w-48 h-48 object-contain'
                    src={productToShow[0].image} alt={productToShow[0].title}
                />
                <h3 className='mt-12 px-12 text-center font-bold text-xl max-h-16 overflow-hidden'>
                    {productToShow[0].title}
                </h3>
                <p className='mt-8 px-8 text-center text-sm max-h-56 overflow-hidden'>
                    {productToShow[0].description}
                </p>
                <p className='mt-12 px-12 text-center font-bold text-xl bg-black text-white rounded-2xl'>
                    ${productToShow[0].price.toFixed(2)}
                </p>
                <div className='flex items-center absolute top-0  px-4 py-1 bg-black/60 backdrop-blur border-white-30 shadow-md rounded-3xl text-white capitalize'>
                    {productToShow[0].category}
                </div>
            </figure>
        </aside>
    )
}

export default ProductDetail
