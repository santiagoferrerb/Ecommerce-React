const Card = ( ) => {
    return (
        <div className='bg-white cursor-pointer w-56 h-72 flex flex-col justify-center'>
            <figure className='relative animate-pulse bg-slate-300 shrink-0 overflow-hidden  mb-4 w-full h-5/6 rounded-3xl'>
                <span className='absolute bottom-3 left-3 bg-white/60 px-2 py-1 rounded-xl text-sm font-bold capitalize'></span>

            </figure>
            <p className="flex gap-4 justify-between  items-center px-4">
                <span className="animate-bounce w-3/4 h-full rounded-xl bg-slate-300 text-sm font-semibold"></span>
                <span className='animate-pukse w-1/4 h-full rounded-xl bg-slate-300 font-bold text-lg text-slate-300'>-</span>
            </p>
        </div>
    )
}

export default Card