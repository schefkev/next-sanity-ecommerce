'use client';

import { getKnive } from '@/sanity/sanity-utils';
import { Knive } from '@/types/Knive';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  knive: Knive;
}

export default function Knive({ knive }: Props) {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <div className="px-52 mt-12">
      <div className="container grid grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image src={knive.image} alt={knive.name} width={400} height={100} />
        </div>
        {/* Product Section */}
        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">{knive.name}</h2>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              {knive.availability ? (
                <span className="text-sm text-green-500">In Stock</span>
              ) : (
                <span className="text-sm text-gray-300">Out of Stock</span>
              )}
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold space-x-2">
                Brand:
              </span>
              <span className="text-gray-600">{knive.header}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold space-x-2">
                Category:
              </span>
              <span className="text-gray-600">{knive.category}</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 mt-4">
            <p className="text-xl text-red-600 font-semibold">
              {knive.price} €
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray300 text-gray-600 divide-x divide-gray-300 w-max">
              <button
                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                onClick={decrease}
              >
                -
              </button>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                {counter}
              </div>
              <button
                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                onClick={increase}
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-6 flex gap-3  pb-5 pt-5">
            <div className="inline-block mr-4">
              <button className="inline-flex items-center px-8 py-2 bg-red-600 border border-red-500 text-white font-medium rounded gap-2 uppercase hover:bg-transparent hover:text-red-600 transition">
                <ShoppingBagIcon className="h-5" />
                <span className="ml-2">Add to cart</span>
              </button>
            </div>
            <div className="inline-block mr-4">
              <button className="inline-flex items-center px-8 py-2 border border-gray-300 font-medium rounded uppercase gap-2 hover:text-red-600 transition">
                <HeartIcon className="h-5" />
                <span className="ml-2">Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT DESCRIPTION */}
      <div className="container pb-16 pt-36">
        <h3 className="border-b border-gray-200 text-gray-800 pb-3 font medium">
          Product Details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <PortableText value={knive.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
