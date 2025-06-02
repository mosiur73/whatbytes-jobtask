'use client';

import React, { useState, useEffect } from 'react';
import products from './data/products';
import SidebarFilter from './component/SidebarFilter';
import ProductGrid from './component/ProductGrid';

const Page = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  
  useEffect(() => {
    let filtered = products;

    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.price) {
      filtered = filtered.filter((p) => p.price <= filters.price);
    }

    if (filters.brand) {
      filtered = filtered.filter((p) => p.brand === filters.brand);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [filters, searchQuery]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full md:w-1/2 px-4 py-2 border rounded text-black"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <SidebarFilter onFilterChange={handleFilterChange} />
        <div className="md:col-span-3">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <p className="text-red-500 text-4xl text-center">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
