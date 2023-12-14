import { NavLink } from "react-router-dom"

{ NavLink}


const Navbar = () => {
    const activeStyle = 'underline underline-offset-4 font-bold '

    return (
        <nav className=" w-screen flex justify-between items-center py-4 px-10 fixed z-10 top-0 font-light text-sm ">
            <ul className="flex items-center gap-4 ">
                <li className="font-black text-3xl mr-4 ">
                    <NavLink to='/'>
                        VUUR
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Toys
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
                <li>
                    <NavLink
                        to='/cart'
                        className ={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        🛒 0
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default  Navbar