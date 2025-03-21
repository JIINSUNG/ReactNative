import { View } from "react-native";
import { ThemeText } from "@/components/ui";
import { PostType } from "@/services/type/posts";
import { twMerge } from "tailwind-merge";
import { useColorScheme } from "@/hooks/useColorScheme";

const PostCard = ({
  item,
  className,
}: {
  item: PostType;
  className?: string;
}) => {
  const colorScheme = useColorScheme();

  return (
    <View
      key={item.id}
      className={twMerge(
        colorScheme === "dark" ? "border-white" : "border-black",
        "border p-4 gap-2 rounded-md",
        className,
      )}
    >
      <ThemeText className="text-green-500" size="subtitle">
        글쓴이 : {item.userId}
      </ThemeText>
      <ThemeText className="text-green-700" size="title">
        제목 : {item.title}
      </ThemeText>
      <ThemeText>{item.body}</ThemeText>
    </View>
  );
};

export default PostCard;
