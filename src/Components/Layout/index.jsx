
const Layout = ({ children }) => {
    return (
        <div className='p-16 flex flex-col gap-4 items-center select-none'>
            { children }
        </div>
    )
}

export default Layout