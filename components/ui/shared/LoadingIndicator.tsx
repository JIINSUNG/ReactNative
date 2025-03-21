import { ActivityIndicator, SafeAreaView } from "react-native";

const LoadingIndicator = () => {
  return (
    <SafeAreaView className="flex-1 flex items-center justify-center">
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
};

export default LoadingIndicator;
