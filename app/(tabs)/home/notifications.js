import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notifications() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <View className="flex-row items-center">
          <Ionicons name="notifications-outline" size={22} color="#0d9488" />
          <Text className="text-lg font-semibold ml-2">Notifications</Text>
        </View>

        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      {/* List */}
      <ScrollView className="px-6 pt-6" showsVerticalScrollIndicator={false}>
        <NotificationItem
          icon="warning-outline"
          bg="bg-orange-100"
          color="#f59e0b"
          title="Payment Reminder"
          message="Your bill of $127.50 is due in 3 days"
          time="2h ago"
        />

        <NotificationItem
          icon="alert-circle-outline"
          bg="bg-red-100"
          color="#ef4444"
          title="Disconnection Notice"
          message="Account will be disconnected if payment not received by Jan 15"
          time="1 day ago"
        />

        <NotificationItem
          icon="information-circle-outline"
          bg="bg-teal-100"
          color="#14b8a6"
          title="Meter Reading Scheduled"
          message="Your next meter reading is scheduled for Jan 10"
          time="2 days ago"
        />

        <NotificationItem
          icon="checkmark-circle-outline"
          bg="bg-green-100"
          color="#22c55e"
          title="Payment Received"
          message="We received your payment of $142.30"
          time="5 days ago"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function NotificationItem({ icon, bg, color, title, message, time }) {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
      <View className="flex-row">
        <View
          className={`${bg} w-10 h-10 rounded-full items-center justify-center`}
        >
          <Ionicons name={icon} size={20} color={color} />
        </View>

        <View className="flex-1 ml-4">
          <View className="flex-row justify-between">
            <Text className="font-semibold text-gray-900">{title}</Text>
            <Text className="text-xs text-gray-400">{time}</Text>
          </View>
          <Text className="text-gray-600 text-sm mt-1">{message}</Text>
        </View>
      </View>
    </View>
  );
}
