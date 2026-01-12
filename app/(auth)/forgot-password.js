// import { useRouter } from "expo-router";
// import { Mail } from "lucide-react-native";
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

// export default function ForgotPassword() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

//       <ScrollView
//         contentContainerStyle={{ flexGrow: 1 }}
//         showsVerticalScrollIndicator={false}
//       >
//         <View className="flex-1 justify-center px-6">
//           {/* Logo & Title */}
//           <View className="items-center mb-6">
//             <View className="w-20 h-20 rounded-2xl bg-blue-500 items-center justify-center mb-4">
//               <Text className="text-white text-3xl font-bold">⚡</Text>
//             </View>

//             <Text className="text-2xl font-bold text-gray-900">
//               Forgot Password
//             </Text>

//             <Text className="text-gray-500 text-center mt-1">
//               Enter your email to reset your password
//             </Text>
//           </View>

//           {/* Email Input */}
//           <View className="mb-6">
//             <Text className="text-gray-700 mb-2 font-medium">
//               Email Address
//             </Text>

//             <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3">
//               <Mail size={20} color="#9ca3af" />
//               <TextInput
//                 value={email}
//                 onChangeText={setEmail}
//                 placeholder="Enter your email"
//                 placeholderTextColor="#9ca3af"
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 className="ml-3 flex-1 text-gray-900"
//               />
//             </View>
//           </View>

//           {/* Send OTP Button */}
//           <TouchableOpacity
//             className="bg-blue-500 py-4 rounded-xl"
//             activeOpacity={0.8}
//             onPress={() => router.push("/otp-verification")}
//           >
//             <Text className="text-white text-lg font-semibold text-center">
//               Send OTP
//             </Text>
//           </TouchableOpacity>

//           {/* Back to Login */}
//           <TouchableOpacity
//             className="flex-row justify-center mt-6"
//             onPress={() => router.push("/login")}
//             activeOpacity={0.7}
//           >
//             <Text className="text-gray-500">Remembered your password?</Text>
//             <Text className="text-blue-500 font-medium ml-2">Sign In</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

import { useRouter } from "expo-router";
import { Mail } from "lucide-react-native";
import { Controller, useForm } from "react-hook-form";
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPassword() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Email:", data.email);
    router.push("/otp-verification");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center px-6">
          {/* Logo & Title */}
          <View className="items-center mb-6">
            <View className="w-20 h-20 rounded-2xl bg-blue-500 items-center justify-center mb-4">
              <Text className="text-white text-3xl font-bold">⚡</Text>
            </View>

            <Text className="text-2xl font-bold text-gray-900">
              Forgot Password
            </Text>

            <Text className="text-gray-500 text-center mt-1">
              Enter your email to reset your password
            </Text>
          </View>

          {/* Email Input */}
          <View className="mb-2">
            <Text className="text-gray-700 mb-2 font-medium">
              Email Address
            </Text>

            <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3">
              <Mail size={20} color="#9ca3af" />

              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email address",
                  },
                }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder="Enter your email"
                    placeholderTextColor="#9ca3af"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="ml-3 flex-1 text-gray-900"
                  />
                )}
              />
            </View>

            {errors.email && (
              <Text className="text-red-500 mt-1 text-sm">
                {errors.email.message}
              </Text>
            )}
          </View>

          {/* Send OTP Button */}
          <TouchableOpacity
            className="bg-blue-500 py-4 rounded-xl mt-4"
            activeOpacity={0.8}
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white text-lg font-semibold text-center">
              Send OTP
            </Text>
          </TouchableOpacity>

          {/* Back to Login */}
          <TouchableOpacity
            className="flex-row justify-center mt-6"
            onPress={() => router.push("/")}
          >
            <Text className="text-gray-500">Remembered your password?</Text>
            <Text className="text-blue-500 font-medium ml-2">Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
