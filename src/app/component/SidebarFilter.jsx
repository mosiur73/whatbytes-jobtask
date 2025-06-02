'use client'

import React, { useState, useEffect } from 'react';

const SidebarFilter = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(30000); // Max price limit
  const [brand, setBrand] = useState('');

  useEffect(() => {
    onFilterChange({ category, price, brand });
  }, [category, price, brand]);

  return (
    <div className="space-y-6 w-full md:w-64 p-4 bg-blue-700 text-white rounded-lg">
      {/* Category Filter */}
      <div>
        <h2 className="font-semibold mb-2">Category</h2>
        <div className="space-y-1 text-sm">
          {['All', 'Electronics', 'Clothing', 'Home'].map((cat) => (
            <label key={cat} className="block">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={() => setCategory(cat)}
                className="mr-2"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h2 className="font-semibold mb-2">Max Price: ৳{price}</h2>
        <input
          type="range"
          min="0"
          max="30000"
          step="100"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Brand Filter */}
      <div className='bg-blue-500 text-white'>
        <h2 className="font-semibold mb-2 bg-blue-600 text-white ">Brand</h2>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full border   p-1 rounded-2xl"
        >
          <option className='text-black' value="">All</option>
          <option className='text-black' value="Sony">Sony</option>
          <option className='text-black' value="Samsung">Samsung</option>
          <option className='text-black' value="Ray-Ban">Ray-Ban</option>
          <option className='text-black' value="Panasonic">Panasonic</option>
          <option className='text-black' value="Bata">Bata</option>
          <option className='text-black' value="H&M">H&M</option>
        </select>
      </div>
    </div>
  );
};

export default SidebarFilter;
