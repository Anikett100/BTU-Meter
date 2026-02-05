// import { useRouter } from "expo-router";
// import { useRef, useState } from "react";
// import {
//   ScrollView,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function OTPVerification() {
//   const router = useRouter();
// const [otp, setOtp] = useState(["", "", "", "", "", ""]);
// const [loading, setLoading] = useState(false);
// const inputsRef = useRef([]);

// const handleOtpChange = (text, index) => {
//   if (/^\d*$/.test(text)) {
//     const newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);

//     if (text && index < 5) {
//       inputsRef.current[index + 1]?.focus();
//     }
//   }
// };

// const handleKeyPress = ({ nativeEvent }, index) => {
//   if (nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
//     inputsRef.current[index - 1]?.focus();
//   }
// };

// const verifyOtp = async () => {
//   const enteredOtp = otp.join("");

//   if (enteredOtp.length !== 6) {
//     console.log("Please enter valid OTP");
//     return;
//   }

//   setLoading(true);

//   try {
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     console.log("OTP Verified:", enteredOtp);

//     router.replace("/reset-password");
//   } catch (err) {
//     console.log("OTP failed");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />

//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <View className="flex-1 justify-center px-6">
//           <Text className="text-white text-2xl font-bold text-center mb-2">
//             OTP Verification
//           </Text>

//           <Text className="text-center mb-6">
//             Enter the 6-digit code sent to your email
//           </Text>

// <View className="flex-row justify-between mb-6">
//   {otp.map((digit, index) => (
//     <TextInput
//       key={index}
//       ref={(el) => (inputsRef.current[index] = el)}
//       value={digit}
//       onChangeText={(text) => handleOtpChange(text, index)}
//       onKeyPress={(e) => handleKeyPress(e, index)}
//       keyboardType="number-pad"
//       maxLength={1}
//       className="border border-gray-500 rounded-lg px-4 py-3 text-black text-center text-lg w-12"
//     />
//   ))}
// </View>

// <TouchableOpacity
//   className="bg-[#0f4c5c] py-3 rounded-lg"
//   onPress={verifyOtp}
//   disabled={loading}
// >
//   <Text className="text-white text-lg font-semibold text-center">
//     {loading ? "Verifying ..." : "Verify"}
//   </Text>
// </TouchableOpacity>

//           <TouchableOpacity className="flex-row justify-center mt-6">
//             <Text className=" font-semibold">Didn't receive OTP?</Text>
//             <Text className="text-[#0f4c5c] font-semibold underline ml-2">
//               Resend
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             className="flex-row justify-center mt-4"
//             onPress={() => router.push("/")}
//           >
//             <Text className="text-black font-semibold">Go back to</Text>
//             <Text className="text-[#0f4c5c] font-semibold underline ml-2">
//               Sign In
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }


import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dimensions,
  Image,
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
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);

  const handleOtpChange = (text, index) => {
    if (/^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const verifyOtp = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      console.log("Please enter valid OTP");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("OTP Verified:", enteredOtp);

      router.replace("/reset-password");
    } catch (err) {
      console.log("OTP failed");
    } finally {
      setLoading(false);
    }
  };

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
      <StatusBar barStyle="dark-content" />

      <View className="flex-1">
        {/* REMAINING UPPER SPACE (LOGO CENTERED) */}
        <View className="flex-1 justify-center items-center px-6">
          <Image
            source={require("../../assets/images/Logo.jpeg")}
            className="w-64 h-64"
            resizeMode="contain"
          />
        </View>

        {/* BLUE SECTION */}
        <View
          style={{
            height: SCREEN_HEIGHT * 0.7,
            paddingBottom: SCREEN_HEIGHT * 0.32,
          }}
          className="bg-[#0f4c5c] rounded-t-[32px] px-6 pt-10 pb-20"
        >
          <Text className="text-white text-xl font-semibold text-center mb-6">
            OTP Verification
          </Text>

          <Text className="text-center text-white mb-8">
            Enter the 6-digit code sent to your email
          </Text>
          {/* EMAIL */}
          <View className="flex-row justify-between mb-6">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                className="border border-white rounded-lg px-4 py-3 text-white text-center text-lg w-12"
              />
            ))}
          </View>
          {/* SIGN IN */}
          {/* <Pressable
            onPress={handleSubmit(onSubmit)}
            className="bg-[#b89a5b] rounded-full py-5 px-6 flex-row justify-center items-center"
          >
            <Text className="text-white font-semibold text-lg">Send OTP</Text>
          </Pressable> */}
          <TouchableOpacity
            className="bg-[#b89a5b] py-3 rounded-lg"
            onPress={verifyOtp}
            disabled={loading}
          >
            <Text className="text-white text-lg font-semibold text-center">
              {loading ? "Verifying ..." : "Verify"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row justify-center mt-10"
            onPress={() => router.push("/")}
          >
            <Text className="text-white">Remembered your password?</Text>
            <Text className="text-white font-medium ml-2">Sign In</Text>
          </TouchableOpacity>
          <Image
            source={require("../../assets/images/burj.png")}
            style={{
              width: "100%",
              height: SCREEN_HEIGHT * 0.4,
              bottom: 0,
            }}
            resizeMode="cover"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
