import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'


const Card = ( { id, img, title, price, category }) => {

    const { handleAddClick, changeDetailState, productsCart } = useContext(ShoppingCartContext);


    return (
        <div className='bg-white/60 backdrop-blur border-white-30 shadow-md cursor-pointer w-56 h-72 flex flex-col justify-center rounded-xl select-none'>
            <figure className='relative shrink-0 overflow-hidden h-4/5 mb-4  w-full rounded-3xl'>
                <span className='absolute bottom-3 left-3 bg-white/60 backdrop-blur border-white-30 shadow-md px-2 py-1 rounded-xl text-sm font-bold capitalize'>{category}</span>

                <img
                onClick={() => changeDetailState(id)}
                className='w-full h-full object-contain' src= {img} alt={title} />

                <div
                    onClick={ () => handleAddClick(id) }
                    className='absolute top-4 right-4 flex justify-center items-center bg-stone-950/80 backdrop-blur border-white-30 shadow-md rounded-full w-8 h-8 text-white font-bold m-0 p-0 hover:scale-125'>
                    <PlusIcon className='h-5 w-5 text-black-500'/>
                </div>
            </figure>
            <p className="flex justify-between items-center px-4">
                <span className=" truncate text-sm font-semibold">{title}</span>
                <span className='font-bold text-lg'>${price.toFixed(2)}</span>
            </p>
        </div>
    )
}

export default Card