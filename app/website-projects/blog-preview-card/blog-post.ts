import { StaticImageData } from "next/image";

export type BlogPost = {
  thumbnail: StaticImageData;
  category: string;
  date: Date;
  title: string;
  description: string;
  author: BlogPostAuthor;
};

export type BlogPostAuthor = {
  name: string;
  avatar: StaticImageData;
};
