import { useRouter } from "expo-router";
import { Eye, EyeOff, Lock, Mail } from "lucide-react-native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.replace("/home");
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center px-6">
          {/* Logo */}
          <View className="items-center mb-6">
            <View className="w-20 h-20 rounded-2xl bg-blue-500 items-center justify-center mb-4">
              <Text className="text-white text-3xl font-bold">⚡</Text>
            </View>

            <Text className="text-2xl font-bold text-gray-900">BTU Meter</Text>
            <Text className="text-gray-500 mt-1">
              Your meter bill management portal
            </Text>
          </View>
          <View className="mb-4">
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
                    message: "Enter a valid email",
                  },
                }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder="Enter your email"
                    placeholderTextColor="#9ca3af"
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
          <View className="mb-2">
            <Text className="text-gray-700 mb-2 font-medium">Password</Text>

            <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3">
              <Lock size={20} color="#9ca3af" />

              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Minimum 6 characters",
                  },
                }}
                render={({ field: { value, onChange } }) => (
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder="Enter your password"
                    placeholderTextColor="#9ca3af"
                    secureTextEntry={!showPassword}
                    className="ml-3 flex-1 text-gray-900"
                  />
                )}
              />

              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={20} color="#0f172a" />
                ) : (
                  <Eye size={20} color="#0f172a" />
                )}
              </TouchableOpacity>
            </View>

            {errors.password && (
              <Text className="text-red-500 mt-1 text-sm">
                {errors.password.message}
              </Text>
            )}
          </View>

          {/* Forgot Password */}
          <TouchableOpacity
            className="self-end mb-6"
            onPress={() => router.push("/forgot-password")}
          >
            <Text className="font-medium">Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <Pressable
            className="bg-blue-500 py-4 rounded-xl"
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
          >
            <Text className="text-white text-lg font-semibold text-center">
              {loading ? "Logging in..." : "Login"}
            </Text>
          </Pressable>

          {/* Support */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-500">Need help? </Text>
            <Text className="font-medium">Contact Support</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
