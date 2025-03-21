export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type GetPostType = {
  nextPage?: number;
  posts: PostType[];
};
