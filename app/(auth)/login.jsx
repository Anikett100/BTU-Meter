import { useRouter } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
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

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    router.replace("/home");
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
            Login as Admin!
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

          {/* PASSWORD */}
          <View className="bg-white rounded-full px-5 py-4 mb-5 flex-row items-center">
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter Your Password"
                  placeholderTextColor="#94a3b8"
                  secureTextEntry={!showPassword}
                  className="flex-1 text-gray-900"
                />
              )}
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Eye size={18} color="#0f172a" />
              ) : (
                <EyeOff size={18} color="#0f172a" />
              )}
            </TouchableOpacity>
          </View>

          {/* FORGOT PASSWORD */}
          <TouchableOpacity
            className="self-end mb-6 pr-1"
            onPress={() => router.push("/forgot-password")}
          >
            <Text className="text-white text-sm">Forgot Password?</Text>
          </TouchableOpacity>

          {/* SIGN IN */}
          <Pressable
            onPress={handleSubmit(onSubmit)}
            className="bg-[#b89a5b] rounded-full py-5 px-6 flex-row justify-center items-center"
          >
            <Text className="text-white font-semibold text-lg">Sign In</Text>
          </Pressable>

          <Image
            source={require("../../assets/images/burj.png")}
            style={{
              width: "100%",
              height: SCREEN_HEIGHT * 0.4,
              bottom: 8,
            }}
            resizeMode="cover"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
