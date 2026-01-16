// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import { StatusBar, Text, TouchableOpacity, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function ResetSuccess() {
//   const router = useRouter();

//   return (
//     <SafeAreaView className="flex-1 bg-[#2b2b2b]">
//       <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />

//       <View className="flex-1 justify-center items-center px-8">
//         {/* Icon with background */}
//         <View className="bg-[#1f3d2b] p-8 rounded-full mb-8">
//           <Ionicons name="checkmark-circle" size={80} color="blue" />
//         </View>

//         {/* Title */}
//         <Text className="text-white text-4xl font-bold text-center mb-4">
//           Success!
//         </Text>

//         {/* Subtitle */}
//         <Text className="text-white text-center text-base leading-6 mb-12 px-4">
//           Your password has been reset successfully.{"\n"}
//           You can now log in using your new password.
//         </Text>

//         <TouchableOpacity
//           className="flex-row items-center"
//           onPress={() => router.push("/")}
//         >
//           <Text className="text-white font-semibold">Go to</Text>
//           <Text className="text-[#f49b33] font-semibold underline ml-2">
//             Sign in ?
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetSuccess() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#0f172a]">
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      <View className="flex-1 justify-center items-center px-8">
        {/* Icon Container */}
        <View className="bg-blue-500/20 p-8 rounded-full mb-8">
          <Ionicons name="checkmark-circle" size={90} color="#3b82f6" />
        </View>

        {/* Title */}
        <Text className="text-white text-4xl font-bold text-center mb-4">
          Password Reset
        </Text>

        {/* Subtitle */}
        <Text className="text-gray-300 text-center text-base leading-6 mb-12 px-4">
          Your password has been reset successfully.{"\n"}
          You can now sign in using your new password.
        </Text>

        {/* Button */}
        <TouchableOpacity
          onPress={() => router.replace("/")}
          className="bg-blue-500 w-full py-4 rounded-xl items-center shadow-lg shadow-blue-500/30"
        >
          <Text className="text-white font-bold text-lg">Go to Sign In</Text>
        </TouchableOpacity>

        {/* Secondary link */}
        <TouchableOpacity className="mt-6" onPress={() => router.replace("/")}>
          <Text className="text-gray-400">
            Back to <Text className="text-blue-400 font-semibold">Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
