import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="py-2 bg-gray-200 border-[1px] border-black">
        <div className="container">
           <div className="flex justify-between items-center">
           <div className="logo w-[130px] h-[60px]">
            <img className="w-full" src="/new.png" alt="logo" />
           </div>
            <div className="menu">
              <ul className="flex justify-center items-center gap-6">
                <li><NavLink to="/"className={({ isActive }) => isActive ? "text-[16px] px-5 py-2 bg-black text-white font-medium  font-poppins rounded-lg " : "px-5 py-2 bg-white border-[1px] border-black text-black font-medium font-poppins rounded-lg"}>Home</NavLink></li>
                <li><NavLink to="/about"className={({ isActive }) => isActive ? "text-[16px] px-5 py-2 bg-black text-white font-medium  font-poppins rounded-lg " : "px-5 py-2 bg-white border-[1px] border-black text-black font-medium font-poppins rounded-lg"}>About</NavLink></li>
                <li><NavLink to="/product"className={({ isActive }) => isActive ? "text-[16px] px-5 py-2 bg-black text-white font-medium  font-poppins rounded-lg " : "px-5 py-2 bg-white border-[1px] border-black text-black font-medium font-poppins rounded-lg"}>Products</NavLink></li>
                <li><NavLink to="/contact"className={({ isActive }) => isActive ? "text-[16px] px-5 py-2 bg-black text-white font-medium  font-poppins rounded-lg " : "px-5 py-2 bg-white border-[1px] border-black text-black font-medium font-poppins rounded-lg"}>Contacts</NavLink></li>
                <li><NavLink to="/help"className={({ isActive }) => isActive ? "text-[16px] px-5 py-2 bg-black text-white font-medium  font-poppins rounded-lg " : "px-5 py-2 bg-white border-[1px] border-black text-black font-medium font-poppins rounded-lg"}>Help</NavLink></li>
              </ul>
            </div>
           </div>
       </div>
    </nav>
  )
}
