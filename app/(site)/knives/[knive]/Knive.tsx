'use client';

import { getKnive } from '@/sanity/sanity-utils';
import { Knive } from '@/types/Knive';
import { getParsedCookie, setStringifiedCookie } from '@/utils/cookies';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  knive: Knive;
}

interface Product {
  _id: string;
  amount: number;
}

interface ProductCookie {
  id: number;
  amount: number;
}

const filledHeartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="red"
    className="h-5"
  >
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

export default function Knive({ knive }: Props) {
  const [counter, setCounter] = useState(1);
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };

  const handleAddToCartClick = () => {
    // get the cookie
    const productsInCookies: ProductCookie[] | undefined =
      getParsedCookie('cart');

    // if there is no cookie, we initialize the value with 1
    if (!productsInCookies) {
      // create the cookie
      setStringifiedCookie('cart', [{ id: parseInt(knive._id), amount: 1 }]);
      // if there is no cookie, stop here
      return;
    }

    // try to find the product inside of the cookie
    const foundProduct = productsInCookies.find((productCookie) => {
      return productCookie.id === parseInt(knive._id);
    });

    // my product is inside of the cookie
    if (foundProduct) {
      // add amount to the foundProduct
      foundProduct.amount = Number(foundProduct.amount) + Number(counter);
    } else {
      // add the product to the array of products in cookies
      productsInCookies.push({ id: parseInt(knive._id), amount: 1 });
    }

    // Update the cookie after transformation
    setStringifiedCookie('cart', productsInCookies);
    router.refresh();
  };

  const handleAddToWishListClick = () => {
    const productsInCookies: ProductCookie[] | undefined =
      getParsedCookie('wishlist');

    const foundProduct = productsInCookies?.find((productCookie) => {
      return productCookie.id === parseInt(knive._id);
    });

    if (foundProduct) {
      if (productsInCookies) {
        setStringifiedCookie(
          'wishlist',
          productsInCookies.filter(
            (productCookie) => productCookie.id !== parseInt(knive._id),
          ),
        );
        setIsPressed(false);
      }
    } else {
      if (productsInCookies && productsInCookies.length > 0) {
        alert('You can only add the item to the wishlist once');
      } else {
        setStringifiedCookie('wishlist', [
          { id: parseInt(knive._id), amount: 1 },
        ]);
        setIsPressed(true);
      }
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
              <button
                className="inline-flex items-center px-8 py-2 bg-red-600 border border-red-500 text-white font-medium rounded gap-2 uppercase hover:bg-transparent hover:text-red-600 transition"
                onClick={handleAddToCartClick}
              >
                <ShoppingBagIcon className="h-5" />
                <span className="ml-2">Add to cart</span>
              </button>
            </div>
            <div className="inline-block mr-4">
              <button
                className="inline-flex items-center px-8 py-2 border border-gray-300 font-medium rounded uppercase gap-2 hover:text-red-600 transition"
                onClick={handleAddToWishListClick}
              >
                {isPressed ? filledHeartIcon : <HeartIcon className="h-5" />}

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
