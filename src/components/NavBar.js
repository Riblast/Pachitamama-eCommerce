import React from 'react'
import '../index.css'
import CartWidget from './CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="bg-white flex flex-row justify-between items-center p-0 pr-4 w-full h-12">
            <div className="flex justify-between flex-1">
            </div>
            <div className="inline-block">
                <ul className="flex">
                    <li className="font-poppins font-medium text-2xl text-black mx-3 leading-9"><NavLink to="/">Home</NavLink></li>
                    <li className="font-poppins font-medium text-2xl text-black mx-3 leading-9"><NavLink to="/menu">Menú</NavLink></li>
                    <li className="font-poppins font-medium text-2xl text-black flex-shrink-0 mx-3 leading-9"><NavLink to="/AboutUs">About Us</NavLink></li>
                </ul>
            </div>
            <div className="flex flex-1 justify-end gap-3 mx-3 items-center">
                <NavLink to="/profile"><FontAwesomeIcon className="w-6 h-6 text-black" icon={faUser} /></NavLink>
                <NavLink to="/carrito" className="flex items-center"><CartWidget /></NavLink>
            </div>
        </div>
    )
}
export default NavBar
