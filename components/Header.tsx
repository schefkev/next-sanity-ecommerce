import ItemsInCart from '@/app/(site)/itemsInCart';
import ItemsInWishList from '@/app/(site)/itemsInWishList';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-8 flex items-center">
        {/* Logo */}
        <div className="mr-auto md:w-48 flex-shrink-0">
          <Link href="/">
            <Image
              src={logo}
              alt="website logo"
              width={100}
              height={30}
              className=""
            />
          </Link>
        </div>
        <nav className="contents ml-4 xl:w-48 flex items-center justify-end">
          <div className="ml-2 lg:ml-4 relative inline-block">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </div>
          <div className="ml-2 lg:ml-4 relative inline-block">
            <Link href="/" className="hover:underline">
              About
            </Link>
          </div>
          <div className="ml-2 lg:ml-4 relative inline-block">
            <Link href="/knives" className="hover:underline">
              Knives
            </Link>
          </div>
          <div className="ml-2 lg:ml-4 relative inline-block">
            <Link href="/uniforms" className="hover:underline">
              Uniform
            </Link>
          </div>
          <div className="ml-2 lg:ml-4 relative inline-block">
            <Link href="/accessories" className="hover:underline">
              Accessories
            </Link>
          </div>
          {/* Icons */}
          <div className="ml-2 lg:ml-4 relative inline-block">
            <div className="absolute -top-2 -right-2 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
              <ItemsInWishList />
            </div>
            <HeartIcon className="h-7" />
          </div>
          <div className="ml-2 lg:ml-4 relative inline-block">
            <div className="absolute -top-2 -right-2 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
              <ItemsInCart />
            </div>
            <ShoppingBagIcon className="h-7" />
          </div>
          {/* Cart Count */}
          <div className="ml-6 hidden sm:flex flex-col font-bold">
            <span className="text-xs text-gray-400">Your Cart</span>
            <span>XXX</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
