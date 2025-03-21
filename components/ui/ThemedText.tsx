import { twMerge } from "tailwind-merge";
import { ColorSchemeName, Text } from "react-native";
import { ReactNode } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";

type SizeType = "title" | "subtitle" | "paragraph";

type ThemedTextProps = {
  size?: SizeType;
  className?: string;
  children: ReactNode;
};

const textSize = (size: SizeType) => {
  switch (size) {
    case "title":
      return "text-2xl font-bold";
    case "subtitle":
      return "text-xl font-bold";
    case "paragraph":
      return "text-lg";
  }
};

const themeText = (theme: ColorSchemeName) => {
  switch (theme) {
    case "dark":
      return "text-white";
    default:
      return "text-black";
  }
};

const ThemedText = ({
  size = "paragraph",
  className,
  children,
}: ThemedTextProps) => {
  const colorScheme = useColorScheme();

  return (
    <Text
      className={twMerge(themeText(colorScheme), textSize(size), className)}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
