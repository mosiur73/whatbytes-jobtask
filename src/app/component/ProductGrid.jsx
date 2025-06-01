import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({products}) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
      {products.map((product) => (
        
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
    );
};

export default ProductGrid;