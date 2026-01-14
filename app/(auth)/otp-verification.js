import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OTPVerification() {
  const router = useRouter();
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

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center px-6">
          <Text className="text-white text-2xl font-bold text-center mb-2">
            OTP Verification
          </Text>

          <Text className="text-center mb-6">
            Enter the 6-digit code sent to your email
          </Text>

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
                className="border border-gray-500 rounded-lg px-4 py-3 text-black text-center text-lg w-12"
              />
            ))}
          </View>

          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-lg"
            onPress={verifyOtp}
            disabled={loading}
          >
            <Text className="text-white text-lg font-semibold text-center">
              {loading ? "Verifying ..." : "Verify"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-center mt-6">
            <Text className=" font-semibold">Didn't receive OTP?</Text>
            <Text className="text-blue-500 font-semibold underline ml-2">
              Resend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row justify-center mt-4"
            onPress={() => router.push("/")}
          >
            <Text className="text-black font-semibold">Go back to</Text>
            <Text className="text-blue-500 font-semibold underline ml-2">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
