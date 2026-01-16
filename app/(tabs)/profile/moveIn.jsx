// import { Ionicons } from "@expo/vector-icons";
// import { ScrollView, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function MoveInStatus() {
//   return (
//     <SafeAreaView className="flex-1 bg-gray-50">
//       {/* Header */}
//       <View className="flex-row items-center px-6 py-4 bg-white">
//         <Ionicons name="chevron-back" size={24} color="#111827" />
//         <Text className="text-lg font-semibold ml-3">Move-In Status</Text>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Top Cards */}
//         <View className="flex-row px-6 mt-6 gap-4">
//           {/* Initial Reading */}
//           <View className="flex-1 bg-white rounded-2xl p-4 shadow-sm">
//             <View className="w-10 h-10 bg-teal-100 rounded-full items-center justify-center mb-3">
//               <Ionicons name="flash-outline" size={20} color="#14b8a6" />
//             </View>
//             <Text className="text-gray-500 text-sm">Initial Reading</Text>
//             <Text className="text-xl font-bold text-gray-900 mt-1">44,375</Text>
//           </View>

//           {/* Security Deposit */}
//           <View className="flex-1 bg-white rounded-2xl p-4 shadow-sm">
//             <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mb-3">
//               <Ionicons name="cash-outline" size={20} color="#22c55e" />
//             </View>
//             <Text className="text-gray-500 text-sm">Security Deposit</Text>
//             <Text className="text-xl font-bold text-gray-900 mt-1">
//               $200.00
//             </Text>
//             <Text className="text-green-600 text-xs mt-1 font-medium">
//               Paid
//             </Text>
//           </View>
//         </View>

//         {/* Service Details */}
//         <View className="px-6 mt-8 mb-10">
//           <View className="bg-white rounded-2xl p-5 shadow-sm">
//             <Text className="text-base font-semibold text-gray-900 mb-4">
//               Service Details
//             </Text>

//             <DetailRow label="Move-In Date" value="October 1, 2023" />
//             <Divider />
//             <DetailRow label="Connection Date" value="October 1, 2023" />
//             <Divider />
//             <DetailRow
//               label="Service Status"
//               value="Active"
//               valueColor="text-green-600"
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// /* ---------------- Components ---------------- */

// function DetailRow({ label, value, valueColor = "text-gray-900" }) {
//   return (
//     <View className="flex-row justify-between py-3">
//       <Text className="text-gray-500">{label}</Text>
//       <Text className={`font-medium ${valueColor}`}>{value}</Text>
//     </View>
//   );
// }

// function Divider() {
//   return <View className="h-[1px] bg-gray-200" />;
// }

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MoveInStatus() {
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
        <Text className="text-lg font-semibold ml-3">Move-In Status</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Move-In Complete Status */}
        <View className="px-6 mt-6">
          <View className="bg-green-50 border border-green-200 rounded-2xl p-4 flex-row items-center">
            <View className="w-12 h-12 bg-green-200 rounded-full items-center justify-center mr-4">
              <Ionicons name="checkmark" size={24} color="#16a34a" />
            </View>
            <View>
              <Text className="text-green-900 font-semibold text-base">
                Move-In Complete
              </Text>
              <Text className="text-green-700 text-sm">
                Your service is active
              </Text>
            </View>
          </View>
        </View>

        {/* Move-In Timeline */}
        <View className="px-6 mt-8">
          <View className="bg-white rounded-2xl p-5 shadow-sm">
            <Text className="text-base font-semibold text-gray-900 mb-4">
              Move-In Timeline
            </Text>

            <TimelineItem title="Move-In Request" date="Sep 25, 2023" />
            <TimelineItem title="Deposit Payment" date="Sep 27, 2023" />
            <TimelineItem title="Meter Reading" date="Oct 1, 2023" />
          </View>
        </View>

        {/* Top Cards */}
        <View className="flex-row px-6 mt-6 gap-4">
          {/* Initial Reading */}
          <View className="flex-1 bg-white rounded-2xl p-4 shadow-sm">
            <View className="w-10 h-10 bg-teal-100 rounded-full items-center justify-center mb-3">
              <Ionicons name="flash-outline" size={20} color="#14b8a6" />
            </View>
            <Text className="text-gray-500 text-sm">Initial Reading</Text>
            <Text className="text-xl font-bold text-gray-900 mt-1">44,375</Text>
          </View>

          {/* Security Deposit */}
          <View className="flex-1 bg-white rounded-2xl p-4 shadow-sm">
            <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mb-3">
              <Ionicons name="cash-outline" size={20} color="#22c55e" />
            </View>
            <Text className="text-gray-500 text-sm">Security Deposit</Text>
            <Text className="text-xl font-bold text-gray-900 mt-1">
              $200.00
            </Text>
            <Text className="text-green-600 text-xs mt-1 font-medium">
              Paid
            </Text>
          </View>
        </View>

        {/* Service Details */}
        <View className="px-6 mt-8 mb-10">
          <View className="bg-white rounded-2xl p-5 shadow-sm">
            <Text className="text-base font-semibold text-gray-900 mb-4">
              Service Details
            </Text>

            <DetailRow label="Move-In Date" value="October 1, 2023" />
            <Divider />
            <DetailRow label="Connection Date" value="October 1, 2023" />
            <Divider />
            <DetailRow
              label="Service Status"
              value="Active"
              valueColor="text-green-600"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- Components ---------------- */

function TimelineItem({ title, date }) {
  return (
    <View className="flex-row mb-5">
      <View className="items-center mr-4">
        <View className="w-7 h-7 bg-green-500 rounded-full items-center justify-center">
          <Ionicons name="checkmark" size={16} color="white" />
        </View>
        <View className="w-[2px] flex-1 bg-green-500 mt-1" />
      </View>

      <View>
        <Text className="font-medium text-gray-900">{title}</Text>
        <Text className="text-gray-500 text-sm mt-1">{date}</Text>
      </View>
    </View>
  );
}

function DetailRow({ label, value, valueColor = "text-gray-900" }) {
  return (
    <View className="flex-row justify-between py-3">
      <Text className="text-gray-500">{label}</Text>
      <Text className={`font-medium ${valueColor}`}>{value}</Text>
    </View>
  );
}

function Divider() {
  return <View className="h-[1px] bg-gray-200" />;
}
