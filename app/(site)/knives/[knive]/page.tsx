import { getKnive } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { useState } from 'react';
import Knive from './Knive';

type Props = {
  params: {
    knive: string;
  };
};

export const dynamic = 'force-dynamic';

export default async function KnivePage({ params }: Props) {
  const slug = params.knive;
  const knive = await getKnive(slug);

  return <Knive knive={knive} />;
}
