'use client';

import { getKnives } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function KnivesPage() {
  const knives = await getKnives();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-6 px-12">
        {knives.map((knive) => (
          <div key={knive._id}>
            <div className="bg-white shadow rounded overflow-hidden group">
              <div className="flex justify-center">
                <Link href={`/knives/${knive.slug}`}>
                  {knive.image && (
                    <Image
                      src={knive.image}
                      alt={knive.name}
                      width={300}
                      height={150}
                      className="object-fill"
                    />
                  )}
                </Link>
              </div>
              <div className="pt-4 pb-3 px-4">
                <Link href={`/knives/${knive.slug}`}>
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-400 hover:text-primary transition">
                    {knive.name}
                  </h4>
                </Link>
              </div>
              <div className="px-4">
                <p>{knive.header}</p>
              </div>
              <div className="px-4">
                <p>{knive.sub}</p>
              </div>
              <div className="flex items-baseline mb-1 space-x-2 px-4">
                <p className="text-l font-semibold text-red-400">
                  {knive.price} €
                </p>
                {knive.availability ? (
                  <span className="text-sm text-green-500">In Stock</span>
                ) : (
                  <span className="text-sm text-gray-300">Out of Stock</span>
                )}
              </div>
              <button className="block w-full py-1 text-center text-white bg-red-600 border border-red-800 rounded-b hover:bg-transparent hover:text-red-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
