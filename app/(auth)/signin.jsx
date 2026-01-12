// import { useRouter } from "expo-router";
// import { useState } from "react";
// import {
//   ScrollView,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function SignIn() {
//   const router = useRouter();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <SafeAreaView className="flex-1 bg-[#2b2b2b]">
//       <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />

//       <ScrollView
//         contentContainerStyle={{ flexGrow: 1 }}
//         showsVerticalScrollIndicator={false}
//       >
//         <View className="flex-1 justify-center px-6">
//           {/* Title */}
//           <Text className="text-white text-2xl font-bold text-center mb-2">
//             Welcome Back
//           </Text>

//           <Text className="text-gray-300 text-center mb-6">
//             Sign in to continue
//           </Text>

//           {/* Username */}
//           <View className="mb-4">
//             <Text className="text-white mb-2 font-semibold">Email</Text>
//             <TextInput
//               value={username}
//               onChangeText={setUsername}
//               placeholder="Enter username or email"
//               placeholderTextColor="#9ca3af"
//               autoCapitalize="none"
//               className="border border-gray-500 rounded-lg px-4 py-3 text-white"
//             />
//           </View>

//           {/* Password */}
//           <View className="mb-2">
//             <Text className="text-white mb-2 font-semibold">Password</Text>
//             <TextInput
//               value={password}
//               onChangeText={setPassword}
//               placeholder="Enter password"
//               placeholderTextColor="#9ca3af"
//               secureTextEntry
//               className="border border-gray-500 rounded-lg px-4 py-3 text-white"
//             />
//           </View>

//           {/* Forgot Password */}
//           <TouchableOpacity
//             className="self-end mb-6"
//             onPress={() => router.push("/forgot-password")}
//             activeOpacity={0.7}
//           >
//             <Text className="text-[#f49b33] font-semibold underline">
//               Forgot Password?
//             </Text>
//           </TouchableOpacity>

//           {/* Sign In Button */}
//           <TouchableOpacity
//             className="bg-[#f49b33] py-3 rounded-lg"
//             activeOpacity={0.8}
//             onPress={() => {
//               // handle sign in
//               console.log("Sign In");
//             }}
//           >
//             <Text className="text-black text-lg font-semibold text-center">
//               Sign In
//             </Text>
//           </TouchableOpacity>

//           {/* Go to Sign Up */}
//           <TouchableOpacity
//             className="flex-row justify-center mt-6"
//             onPress={() => router.push("/signup")}
//             activeOpacity={0.7}
//           >
//             <Text className="text-white font-semibold">
//               Don’t have an account?
//             </Text>
//             <Text className="text-[#f49b33] font-semibold underline ml-2">
//               Sign Up
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
