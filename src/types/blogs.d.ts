import { CategoryTypes } from './caterogies';

export type BlogTypes = {
  id: number;
  title: string;
  description: string;
  image: string;
  publish_date: string;
  categories: CategoryTypes[];
  author: string;
};
