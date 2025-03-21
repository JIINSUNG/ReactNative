import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
  View,
  Button,
} from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { twMerge } from "tailwind-merge";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <SafeAreaView className="flex-1">
      <View className="p-5 flex flex-row flex-wrap justify-center gap-4">
        <Pressable
          className={twMerge(
            "flex items-center justify-center w-40 h-12 border rounded-2xl",
            colorScheme === "dark" ? "border-white" : "border-black",
          )}
          onPress={() => navigation.navigate("EP1")}
        >
          <Text
            className={twMerge(
              colorScheme === "dark" ? "text-white" : "text-black",
              "text-center",
            )}
          >
            스터디 과제 EP1
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
