'use client'

import { ShoppingCart,Search  } from 'lucide-react'
import React from 'react';
import { useCart } from '../context/CartContext';


const NavBar = () => {
   const { cartItems } = useCart()

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  
    return (
       <header className="bg-blue-800 text-white   lg:px-28 py-2 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">Logo</div>

        {/* Right side: Search + Cart */}
      <div className="flex items-center gap-20">
        {/* Search Bar */}
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-white">
            <Search className="w-5 h-6" />
          </span>
          <input
            type="text"
             
            placeholder="Search for products..."
            className="pl-10 pr-4 py-2 rounded-md border border-white text-white placeholder-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white w-40 lg:w-96"
          />
        </div>

        {/* Cart */}
        <div className="relative flex items-center gap-1 bg-black px-6 py-2 rounded-2xl">
          <ShoppingCart className="w-6 h-6" />
          <span className="ml-3 font-bold">Cart</span>
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalCount}
          </span>
        </div>
      </div>
    </header>
    );
};

export default NavBar;