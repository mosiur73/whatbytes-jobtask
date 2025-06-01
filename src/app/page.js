'use client'

import React, { useState } from 'react';
import products from './data/products';
import SidebarFilter from './component/SidebarFilter';
import ProductGrid from './component/ProductGrid';


const page = () => {
  const [filteredProducts, setFilteredProducts] =useState(products)

  const handleFilterChange = (filters) => {
    let filtered = products

    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === filters.category.toLowerCase()
      )
    }

    if (filters.price) {
      filtered = filtered.filter((p) => p.price <= filters.price)
    }

    if (filters.brand) {
      filtered = filtered.filter((p) => p.brand === filters.brand)
    }

    setFilteredProducts(filtered)
  }
  return (
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
     
      <SidebarFilter onFilterChange={handleFilterChange}></SidebarFilter>
      <div className="md:col-span-3">
        <ProductGrid products={filteredProducts}></ProductGrid>
      </div>
    </div>
  );
};

export default page;