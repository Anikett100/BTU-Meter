import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function PaymentHistoryScreen() {
  const payments = [
    {
      id: 1,
      date: "Jan 15, 2024",
      amount: "$127.50",
      status: "Success",
      method: "Card",
      bank: "HDFC Bank",
      reference: "TXN123456",
    },
    {
      id: 2,
      date: "Dec 15, 2023",
      amount: "$142.30",
      status: "Failed",
      method: "UPI",
      bank: "Google Pay",
      reference: "TXN654321",
    },
    {
      id: 3,
      date: "Nov 15, 2023",
      amount: "$98.75",
      status: "Success",
      method: "NetBanking",
      bank: "SBI",
      reference: "TXN789012",
    },
  ];

  return (
    <View className="flex-1 bg-gray-50 mt-16">
      {/* Header */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 space-y-4 mb-20">
          {payments.map((payment) => (
            <PaymentCard key={payment.id} payment={payment} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

/* ---------- Components ---------- */

function PaymentCard({ payment }) {
  const isSuccess = payment.status === "Success";

  return (
    <View
      className="bg-white rounded-2xl p-4 border border-gray-200"
      style={{ elevation: 2 }}
    >
      {/* Top Row */}
      <View className="flex-row justify-between items-center">
        <Text className="font-semibold text-gray-900">{payment.amount}</Text>

        <View
          className={`px-3 py-1 rounded-full ${
            isSuccess ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <Text
            className={`text-xs font-medium ${
              isSuccess ? "text-green-600" : "text-red-600"
            }`}
          >
            {payment.status}
          </Text>
        </View>
      </View>

      {/* Date */}
      <Text className="text-gray-500 text-sm mt-1">{payment.date}</Text>

      {/* Divider */}
      <View className="h-[1px] bg-gray-200 my-3" />

      {/* Payment Details */}
      <View className="flex-row justify-between">
        <View>
          <Text className="text-gray-500 text-xs">Payment Method</Text>
          <Text className="font-medium text-gray-900">{payment.method}</Text>
        </View>

        <View>
          <Text className="text-gray-500 text-xs">Bank / App</Text>
          <Text className="font-medium text-gray-900">{payment.bank}</Text>
        </View>
      </View>

      {/* Reference */}
      <View className="mt-3">
        <Text className="text-gray-500 text-xs">Reference ID</Text>
        <Text className="text-gray-700 text-sm">{payment.reference}</Text>
      </View>

      {/* Failed Info */}
      {!isSuccess && (
        <View className="flex-row items-center mt-3">
          <Ionicons name="alert-circle-outline" size={16} color="#ef4444" />
          <Text className="text-red-600 text-xs ml-2">
            Payment failed. Amount will be refunded if debited.
          </Text>
        </View>
      )}
    </View>
  );
}
