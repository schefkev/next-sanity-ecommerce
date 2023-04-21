import { getJackets } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function UniformsPage() {
  const jackets = await getJackets();

  return (
    <div>
      <div>
        {jackets.map((jacket) => (
          <div key={jacket._id}>
            <Link href={`/uniforms/${jacket.slug}`}>
              {jacket.image && (
                <Image
                  src={jacket.image}
                  alt={jacket.name}
                  width={200}
                  height={150}
                />
              )}
            </Link>
            <div>{jacket.header}</div>
            <div>{jacket.name}</div>
            <div>{jacket.price}</div>
            <div>{jacket.sub}</div>
            <div>
              {jacket.availability ? (
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
