import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "@/services/api/posts";
import { PostType } from "@/services/type/posts";

export const useGetPost = () => {
  const fetchPosts = async ({ pageParam }: { pageParam: number }) => {
    const { posts, nextPage } = await getPosts(pageParam);
    return { posts, nextPage };
  };

  const {
    data,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    refetch,
  } = useInfiniteQuery<
    { posts: PostType[]; nextPage?: number }, // 각 페이지의 데이터 형식
    Error, // 에러 형식
    InfiniteData<{ posts: PostType[]; nextPage?: number }>, // 페이지당 데이터 형식
    [_1: string],
    number
  >({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    gcTime: 1000 * 60 * 5,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  return {
    posts,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isError,
    refetch,
  };
};
