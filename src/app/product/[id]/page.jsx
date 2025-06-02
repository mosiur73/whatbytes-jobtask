'use client';

import { useParams } from 'next/navigation';
import products from '@/app/data/products';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductDetailPage = () => {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product) return;
    window.scrollTo(0, 0);
  }, [product]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      exists.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  if (!product) {
    return <div className="text-center py-10 text-red-500">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-10 py-32 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-2xl ">
      {/* Image Section */}
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          unoptimized
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Details Section */}
      <div className='text-black'>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className=" mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-blue-400 mb-4">${product.price}</p>
        <p className="mb-2"><span className="font-medium">Category:</span> {product.category}</p>
        <p className="mb-6"><span className="font-medium">Brand:</span> {product.brand}</p>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-3 mb-4">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border px-2 py-1 w-20 text-black"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
