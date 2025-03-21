import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { ThemeText } from "@/components/ui";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex flex-1 gap-5 m-10">
      <ThemeText size="title">React Native Study 과제 1</ThemeText>
      <ThemeText size="subtitle">
        api로 데이터를 받아와 스크롤 가능한 목록 만들기
      </ThemeText>
      <ThemeText>
        기본 1. 스크롤 뷰로 목록 만들기{"\n"}
        기본 2. 플랫리스트로 목록 만들기
      </ThemeText>
      <ThemeText>
        심화 1. pull to refresh로 새로고침 만들기{"\n"}
        심화 2. 무한 스크롤 만들기{"\n"}
        심화 3. 최적화 해보기
      </ThemeText>
    </SafeAreaView>
  );
}
