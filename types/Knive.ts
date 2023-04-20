import { PortableTextBlock } from 'sanity';

export type Knive = {
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
