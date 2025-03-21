import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { useGetPost } from "@/services/query/posts";
import { ErrorComponent } from "@/components/ui";
import { PostCard } from "@/components/ui/posts";
import { LoadingIndicator } from "@/components/ui/shared";
import { useCallback, useState } from "react";

export default function FlatScreen() {
  const {
    posts: postsData,
    isLoading,
    isError,
    refetch,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetPost();

  if (isError) {
    return <ErrorComponent onPress={() => refetch()} />;
  }

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  const onEndReached = () => {
    !isFetching && hasNextPage && fetchNextPage();
  };

  return (
    <SafeAreaView>
      {isLoading && <LoadingIndicator />}
      {postsData && (
        <View>
          <FlatList
            data={postsData}
            renderItem={({ item }) => <PostCard className="mb-3" item={item} />}
            keyExtractor={(item) => item.id.toString()}
            refreshing={refreshing}
            onRefresh={onRefresh}
            onEndReached={onEndReached}
            onEndReachedThreshold={1}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
