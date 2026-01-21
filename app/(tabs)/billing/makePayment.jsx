import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function MakePayment() {
  const [tab, setTab] = useState("monthly");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white"
    >
      <ScrollView className="px-5 pt-4" showsVerticalScrollIndicator={false}>
        {/* Toggle */}
        <View className="flex-row bg-gray-100 rounded-full p-1 mb-6">
          {/* Monthly */}
          <Pressable onPress={() => setTab("monthly")} className="flex-1">
            <View
              className={`rounded-full py-2 ${
                tab === "monthly" ? "bg-white" : "bg-transparent"
              }`}
              style={{ elevation: tab === "monthly" ? 2 : 0 }}
            >
              <Text
                className={`text-center font-medium ${
                  tab === "monthly" ? "text-gray-900" : "text-gray-400"
                }`}
              >
                Monthly Bill
              </Text>
            </View>
          </Pressable>

          {/* Deposit */}
          <Pressable onPress={() => setTab("deposit")} className="flex-1">
            <View
              className={`rounded-full py-2 ${
                tab === "deposit" ? "bg-white" : "bg-transparent"
              }`}
              style={{ elevation: tab === "deposit" ? 2 : 0 }}
            >
              <Text
                className={`text-center font-medium ${
                  tab === "deposit" ? "text-gray-900" : "text-gray-400"
                }`}
              >
                Security Deposit
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Bill Card */}
        <View className="bg-[#3f6289] rounded-3xl p-6 mb-6">
          <Text className="text-white/80 mb-2">
            {tab === "monthly" ? "Monthly Bill" : "Security Deposit"}
          </Text>
          <Text className="text-white text-4xl font-bold">$127.50</Text>
          <Text className="text-white/80 mt-2">Due: Jan 15, 2024</Text>
        </View>

        {/* Warning */}
        <View className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex-row gap-3 mb-6">
          <Ionicons name="alert-circle-outline" size={22} color="#f97316" />
          <View className="flex-1">
            <Text className="font-semibold text-orange-800">
              No Partial Payments
            </Text>
            <Text className="text-orange-700 text-sm mt-1">
              Full payment amount is required. Partial payments are not
              accepted.
            </Text>
          </View>
        </View>

        {/* Card Details */}
        <View className="bg-white rounded-2xl p-5 shadow border border-gray-100 mb-6">
          <View className="flex-row items-center mb-4">
            <Ionicons name="card-outline" size={22} color="#0d9488" />
            <Text className="font-semibold text-lg ml-2">Card Details</Text>
          </View>

          {/* Card Number */}
          <Text className="text-gray-600 mb-2">Card Number</Text>
          <TextInput
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            className="border border-gray-200 rounded-xl px-4 py-3 mb-4"
          />

          {/* Expiry + CVV */}
          <View className="flex-row gap-4 mb-4">
            <View className="flex-1">
              <Text className="text-gray-600 mb-2">Expiry Date</Text>
              <TextInput
                placeholder="MM/YY"
                keyboardType="numeric"
                className="border border-gray-200 rounded-xl px-4 py-3"
              />
            </View>

            <View className="flex-1">
              <Text className="text-gray-600 mb-2">CVV</Text>
              <TextInput
                placeholder="123"
                keyboardType="numeric"
                secureTextEntry
                className="border border-gray-200 rounded-xl px-4 py-3"
              />
            </View>
          </View>

          {/* Name */}
          <Text className="text-gray-600 mb-2">Name on Card</Text>
          <TextInput
            placeholder="John Doe"
            className="border border-gray-200 rounded-xl px-4 py-3"
          />
        </View>

        {/* SSL */}
        <View className="flex-row justify-center items-center mb-6">
          <Ionicons name="shield-checkmark-outline" size={18} color="#10b981" />
          <Text className="text-gray-500 ml-2 text-sm">
            Secured by 256-bit SSL encryption
          </Text>
        </View>
      </ScrollView>

      {/* Pay Button */}
      <View className="px-5 pb-6">
        <TouchableOpacity className="bg-[#3f6289] py-4 rounded-full">
          <Text className="text-white text-center font-semibold text-lg">
            Pay $127.50
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
