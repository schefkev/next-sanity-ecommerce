import { getKnives } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function KnivesPage() {
  const knives = await getKnives();

  return (
    <div>
      <div>
        {knives.map((knive) => (
          <div key={knive._id}>
            <Link href={`/knives/${knive.slug}`}>
              {knive.image && (
                <Image
                  src={knive.image}
                  alt={knive.name}
                  width={200}
                  height={150}
                />
              )}
            </Link>
            <div>{knive.header}</div>
            <div>{knive.name}</div>
            <div>{knive.price}</div>
            <div>{knive.sub}</div>
            <div>
              {knive.availability ? (
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
