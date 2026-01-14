import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetPassword() {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  useEffect(() => {
    if (resetSuccess) {
      Alert.alert(
        "Success 🎉",
        "Your password has been reset successfully.",
        [
          {
            text: "Go to Login",
            onPress: () => router.replace("/"),
          },
        ],
        { cancelable: false }
      );
    }
  }, [resetSuccess]);

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setResetSuccess(true);
    } catch (e) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center px-6">
          <Text className="text-black text-2xl font-bold text-center mb-2">
            Reset Password
          </Text>

          <Text className="text-gray-500 text-center mb-6">
            Enter your new password
          </Text>

          {/* New Password */}
          <View className="mb-4 relative">
            <Text className="text-gray-600 mb-2 font-semibold">
              New Password
            </Text>

            <TextInput
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter new password"
              placeholderTextColor="#9ca3af"
              secureTextEntry={!showPassword}
              className="border border-gray-400 rounded-lg px-4 py-3 text-black"
            />

            <TouchableOpacity
              className="absolute right-3 top-10"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color="#9ca3af"
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <View className="mb-6 relative">
            <Text className="text-gray-600 mb-2 font-semibold">
              Confirm Password
            </Text>

            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm password"
              placeholderTextColor="#9ca3af"
              secureTextEntry={!showConfirmPassword}
              className={`border rounded-lg px-4 py-3 text-black ${
                error ? "border-red-500" : "border-gray-400"
              }`}
            />

            <TouchableOpacity
              className="absolute right-3 top-10"
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye" : "eye-off"}
                size={20}
                color="#9ca3af"
              />
            </TouchableOpacity>
          </View>

          {error ? (
            <Text className="text-red-500 text-center mb-4 font-medium">
              {error}
            </Text>
          ) : null}

          <TouchableOpacity
            className={`bg-blue-500 py-3 rounded-lg ${
              loading ? "opacity-50" : ""
            }`}
            onPress={handleResetPassword}
            disabled={loading}
          >
            <Text className="text-white text-lg font-semibold text-center">
              {loading ? "Resetting..." : "Reset Password"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
