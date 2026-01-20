import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function BillingScreen() {
  const [activeTab, setActiveTab] = useState("all");

  const bills = [
    {
      id: 1,
      month: "January",
      year: "2024",
      status: "Pending",
      amount: "$127.50",
      due: "Due: Jan 15, 2024",
    },
    {
      id: 2,
      month: "December",
      year: "2023",
      status: "Paid",
      amount: "$142.30",
      due: "Due: Dec 15, 2023",
    },
    {
      id: 3,
      month: "November",
      year: "2023",
      status: "Paid",
      amount: "$98.75",
      due: "Due: Nov 15, 2023",
    },
  ];

  const filteredBills =
    activeTab === "all"
      ? bills
      : activeTab === "paid"
        ? bills.filter((b) => b.status === "Paid")
        : bills.filter((b) => b.status === "Pending");

  return (
    <View className="flex-1 bg-gray-50 mt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Outstanding Card */}
        <View className="px-6 mt-4">
          <View className="bg-blue-500 rounded-3xl p-6">
            <Text className="text-white text-sm">Outstanding Balance</Text>
            <Text className="text-white text-3xl font-bold mt-2">$127.50</Text>

            <TouchableOpacity
              className="mt-4 self-start border border-white/40 rounded-full px-6 py-2"
              onPress={() => router.push("/billing/makePayment")}
            >
              <Text className="text-white font-medium">Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row px-6 mt-6 gap-3">
          <ActionButton
            icon="alert-circle-outline"
            label="Raise Dispute"
            iconColor="#ef4444"
            onPress={() => router.push("/billing/billDispute")}
          />
          <ActionButton
            icon="time-outline"
            label="Payment History"
            iconColor="#10b981"
            onPress={() => router.push("/billing/paymentHistory")}
          />
        </View>

        {/* Tabs */}
        <View className="flex-row bg-white mx-6 mt-6 rounded-full p-1 border border-gray-200">
          <TabButton
            label="All Bills"
            active={activeTab === "all"}
            onPress={() => setActiveTab("all")}
          />
          <TabButton
            label="Paid Bills"
            active={activeTab === "paid"}
            onPress={() => setActiveTab("paid")}
          />
          <TabButton
            label="Unpaid Bills"
            active={activeTab === "unpaid"}
            onPress={() => setActiveTab("unpaid")}
          />
        </View>

        {/* Bills List */}
        <View className="px-6 mt-6 mb-20 space-y-4">
          {filteredBills.map((bill) => (
            <BillItem
              key={bill.id}
              month={bill.month}
              year={bill.year}
              status={bill.status}
              amount={bill.amount}
              due={bill.due}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

/* ---------- Components ---------- */

function ActionButton({ icon, label, iconColor, onPress }) {
  return (
    <TouchableOpacity
      className="flex-1 bg-white rounded-2xl p-4 flex-row items-center border border-gray-200"
      onPress={onPress}
      style={{ elevation: 2 }}
    >
      <Ionicons name={icon} size={22} color={iconColor} />
      <Text className="ml-3 font-medium">{label}</Text>
    </TouchableOpacity>
  );
}

function TabButton({ label, active, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 items-center py-2 rounded-full ${
        active ? "bg-blue-500" : ""
      }`}
      style={active ? { elevation: 2 } : {}}
    >
      <Text
        className={`text-sm ${
          active ? "text-white font-semibold" : "text-gray-500"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function BillItem({ month, year, status, amount, due }) {
  const isPaid = status === "Paid";

  return (
    <TouchableOpacity
      className="bg-white rounded-2xl p-4 flex-row justify-between items-center border border-gray-200"
      style={{ elevation: 2 }}
    >
      <View className="flex-row items-center">
        <View className="bg-gray-100 w-12 h-12 rounded-xl items-center justify-center mr-4">
          <Ionicons name="document-text-outline" size={22} />
        </View>

        <View>
          <Text className="font-semibold">
            {month} <Text className="text-gray-500">{year}</Text>
          </Text>

          <View className="flex-row items-center mt-1">
            <View
              className={`px-2 py-[2px] rounded-full mr-2 ${
                isPaid ? "bg-green-100" : "bg-orange-100"
              }`}
            >
              <Text
                className={`text-xs font-medium ${
                  isPaid ? "text-green-600" : "text-orange-600"
                }`}
              >
                {status}
              </Text>
            </View>
            <Text className="text-xs text-gray-500">{due}</Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-center">
        <Text className="font-semibold mr-2">{amount}</Text>
        <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
      </View>
    </TouchableOpacity>
  );
}
