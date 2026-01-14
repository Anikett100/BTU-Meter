import { Ionicons } from "@expo/vector-icons";
import { ChevronDown, UploadCloud } from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Billing() {
  const [tab, setTab] = useState("raise"); // raise | track

  return (
    <View className="flex-1 bg-white">
      {/* Toggle Header */}
      {/* 
      <View className="flex-row bg-gray-100 rounded-full mx-4 mt-4 p-1 z-10">
        <Pressable
          onPress={() => setTab("raise")}
          android_ripple={{ color: "#e5e7eb" }}
          style={({ pressed }) => [
            {
              flex: 1,
              paddingVertical: 10,
              borderRadius: 999,
              backgroundColor: tab === "raise" ? "#fff" : "transparent",
              opacity: pressed ? 0.7 : 1,
              elevation: tab === "raise" ? 2 : 0,
            },
          ]}
        >
          <View className="flex-row justify-center items-center">
            <Ionicons name="alert-circle-outline" size={16} />
            <Text className="ml-2 font-medium">Raise Dispute</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setTab("track")}
          android_ripple={{ color: "#e5e7eb" }}
          style={({ pressed }) => [
            {
              flex: 1,
              paddingVertical: 10,
              borderRadius: 999,
              backgroundColor: tab === "track" ? "#fff" : "transparent",
              opacity: pressed ? 0.7 : 1,
              elevation: tab === "track" ? 2 : 0,
            },
          ]}
        >
          <View className="flex-row justify-center items-center">
            <Ionicons name="time-outline" size={16} />
            <Text className="ml-2 font-medium">Track Status</Text>
          </View>
        </Pressable>
      </View> */}
      <View className="flex-row bg-gray-100 rounded-full mx-4 mt-4 p-1">
        {/* Raise */}
        <Pressable onPress={() => setTab("raise")} className="flex-1">
          <View
            className={`flex-row items-center justify-center gap-2 rounded-full py-2 ${
              tab === "raise" ? "bg-white" : "bg-transparent"
            }`}
            style={{
              elevation: tab === "raise" ? 2 : 0, // Android shadow
            }}
          >
            <Ionicons
              name="alert-circle-outline"
              size={16}
              color={tab === "raise" ? "#111827" : "#9ca3af"}
            />
            <Text
              className={`font-medium ${
                tab === "raise" ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Raise Dispute
            </Text>
          </View>
        </Pressable>

        {/* Track */}
        <Pressable onPress={() => setTab("track")} className="flex-1">
          <View
            className={`flex-row items-center justify-center gap-2 rounded-full py-2 ${
              tab === "track" ? "bg-white" : "bg-transparent"
            }`}
            style={{
              elevation: tab === "track" ? 2 : 0,
            }}
          >
            <Ionicons
              name="time-outline"
              size={16}
              color={tab === "track" ? "#111827" : "#9ca3af"}
            />
            <Text
              className={`font-medium ${
                tab === "track" ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Track Status
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Page Content */}
      <View className="flex-1">
        {tab === "raise" ? <RaiseDispute /> : <TrackStatus />}
      </View>
    </View>
  );
}

/* ------------------ RAISE DISPUTE ------------------ */
function RaiseDispute() {
  return (
    <ScrollView className="px-4 pt-6">
      <Text className="text-gray-600 mb-2">Select Bill</Text>
      <TouchableOpacity className="border border-gray-300 rounded-xl px-4 py-4 flex-row justify-between mb-4">
        <Text className="text-gray-400">Choose a bill to dispute</Text>
        <ChevronDown size={18} color="#9ca3af" />
      </TouchableOpacity>

      <Text className="text-gray-600 mb-2">Dispute Reason</Text>
      <TouchableOpacity className="border border-gray-300 rounded-xl px-4 py-4 flex-row justify-between mb-4">
        <Text className="text-gray-400">Select reason for dispute</Text>
        <ChevronDown size={18} color="#9ca3af" />
      </TouchableOpacity>

      <Text className="text-gray-600 mb-2">Description</Text>
      <TextInput
        multiline
        placeholder="Please provide details about your dispute..."
        className="border border-gray-300 rounded-xl p-4 h-32 mb-4"
      />

      <Text className="text-gray-600 mb-2">
        Supporting Documents (Optional)
      </Text>
      <TouchableOpacity className="border border-dashed border-gray-300 rounded-xl py-8 items-center mb-8">
        <UploadCloud size={28} color="#6b7280" />
        <Text className="text-gray-500 mt-2">
          Tap to upload photos or documents
        </Text>
        <Text className="text-xs text-gray-400 mt-1">
          PNG, JPG, PDF up to 10MB
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-teal-500 py-4 rounded-full mb-20">
        <Text className="text-white text-center font-semibold text-lg">
          Submit Dispute
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* ------------------ TRACK STATUS ------------------ */
function TrackStatus() {
  return (
    <ScrollView className="px-4 mt-6">
      <StatusCard
        month="December 2023"
        issue="Incorrect meter reading"
        status="Under Review"
        statusColor="blue"
        date="Submitted Jan 5, 2024"
      />

      <StatusCard
        month="October 2023"
        issue="Billing error"
        status="Resolved"
        statusColor="green"
        date="Submitted Nov 2, 2023"
      />
    </ScrollView>
  );
}

function StatusCard({ month, issue, status, statusColor, date }) {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
      <View className="flex-row justify-between">
        <View>
          <Text className="font-semibold">{month}</Text>
          <Text className="text-gray-500 text-sm mt-1">{issue}</Text>
        </View>

        <View
          className={`px-3 py-1 rounded-full ${
            statusColor === "green" ? "bg-green-100" : "bg-blue-100"
          }`}
        >
          <Text
            className={`text-xs font-medium ${
              statusColor === "green" ? "text-green-600" : "text-blue-600"
            }`}
          >
            {status}
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between mt-4">
        <Text className="text-xs text-gray-500">{date}</Text>
        <Text className="text-teal-500 font-medium text-sm">View Details</Text>
      </View>
    </View>
  );
}
