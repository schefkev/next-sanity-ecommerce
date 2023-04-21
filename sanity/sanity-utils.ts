import { Accessory } from '@/types/Accessory';
import { Jacket } from '@/types/Jacket';
import { Knive } from '@/types/Knive';
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export async function getKnives(): Promise<Knive[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "knive"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      header,
      sub,
      price,
      content,
      availability
    }`,
  );
}

export async function getKnive(slug: string): Promise<Knive> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'knive' && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      header,
      sub,
      price,
      content,
      availability,
      category
    }`,
    { slug: slug },
  );
}

export async function getAccessories(): Promise<Accessory[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "accessory"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      header,
      sub,
      price,
      content,
      availability
    }`,
  );
}

export async function getJackets(): Promise<Jacket[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "jacket"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      title,
      header,
      sub,
      price,
      content,
      availability
    }`,
  );
}
