import { useContext } from 'react';
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {

    const { setisDetailOpen } = useContext(ShoppingCartContext);

    return (
        <aside className='bg-white/80 backdrop-blur border-white-30 shadow-md product-detail flex flex-col right-0 fixed'>
            <div className='p-8 flex justify-between items-center'>
                <h2 className='font-mediun text-xl'>Detail</h2>
                <XMarkIcon
                onClick={() => setisDetailOpen(false)}
                className="h-6 w-6 text-black-500 cursor-pointer"
                />
            </div>
        </aside>
    )
}

export default ProductDetail
