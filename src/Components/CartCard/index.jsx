import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function CartCard ({ id, img, title, price, qty, wMax }) {

    const { deleteFromCart } = useContext(ShoppingCartContext);

    return (
        <div className='flex shrink-0 px-4 gap-4  w-full h-24 items-center justify-start border-b-2 border-slate-200 '>
            <span className='flex items-center justify-center border-2 p-3 rounded-full w-4 h-4 font-bold text-sm'>{qty}</span>
            <img
                className="w-12 h-12 object-contain"
                src={img} alt={title}
            />
            <p className={wMax ? "flex w-full flex-col" :"flex w-1/2 flex-col"}>
                <span className='text-sm truncate'>{title}</span>
                <span className='font-bold text-base'>$ {price.toFixed(2)}</span>
            </p>
            <div>
                {!wMax && <XMarkIcon
                    onClick={() => deleteFromCart(id)}
                    className="h-4 w-4 text-slate-400 cursor-pointer"
                />}
            </div>
        </div>
    )
}

export default CartCard