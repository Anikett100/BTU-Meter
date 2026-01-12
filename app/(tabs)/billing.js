// import { Ionicons } from "@expo/vector-icons";
// import { ScrollView, Text, TouchableOpacity, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Billing() {
//   return (
//     <SafeAreaView className="flex-1 bg-gray-100">
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View className="flex-row items-center px-6 py-4 bg-white">
//           <Ionicons name="chevron-back" size={24} color="#111827" />
//           <Text className="text-lg font-semibold ml-3">Billing</Text>
//         </View>

//         {/* Outstanding Balance Card */}
//         <View className="px-6 mt-6">
//           <View className="bg-teal-600 rounded-2xl p-6">
//             <Text className="text-white text-sm mb-2">Outstanding Balance</Text>

//             <Text className="text-white text-3xl font-bold mb-4">$127.50</Text>

//             <TouchableOpacity
//               activeOpacity={0.85}
//               className="border border-white/40 self-start px-5 py-2 rounded-full"
//             >
//               <Text className="text-white font-medium">Pay Now</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Actions */}
//         <View className="px-6 mt-6 flex-row justify-between">
//           <ActionCard
//             icon="alert-circle-outline"
//             color="#ef4444"
//             label="Raise Dispute"
//           />
//           <ActionCard
//             icon="time-outline"
//             color="#14b8a6"
//             label="Payment History"
//           />
//         </View>

//         {/* Filter Tabs */}
//         <View className="px-6 mt-6">
//           <View className="bg-gray-200 rounded-full flex-row p-1">
//             <FilterTab active label="All Bills" />
//             <FilterTab label="Regular" />
//             <FilterTab label="Deposit" />
//           </View>
//         </View>

//         {/* Bills List */}
//         <View className="px-6 mt-6 mb-10">
//           <View className="bg-white rounded-2xl p-5 shadow-sm">
//             <View className="flex-row justify-between items-center">
//               <View>
//                 <Text className="font-semibold text-gray-900">January</Text>
//                 <Text className="text-orange-500 text-sm mt-1">● Pending</Text>
//               </View>

//               <Text className="font-semibold text-gray-900">$127.50</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// /* ---------------- Components ---------------- */

// function ActionCard({ icon, label, color }) {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.8}
//       className="bg-white w-[48%] rounded-2xl p-4 flex-row items-center shadow-sm"
//     >
//       <View
//         className="w-10 h-10 rounded-full items-center justify-center mr-3"
//         style={{ backgroundColor: `${color}20` }}
//       >
//         <Ionicons name={icon} size={20} color={color} />
//       </View>

//       <Text className="text-gray-900 font-medium">{label}</Text>
//     </TouchableOpacity>
//   );
// }

// function FilterTab({ label, active }) {
//   return (
//     <View
//       className={`flex-1 py-2 rounded-full items-center ${
//         active ? "bg-white" : ""
//       }`}
//     >
//       <Text
//         className={`text-sm ${
//           active ? "font-semibold text-gray-900" : "text-gray-500"
//         }`}
//       >
//         {label}
//       </Text>
//     </View>
//   );
// }

import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function BillingScreen() {
  return (
    <View className="flex-1 bg-gray-50 mt-16">
      {/* Header */}
      {/* <View className="flex-row items-center px-6 pt-14 pb-4 bg-white">
        <Ionicons name="arrow-back" size={22} />
        <Text className="text-lg font-semibold ml-4">Billing</Text>
      </View> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Outstanding Balance Card */}
        <View className="px-6 mt-4">
          <View className="bg-blue-500 rounded-3xl p-6">
            <Text className="text-white text-sm">Outstanding Balance</Text>
            <Text className="text-white text-3xl font-bold mt-2">$127.50</Text>

            <TouchableOpacity className="mt-4 self-start border border-white/40 rounded-full px-6 py-2">
              <Text className="text-white font-medium">Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row px-6 mt-6 space-x-4 gap-2">
          <ActionButton
            icon="alert-circle-outline"
            label="Raise Dispute"
            iconColor="#ef4444"
          />
          <ActionButton
            icon="time-outline"
            label="Payment History"
            iconColor="#10b981"
          />
        </View>

        {/* Tabs */}
        <View className="flex-row justify-between bg-white mx-6 mt-6 rounded-full p-1">
          <TabButton label="All Bills" active />
          <TabButton label="Regular" />
          <TabButton label="Deposit" />
        </View>

        {/* Bills List */}
        <View className="px-6 mt-6 mb-20 space-y-4">
          <BillItem
            month="January"
            year="2024"
            status="Pending"
            statusColor="orange"
            amount="$127.50"
            due="Due: Jan 15, 2024"
          />

          <BillItem
            month="December"
            year="2023"
            status="Paid"
            statusColor="green"
            amount="$142.30"
            due="Due: Dec 15, 2023"
          />

          <BillItem
            month="November"
            year="2023"
            status="Paid"
            statusColor="green"
            amount="$98.75"
            due="Due: Nov 15, 2023"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
    </View>
  );
}

/* ---------------- Components ---------------- */

function ActionButton({ icon, label, iconColor }) {
  return (
    <TouchableOpacity className="flex-1 bg-white rounded-2xl p-4 flex-row items-center shadow-sm">
      <Ionicons name={icon} size={22} color={iconColor} />
      <Text className="ml-3 font-medium">{label}</Text>
    </TouchableOpacity>
  );
}

function TabButton({ label, active }) {
  return (
    <TouchableOpacity
      className={`flex-1 items-center py-2 rounded-full ${
        active ? "bg-white shadow" : ""
      }`}
    >
      <Text
        className={`text-sm ${
          active ? "font-semibold text-black" : "text-gray-500"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function BillItem({ month, year, status, statusColor, amount, due }) {
  return (
    <TouchableOpacity className="bg-white rounded-2xl p-4 flex-row justify-between items-center shadow-sm">
      <View className="flex-row items-center">
        <View className="bg-gray-100 w-12 h-12 rounded-xl items-center justify-center mr-4">
          <Ionicons name="document-text-outline" size={22} />
        </View>

        <View>
          <Text className="font-semibold">
            {month} <Text className="text-gray-500 font-normal">{year}</Text>
          </Text>

          <View className="flex-row items-center mt-1">
            <View
              className={`px-2 py-[2px] rounded-full mr-2 ${
                statusColor === "green" ? "bg-green-100" : "bg-orange-100"
              }`}
            >
              <Text
                className={`text-xs font-medium ${
                  statusColor === "green" ? "text-green-600" : "text-orange-600"
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
