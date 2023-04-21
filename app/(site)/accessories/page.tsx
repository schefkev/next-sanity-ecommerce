import { getAccessories } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function AccessoriesPage() {
  const accessories = await getAccessories();

  return (
    <div>
      <div>
        {accessories.map((accesory) => (
          <div key={accesory._id}>
            <Link href={`/knives/${accesory.slug}`}>
              {accesory.image && (
                <Image
                  src={accesory.image}
                  alt={accesory.name}
                  width={200}
                  height={150}
                />
              )}
            </Link>
            <div>{accesory.header}</div>
            <div>{accesory.name}</div>
            <div>{accesory.price}</div>
            <div>{accesory.sub}</div>
            <div>
              {accesory.availability ? (
                <span>Out of Stock</span>
              ) : (
                <span>In Stock</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
