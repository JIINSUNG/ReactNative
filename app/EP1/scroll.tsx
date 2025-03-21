import { RefreshControl, SafeAreaView, ScrollView } from "react-native";
import { useGetPost } from "@/services/query/posts";
import { ErrorComponent, ThemeText } from "@/components/ui";
import { PostCard } from "@/components/ui/posts";
import { LoadingIndicator } from "@/components/ui/shared";
import { useCallback, useRef, useState } from "react";

export default function ScrollScreen() {
  const { posts: postsData, isLoading, isError, refetch } = useGetPost();

  if (isError) {
    return <ErrorComponent onPress={() => refetch()} />;
  }

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  return (
    <SafeAreaView>
      {isLoading && <LoadingIndicator />}
      {postsData && (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {postsData.map((item) => (
            <PostCard item={item} className="mb-3" key={item.id.toString()} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
