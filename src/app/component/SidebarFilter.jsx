'use client'

import React, { useState } from 'react'

const categories = ['All', 'Electronics', 'Clothing', 'Home']
const brands = ['Apple', 'H&M', 'IKEA']


const SidebarFilter = ({onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('All')
  const [price, setPrice] = useState(1000)
  const [selectedBrand, setSelectedBrand] = useState('')

  const handleFilterChange = () => {
    onFilterChange({ category: selectedCategory, price, brand: selectedBrand })
  }
    return (
         <div className="w-full md:w-64 p-4 bg-blue-800 text-white rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Category</h2>
      {categories.map((cat) => (
        <div key={cat} className="mb-1">
          <label className="cursor-pointer">
            <input
              type="radio"
              name="category"
              value={cat}
              checked={selectedCategory === cat}
              onChange={(e) => {
                setSelectedCategory(e.target.value)
                handleFilterChange()
              }}
            />{" "}
            {cat}
          </label>
        </div>
      ))}

      <h2 className="text-lg font-semibold mt-4 mb-2">Price Range</h2>
      <input
        type="range"
        min="0"
        max="1000"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value)
          handleFilterChange()
        }}
        className="w-full"
      />
      <p>Up to ${price}</p>

      <h2 className="text-lg font-semibold mt-4 mb-2">Brand</h2>
      <select
        className="w-full border rounded p-1 text-white bg-blue-700"
        value={selectedBrand}
        onChange={(e) => {
          setSelectedBrand(e.target.value)
          handleFilterChange()
        }}
      >
        <option value="">All Brands</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
    </div>
    );
};

export default SidebarFilter;