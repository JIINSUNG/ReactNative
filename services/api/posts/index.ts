import { GetPostType, PostType } from "@/services/type/posts";

export const getPosts = async (page: number): Promise<GetPostType> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const totalPosts = posts.length;

  const totalPages = Math.ceil(totalPosts / 10);

  if (page < 1 || page > totalPages) {
    throw new Error(`Invalid page number. Available pages: 1 to ${totalPages}`);
  }

  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;

  const slicedPosts = posts.slice(startIndex, endIndex);

  const nextPage = page < totalPages ? page + 1 : undefined;

  return { posts: slicedPosts, nextPage };
};
