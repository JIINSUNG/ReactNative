import { Button, SafeAreaView } from "react-native";
import ThemeText from "@/components/ui/ThemedText";

type ErrorNotifyProps = {
  onPress: () => void;
};

const ErrorComponent = ({ onPress }: ErrorNotifyProps) => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <ThemeText>oh Sorry, Something is Wrong</ThemeText>
      <Button title="Refresh" onPress={onPress} />
    </SafeAreaView>
  );
};

export default ErrorComponent;
