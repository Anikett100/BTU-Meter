import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MoveOutRequest() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-white">
        <Ionicons
          name="chevron-back"
          size={24}
          color="#111827"
          onPress={() => router.push("/(tabs)/profile")}
        />
        <Text className="text-lg font-semibold ml-3">Move-Out Request</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Important Notice */}
        <View className="px-6 mt-6">
          <View className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex-row">
            <Ionicons
              name="warning-outline"
              size={22}
              color="#f59e0b"
              className="mt-1"
            />
            <View className="ml-3 flex-1">
              <Text className="font-semibold text-gray-900 mb-1">
                Important Notice
              </Text>
              <Text className="text-gray-600 text-sm leading-5">
                Please submit your move-out request at least 7 days before your
                intended move-out date. Final meter reading will be taken on the
                move-out date.
              </Text>
            </View>
          </View>
        </View>

        {/* Move-Out Date */}
        <View className="px-6 mt-8">
          <Text className="text-gray-700 mb-2 font-medium">Move-Out Date</Text>
          <View className="flex-row items-center bg-white rounded-xl px-4 py-4 border border-gray-200">
            <Ionicons name="calendar-outline" size={20} color="#9ca3af" />
            <TextInput
              placeholder="mm/dd/yyyy"
              placeholderTextColor="#9ca3af"
              className="flex-1 ml-3 text-gray-900"
            />
            <Ionicons name="calendar" size={18} color="#111827" />
          </View>
        </View>

        {/* Reason */}
        <View className="px-6 mt-6">
          <Text className="text-gray-700 mb-2 font-medium">
            Reason for Moving Out
          </Text>
          <View className="bg-white rounded-xl border border-gray-200 p-4">
            <TextInput
              multiline
              numberOfLines={4}
              placeholder="Please provide a reason for moving out..."
              placeholderTextColor="#9ca3af"
              className="text-gray-900"
              textAlignVertical="top"
            />
          </View>
        </View>

        {/* Forwarding Address */}
        <View className="px-6 mt-6">
          <Text className="text-gray-700 mb-2 font-medium">
            Forwarding Address (for final bill)
          </Text>
          <View className="bg-white rounded-xl border border-gray-200 p-4">
            <TextInput
              multiline
              numberOfLines={3}
              placeholder="Enter your new address..."
              placeholderTextColor="#9ca3af"
              className="text-gray-900"
              textAlignVertical="top"
            />
          </View>
        </View>

        {/* What Happens Next */}
        <View className="px-6 mt-8">
          <View className="bg-white rounded-2xl p-5 shadow-sm">
            <Text className="text-base font-semibold text-gray-900 mb-4">
              What Happens Next?
            </Text>

            <Step number="1" text="Final meter reading on move-out date" />
            <Step
              number="2"
              text="Final bill calculation with any pending dues"
            />
            <Step number="3" text="Security deposit refund processing" />
            <Step number="4" text="Account closure confirmation" />
          </View>
        </View>

        {/* Submit Button */}
        <View className="px-6 mt-8 mb-10">
          <TouchableOpacity className="bg-teal-500 py-4 rounded-xl flex-row items-center justify-center">
            <Text className="text-white font-semibold text-base mr-2">
              Submit Move-Out Request
            </Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------- Reusable Step Component ---------- */
function Step({ number, text }) {
  return (
    <View className="flex-row items-start mb-3">
      <View className="w-6 h-6 bg-teal-100 rounded-full items-center justify-center mr-3">
        <Text className="text-teal-600 text-xs font-semibold">{number}</Text>
      </View>
      <Text className="text-gray-600 text-sm flex-1">{text}</Text>
    </View>
  );
}
