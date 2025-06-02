import Link from 'next/link';
import React from 'react';

const ProductCard = ({product}) => {
    return (
        <Link href={`/product/${product.id}`}>
          {/* import products from '@/app/data/products'; */}
         <div className="bg-white text-black rounded-2xl overflow-hidden shadow-2xl p-3">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <p className="text-sm">${product.price}</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl mt-2">
        Add to Cart
      </button>
    </div>
        </Link>
    );
};

export default ProductCard;