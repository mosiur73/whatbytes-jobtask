'use client'

import {
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react'

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8 px-6 ">
      <div className="max-w-7xl text-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Filters Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Filters</h4>
          <ul className="space-y-1 text-sm">
            <li>All</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        {/* Follow Us */}
        <div className="md:text-right text-center px-28">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex md:justify-end justify-center space-x-4">
            <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-white mt-6">
        © 2024 American
      </div>
    </footer>
    );
};

export default Footer;