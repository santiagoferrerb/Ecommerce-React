import { ChevronRightIcon } from "@heroicons/react/24/solid"

function OrdersCard ({ number, date, totalProducts, totalPrice }) {

    return (
        <div className='flex shrink-0 px-4 gap-4  w-full h-24 items-center justify-start border-b-2 border-slate-200'>
            <div className="flex justify-between items-center w-full">
                <ChevronRightIcon className="w-4 h-4"/>
                <span className="w-1/4 text-center">Order: #{number}</span>
                <span className="w-1/4 text-center">{date}</span>
                <p className="flex flex-col items-center w-1/4">
                  <span className=" text-center">{totalProducts}</span>
                  <span className='font-thin text-xs'>{totalProducts == 1 ? 'Product' : 'Products'}</span>
                </p>
                <span className="w-1/4 text-center">${totalPrice}</span>
            </div>
        </div>
    )
}

export default OrdersCard