// import { Entypo, Ionicons } from "@expo/vector-icons";
// import { Tabs } from "expo-router";
// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: "#3f6289",
//         tabBarInactiveTintColor: "#6b7280",
//       }}
//     >
//       <Tabs.Screen
//         name="home"
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Entypo name="home" size={24} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="billing"
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="document-text-outline" size={22} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="usage"
//         options={{
//           title: "Usage",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="bar-chart-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

import { Entypo, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function AnimatedIcon({ focused, children }) {
  const style = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(focused ? 1.15 : 1, { duration: 200 }) }],
    opacity: withTiming(focused ? 1 : 0.6, { duration: 200 }),
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
}

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3f6289",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarStyle: {
          height: 56 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 6,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon focused={focused}>
              <Entypo name="home" size={24} color={color} />
            </AnimatedIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="billing"
        options={{
          title: "Billing",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon focused={focused}>
              <Ionicons name="document-text-outline" size={24} color={color} />
            </AnimatedIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="usage"
        options={{
          title: "Usage",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon focused={focused}>
              <Ionicons name="bar-chart-outline" size={24} color={color} />
            </AnimatedIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon focused={focused}>
              <Ionicons name="person" size={24} color={color} />
            </AnimatedIcon>
          ),
        }}
      />
    </Tabs>
  );
}
