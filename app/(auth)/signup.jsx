// import React, { useState } from "react";
// import { useRouter } from "expo-router";
// import {
//   ScrollView,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function SignUp() {
//   const router = useRouter();

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   return (
//     <SafeAreaView className="flex-1 bg-[#2b2b2b]">
//       <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />

//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <View className="flex-1 justify-center px-6">

//           <Text className="text-white text-2xl font-bold text-center mb-2">
//             Create Account
//           </Text>

//           <Text className="text-gray-300 text-center mb-6">
//             Sign up to get started
//           </Text>

//           {/* Full Name */}
//           <TextInput
//             placeholder="Full Name"
//             placeholderTextColor="#9ca3af"
//             value={fullName}
//             onChangeText={setFullName}
//             className="border border-gray-500 rounded-lg px-4 py-3 text-white mb-4"
//           />

//           {/* Email */}
//           <TextInput
//             placeholder="Email"
//             placeholderTextColor="#9ca3af"
//             value={email}
//             onChangeText={setEmail}
//             autoCapitalize="none"
//             keyboardType="email-address"
//             className="border border-gray-500 rounded-lg px-4 py-3 text-white mb-4"
//           />

//           {/* Password */}
//           <TextInput
//             placeholder="Password"
//             placeholderTextColor="#9ca3af"
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//             className="border border-gray-500 rounded-lg px-4 py-3 text-white mb-4"
//           />

//           {/* Confirm Password */}
//           <TextInput
//             placeholder="Confirm Password"
//             placeholderTextColor="#9ca3af"
//             secureTextEntry
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//             className="border border-gray-500 rounded-lg px-4 py-3 text-white mb-6"
//           />

//           <TouchableOpacity className="bg-[#f49b33] py-3 rounded-lg"
//             onPress={() => router.push("/signup")}>
//             <Text className="text-black text-lg font-semibold text-center">
//               Sign Up
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             className="flex-row justify-center mt-6"
//             onPress={() => router.push("/signin")}
//           >
//             <Text className="text-white font-semibold">
//               Already have an account?
//             </Text>
//             <Text className="text-[#f49b33] font-semibold underline ml-2">
//               Sign in
//             </Text>
//           </TouchableOpacity>

//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
