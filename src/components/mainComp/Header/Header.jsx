import react from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Header() {

    const count = useSelector((state)=>state.cart.data)

    return (
        <react.Fragment>
            <header className="bg-white border-b mb-4">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="hidden lg:flex lg:gap-x-12 mr-20">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">FlipKart</a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <NavLink to=""
                            className={({ isActive }) => `text-sm ${isActive ? "text-blue-800" : "text-gray-900"} font-semibold leading-6 `}
                        >
                            Products
                        </NavLink>

                        <NavLink to="/cart"
                            className={({ isActive }) => `text-sm ${isActive ? "text-blue-800" : "text-gray-900"} font-semibold leading-6 `}
                        >cart ({count.length})</NavLink>

                        <NavLink to="/checkout"
                            className={({ isActive }) => `text-sm ${isActive ? "text-blue-800" : "text-gray-900"} font-semibold leading-6 `}

                        >Checkout</NavLink>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </nav>
            </header>
        </react.Fragment>
    )
}

export default Header
