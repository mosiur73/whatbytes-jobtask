'use client';

import { useEffect, useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center text-2xl text-gray-600 py-32">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6 text-black">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded shadow"
          >
            <div className='text-black'>
                <img className='w-24' src={item.image} alt="" />
              <h2 className="font-semibold">{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p className="text-blue-600 font-semibold">
                ${item.price * item.quantity}
              </p>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="text-right mt-6 text-xl font-bold text-green-600">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default CartPage;
