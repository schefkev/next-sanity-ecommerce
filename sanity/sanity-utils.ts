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
      content
    }`,
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
      content
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
      content
    }`,
  );
}
