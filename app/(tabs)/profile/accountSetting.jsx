import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountSettings() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-6 py-4 border-b border-gray-100">
        <Ionicons name="chevron-back" size={24} onPress={() => router.back()} />
        <Text className="text-lg font-semibold ml-3">Account Settings</Text>
      </View>

      <View className="px-6 pt-6 space-y-4">
        <SettingItem icon="lock-closed-outline" title="Change Password" />
        <SettingItem
          icon="notifications-outline"
          title="Notification Settings"
        />
        <SettingItem icon="shield-checkmark-outline" title="Privacy Policy" />
        <SettingItem icon="trash-outline" title="Delete Account" danger />
      </View>
    </SafeAreaView>
  );
}

function SettingItem({ icon, title, danger }) {
  return (
    <TouchableOpacity className="flex-row items-center justify-between bg-gray-50 px-4 py-4 rounded-xl">
      <View className="flex-row items-center">
        <Ionicons
          name={icon}
          size={20}
          color={danger ? "#dc2626" : "#0d9488"}
        />
        <Text className={`ml-3 ${danger ? "text-red-600" : "text-gray-800"}`}>
          {title}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
    </TouchableOpacity>
  );
}
