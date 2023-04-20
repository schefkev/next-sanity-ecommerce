import { PortableTextBlock } from 'sanity';

export type Jacket = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  title: string;
  header: string;
  sub: string;
  price: number;
  content: PortableTextBlock[];
  availability: boolean;
};
