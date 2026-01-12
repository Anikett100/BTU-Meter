// }

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View className="px-6 mt-6">
          <View className="bg-white rounded-2xl p-5 shadow-sm">
            <View className="flex-row items-center">
              <View className="bg-blue-500 w-14 h-14 rounded-full items-center justify-center">
                <Text className="text-white text-lg font-bold">JD</Text>
              </View>

              <View className="ml-4">
                <Text className="text-lg font-semibold text-gray-900">
                  John Doe
                </Text>
                <Text className="text-gray-500 text-sm">
                  Account #: 123456789
                </Text>
              </View>
            </View>

            <View className="h-[1px] bg-gray-200 my-4" />

            <View className="flex-row justify-between">
              <View className="flex-row items-center">
                <Ionicons name="call-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 text-sm ml-2">
                  +1 234 567 890
                </Text>
              </View>

              <View className="flex-row items-center">
                <Ionicons name="mail-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 text-sm ml-2">
                  john@email.com
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Account */}
        <Section title="Account">
          <MenuItem icon="person-outline" label="Personal Details" />
          <Divider />
          <MenuItem icon="settings-outline" label="Account Settings" />
        </Section>

        {/* Move In / Out */}
        <Section title="Move In / Out">
          <MenuItem
            icon="swap-horizontal-outline"
            label="Move-In Status"
            bg="bg-green-100"
            color="#16a34a"
            onPress={() => router.push("/profile/moveIn")}
          />
          <Divider />
          <MenuItem
            icon="swap-horizontal-outline"
            label="Move-Out Request"
            bg="bg-orange-100"
            color="#f97316"
            onPress={() => router.push("/profile/moveOut")}
          />
        </Section>

        {/* Support & Help */}
        <Section title="Support & Help">
          <MenuItem icon="help-circle-outline" label="FAQ" />
          <Divider />
          <MenuItem icon="document-text-outline" label="Help & Support" />
        </Section>

        {/* Sign Out */}
        <View className="px-6 mt-6 mb-10">
          <TouchableOpacity
            className="bg-red-50 py-4 rounded-xl flex-row items-center justify-center"
            onPress={() => router.replace("/")}
          >
            <Ionicons name="log-out-outline" size={20} color="#ef4444" />
            <Text className="text-red-500 font-semibold ml-2">Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- Reusable Components ---------------- */

function Section({ title, children }) {
  return (
    <View className="px-6 mt-8">
      <Text className="text-gray-500 mb-3">{title}</Text>
      <View className="bg-white rounded-xl overflow-hidden">{children}</View>
    </View>
  );
}

function MenuItem({
  icon,
  label,
  onPress,
  bg = "bg-blue-100",
  color = "#2196F3",
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row items-center justify-between p-5"
      onPress={onPress}
    >
      <View className="flex-row items-center">
        <View
          className={`${bg} w-9 h-9 rounded-full items-center justify-center`}
        >
          <Ionicons name={icon} size={18} color={color} />
        </View>
        <Text className="ml-4 text-gray-900 text-base">{label}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
    </TouchableOpacity>
  );
}

function Divider() {
  return <View className="h-[1px] bg-gray-200 ml-16" />;
}
