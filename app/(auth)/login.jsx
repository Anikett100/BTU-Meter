// import { useRouter } from "expo-router";
// import { Eye, EyeOff } from "lucide-react-native";
// import { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import {
//   Dimensions,
//   Image,
//   Pressable,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const { height: SCREEN_HEIGHT } = Dimensions.get("window");

// export default function Login() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (data) => {
//     // Assuming validation passes, proceed to home
//     router.replace("/home");
//   };

//   return (
//     <View className="flex-1 bg-white relative">
//       <StatusBar barStyle="dark-content" />

//       {/* TOP SAFE AREA ONLY */}
//       <SafeAreaView edges={["top"]} className="flex-1">
//         <View className="flex-1">
//           {/* LOGO SECTION */}
//           <View className="flex-1 justify-center items-center px-6">
//             <Image
//               source={require("../../assets/images/Logo.jpeg")}
//               className="w-64 h-64 mb-6"
//               resizeMode="contain"
//             />
//           </View>

//           {/* BLUE LOGIN CARD */}
//           <View
//             className="bg-[#0f4c5c] rounded-t-[32px] px-6 pt-10"
//             style={{
//               minHeight: SCREEN_HEIGHT * 0.6,
//               paddingBottom: SCREEN_HEIGHT * 0.28, // space for skyline
//             }}
//           >
//             <Text className="text-white text-xl font-semibold text-center mb-6">
//               Login as Admin!
//             </Text>

//             <Controller
//               control={control}
//               name="email"
//               rules={{
//                 required: "Email is required",
//                 pattern: {
//                   value: /^\S+@\S+$/i,
//                   message: "Invalid email address",
//                 },
//               }}
//               render={({ field: { value, onChange } }) => (
//                 <>
//                   <TextInput
//                     value={value}
//                     onChangeText={onChange}
//                     placeholder="Enter Your Email Address"
//                     placeholderTextColor="#94a3b8"
//                     className="bg-white rounded-full px-5 py-6 mb-2 text-gray-900"
//                   />
//                   {errors.email && (
//                     <Text className="text-red-400 text-sm mb-3 ml-2">
//                       {errors.email.message}
//                     </Text>
//                   )}
//                 </>
//               )}
//             />

//             <Controller
//               control={control}
//               name="password"
//               rules={{
//                 required: "Password is required",
//                 minLength: {
//                   value: 6,
//                   message: "Password must be at least 6 characters",
//                 },
//               }}
//               render={({ field: { value, onChange } }) => (
//                 <>
//                   <View className="bg-white rounded-full px-5 py-4 mb-4 mt-2 flex-row items-center">
//                     <TextInput
//                       value={value}
//                       onChangeText={onChange}
//                       placeholder="Enter Your Password"
//                       placeholderTextColor="#94a3b8"
//                       secureTextEntry={!showPassword}
//                       className="flex-1 text-gray-900"
//                     />
//                     <TouchableOpacity
//                       onPress={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? (
//                         <Eye size={18} color="#0f172a" />
//                       ) : (
//                         <EyeOff size={18} color="#0f172a" />
//                       )}
//                     </TouchableOpacity>
//                   </View>
//                   {errors.password && (
//                     <Text className="text-red-400 text-sm mb-3 ml-2">
//                       {errors.password.message}
//                     </Text>
//                   )}
//                 </>
//               )}
//             />

//             <TouchableOpacity
//               className="self-end mb-6 pr-1"
//               onPress={() => router.push("/forgot-password")}
//             >
//               <Text className="text-white text-sm">Forgot Password?</Text>
//             </TouchableOpacity>

//             <Pressable
//               onPress={handleSubmit(onSubmit)}
//               className="bg-[#b89a5b] rounded-full py-5 px-6 flex-row justify-center items-center"
//             >
//               <Text className="text-white font-semibold text-lg">Sign In</Text>
//             </Pressable>
//           </View>
//         </View>
//       </SafeAreaView>

//       {/* SKYLINE - FULL BLEED TO BOTTOM */}
//       <Image
//         source={require("../../assets/images/burj.png")}
//         style={{
//           position: "absolute",
//           bottom: 0,
//           width: "100%",
//           height: SCREEN_HEIGHT * 0.28,
//         }}
//         resizeMode="cover"
//       />
//     </View>
//   );
// }

import { useRouter } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        setIsKeyboardVisible(true);
        setKeyboardHeight(e.endCoordinates.height);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        setIsKeyboardVisible(false);
        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    router.replace("/home");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <StatusBar barStyle="dark-content" />

      {/* TOP SAFE AREA ONLY */}
      <SafeAreaView edges={["top"]} className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 bg-white relative">
            {/* LOGO SECTION - Reduce height when keyboard is visible */}
            <View
              className="justify-center items-center px-6"
              style={{
                minHeight: isKeyboardVisible
                  ? SCREEN_HEIGHT * 0.2
                  : SCREEN_HEIGHT * 0.3,
              }}
            >
              <Image
                source={require("../../assets/images/Logo.jpeg")}
                className="w-64 h-64 mb-6"
                resizeMode="contain"
              />
            </View>

            {/* BLUE LOGIN CARD */}
            <View
              className="bg-[#0f4c5c] rounded-t-[32px] px-6 pt-10 flex-1"
              style={{
                minHeight: isKeyboardVisible
                  ? SCREEN_HEIGHT * 0.55
                  : SCREEN_HEIGHT * 0.6,
                paddingBottom: isKeyboardVisible
                  ? 20 // Less padding when keyboard is visible
                  : SCREEN_HEIGHT * 0.28,
              }}
            >
              <Text className="text-white text-xl font-semibold text-center mb-6">
                Login as Admin!
              </Text>

              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field: { value, onChange } }) => (
                  <>
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="Enter Your Email Address"
                      placeholderTextColor="#94a3b8"
                      className="bg-white rounded-full px-5 py-6 mb-2 text-gray-900"
                    />
                    {errors.email && (
                      <Text className="text-red-400 text-sm mb-3 ml-2">
                        {errors.email.message}
                      </Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                render={({ field: { value, onChange } }) => (
                  <>
                    <View className="bg-white rounded-full px-5 py-4 mb-4 mt-2 flex-row items-center">
                      <TextInput
                        value={value}
                        onChangeText={onChange}
                        placeholder="Enter Your Password"
                        placeholderTextColor="#94a3b8"
                        secureTextEntry={!showPassword}
                        className="flex-1 text-gray-900"
                      />
                      <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <Eye size={18} color="#0f172a" />
                        ) : (
                          <EyeOff size={18} color="#0f172a" />
                        )}
                      </TouchableOpacity>
                    </View>
                    {errors.password && (
                      <Text className="text-red-400 text-sm mb-3 ml-2">
                        {errors.password.message}
                      </Text>
                    )}
                  </>
                )}
              />

              <TouchableOpacity
                className="self-end mb-6 pr-1"
                onPress={() => router.push("/forgot-password")}
              >
                <Text className="text-white text-sm">Forgot Password?</Text>
              </TouchableOpacity>

              <Pressable
                onPress={handleSubmit(onSubmit)}
                className="bg-[#b89a5b] rounded-full py-5 px-6 flex-row justify-center items-center"
              >
                <Text className="text-white font-semibold text-lg">
                  Sign In
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* SKYLINE - Only show when keyboard is NOT visible */}
      {!isKeyboardVisible && (
        <Image
          source={require("../../assets/images/burj.png")}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: SCREEN_HEIGHT * 0.28,
          }}
          resizeMode="cover"
        />
      )}
    </KeyboardAvoidingView>
  );
}
