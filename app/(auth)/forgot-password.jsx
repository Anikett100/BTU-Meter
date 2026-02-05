import { useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Dimensions,
  Image,
  Pressable,
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
            Forgot Password?
          </Text>

          {/* EMAIL */}
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder="Enter Your Email Address"
                placeholderTextColor="#94a3b8"
                className="bg-white rounded-full px-5 py-7 mb-6 text-gray-900"
              />
            )}
          />

          {/* SIGN IN */}
          <Pressable
            onPress={handleSubmit(onSubmit)}
            className="bg-[#b89a5b] rounded-full py-5 px-6 flex-row justify-center items-center"
          >
            <Text className="text-white font-semibold text-lg">Send OTP</Text>
          </Pressable>
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
