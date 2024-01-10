import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"

{ NavLink}


const Navbar = () => {
    const activeStyle = 'underline underline-offset-4 font-bold '

    const { count, setSearchByCategory, setisCartOpen, setisDetailOpen,isCartOpen } = useContext(ShoppingCartContext);

    return (
        <nav className=" w-screen flex justify-between items-center py-4 px-10 fixed z-10 top-0 font-light text-sm  bg-white/60 backdrop-blur border-white-30 shadow-md">
            <ul className="flex items-center gap-4 ">
                <li className="font-black text-3xl mr-4 ">
                    <NavLink
                        to='/'
                        onClick={() => setSearchByCategory("")}
                        >
                        VUUR
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => setSearchByCategory("")}
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/men'
                        onClick={() => setSearchByCategory("men's clothing")}
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewelery'
                        onClick={() => setSearchByCategory("jewelery")}
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => setSearchByCategory("electronics")}

                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-4">
                <li className=" text-black/60 hover:text-green-600">
                    santiago@drinkvuur.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li
                    className= "h-10 w-10 bg-stone-950/80 backdrop-blur border-white-30 shadow-md rounded-full text-amber-50 flex items-center justify-center font-bold select-none cursor-pointer"
                    onClick={() => {
                        setisCartOpen(!isCartOpen);
                        setisDetailOpen(false);
                    }}
                >
                    <NavLink
                        to='/cart'
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        { count != 0 && count }
                    </NavLink>
                    <div >
                        <ShoppingCartIcon
                            className= {count == 0 ? 'h-4 w-4 text-white-500' :'hidden'}
                        />
                    </div>
                </li>

            </ul>
        </nav>
    )
}

export default  Navbar