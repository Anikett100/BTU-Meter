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

export default function ResetPassword() {
  const router = useRouter();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");

  const onSubmit = (data) => {
    // Assuming validation passes, proceed to login or home
    router.replace("/");
  };

  return (
    <View className="flex-1 bg-white relative">
      <StatusBar barStyle="dark-content" />

      {/* TOP SAFE AREA ONLY */}
      <SafeAreaView edges={["top"]} className="flex-1">
        <View className="flex-1">
          {/* LOGO SECTION */}
          <View className="flex-1 justify-center items-center px-6">
            <Image
              source={require("../../assets/images/Logo.jpeg")}
              className="w-64 h-64 mb-6"
              resizeMode="contain"
            />
          </View>

          {/* BLUE LOGIN CARD */}
          <View
            className="bg-[#0f4c5c] rounded-t-[32px] px-6 pt-10"
            style={{
              minHeight: SCREEN_HEIGHT * 0.6,
              paddingBottom: SCREEN_HEIGHT * 0.28, // space for skyline
            }}
          >
            <Text className="text-white text-xl font-semibold text-center mb-6">
              Reset Password
            </Text>

            <Controller
              control={control}
              name="newPassword"
              rules={{
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field: { value, onChange } }) => (
                <>
                  <View className="bg-white rounded-full px-5 py-4 mb-4 flex-row items-center">
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="Enter New Password"
                      placeholderTextColor="#94a3b8"
                      secureTextEntry={!showNewPassword}
                      className="flex-1 text-gray-900"
                    />
                    <TouchableOpacity
                      onPress={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <Eye size={18} color="#0f172a" />
                      ) : (
                        <EyeOff size={18} color="#0f172a" />
                      )}
                    </TouchableOpacity>
                  </View>
                  {errors.newPassword && (
                    <Text className="text-red-400 text-sm mb-3 ml-2">
                      {errors.newPassword.message}
                    </Text>
                  )}
                </>
              )}
            />

            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: "Confirm password is required",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              }}
              render={({ field: { value, onChange } }) => (
                <>
                  <View className="bg-white rounded-full px-5 py-4 mb-2 flex-row items-center">
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="Confirm New Password"
                      placeholderTextColor="#94a3b8"
                      secureTextEntry={!showConfirmPassword}
                      className="flex-1 text-gray-900"
                    />
                    <TouchableOpacity
                      onPress={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <Eye size={18} color="#0f172a" />
                      ) : (
                        <EyeOff size={18} color="#0f172a" />
                      )}
                    </TouchableOpacity>
                  </View>
                  {errors.confirmPassword && (
                    <Text className="text-red-400 text-sm mb-3 ml-2">
                      {errors.confirmPassword.message}
                    </Text>
                  )}
                </>
              )}
            />

            <Pressable
              onPress={handleSubmit(onSubmit)}
              className="bg-[#b89a5b] rounded-full py-5 px-6 mt-4 mb-2 flex-row justify-center items-center"
            >
              <Text className="text-white font-semibold text-lg">
                Reset Password
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>

      {/* SKYLINE - FULL BLEED TO BOTTOM */}
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
    </View>
  );
}
