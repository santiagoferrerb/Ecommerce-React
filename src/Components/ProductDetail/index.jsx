import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid';

const ProductDetail = () => {

    return (
        <aside className='bg-white/80 backdrop-blur border-white-30 shadow-md product-detail flex flex-col right-0 fixed'>
            <div className='p-8 flex justify-between items-center'>
                <h2 className='font-mediun text-xl'>Detail</h2>
                <XMarkIcon className="h-6 w-6 text-black-500"/>
            </div>
        </aside>
    )
}

export default ProductDetail
