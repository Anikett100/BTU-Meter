import { Pressable, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function AnimatedTabButton({
  children,
  accessibilityState,
  onPress,
  label,
}) {
  const focused = accessibilityState?.selected ?? false;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(focused ? 1.1 : 1, { duration: 200 }),
      },
    ],
    opacity: withTiming(focused ? 1 : 0.6, { duration: 200 }),
  }));

  return (
    <Pressable onPress={onPress} style={{ flex: 1, alignItems: "center" }}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
      <Text
        style={{
          fontSize: 12,
          marginTop: 4,
          color: focused ? "#3f6289" : "#9ca3af",
          fontWeight: focused ? "600" : "400",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
