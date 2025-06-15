import React from 'react';

const NavBar = () => {
    return (
        <div className='max-w-7xl mx-auto '>
               <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold text-blue-600">Brand</a>
          </div>

          {/* Hamburger */}
          <div className="flex items-center lg:hidden">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <label htmlFor="menu-toggle" className="cursor-pointer block">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="peer-checked:block hidden lg:hidden px-4 pt-4 pb-4 space-y-2">
        <a href="/home" className="block text-gray-700 hover:text-blue-600">Home</a>
        <a href="/about" className="block text-gray-700 hover:text-blue-600">About</a>
        <a href="/services" className="block text-gray-700 hover:text-blue-600">Services</a>
        <a href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
      </div>
    </nav>
        </div>
    );
};

export default NavBar;
