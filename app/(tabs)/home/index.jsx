import { useRouter } from "expo-router";
import {
  AlertCircle,
  BarChart3,
  Bell,
  Droplet,
  FileText,
  HelpCircle,
  TrendingUp,
} from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  // const CURRENCY = "د.إ";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 5 }}
      >
        <View className="px-6 mt-6">
          <View className="flex-row items-center justify-between">
            {/* Greeting */}
            <View>
              <Text className="text-2xl font-bold text-gray-900">
                Hello, John! 👋
              </Text>
              <Text className="text-gray-500 mt-1">
                Here's your utility overview for January
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => router.push("/home/notifications")}
              className="relative"
            >
              <Bell size={22} color="#111827" />
              <View className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full items-center justify-center">
                <Text className="text-white text-xs font-bold">4</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-6 mt-6">
          <View className="bg-[#3f6289] rounded-2xl p-6">
            <View className="w-10 h-10 bg-white/20 rounded-full items-center justify-center mb-4">
              <Droplet size={20} color="white" />
            </View>

            <Text className="text-white text-sm">Current Month</Text>
            <Text className="text-white text-3xl font-bold mt-1">245 kWh</Text>
            <Text className="text-white/80 text-sm mt-1">
              +12% vs last month
            </Text>
          </View>
        </View>

        <View className="flex-row px-6 mt-6  space-x-4 gap-4">
          <View className="flex-1 bg-white rounded-2xl p-4 border border-blue-300 shadow-sm">
            <View className="w-9 h-9 bg-blue-100 rounded-full items-center justify-center mb-3">
              {/* <DollarSign size={18} color="#2196F3" /> */}
              <Image
                source={{
                  uri: "https://aiadvocate.s3.ap-south-1.amazonaws.com/DirhamIcon.png",
                }}
                style={{ width: 18, height: 18, tintColor: "#2196F3" }}
                resizeMode="contain"
              />
            </View>
            <Text className="text-gray-500 text-sm">Last Bill</Text>

            <View className="flex-row items-center mt-1">
              <Image
                source={{
                  uri: "https://aiadvocate.s3.ap-south-1.amazonaws.com/DirhamIcon.png",
                }}
                style={{
                  width: 20, // tweak this
                  height: 22, // tweak this to match text-xl
                  marginRight: 0, // tiny spacing
                  transform: [{ scale: 1.15 }],
                }}
                resizeMode="contain"
              />
              <Text className="text-xl font-bold text-gray-900">127.50</Text>
            </View>

            <Text className="text-gray-400 text-xs mt-1">
              Due: Jan 15, 2024
            </Text>
          </View>

          <View className="flex-1 bg-white rounded-2xl p-4 border border-blue-300 shadow-sm">
            <View className="w-9 h-9 bg-blue-100 rounded-full items-center justify-center mb-3">
              <AlertCircle size={18} color="#2196F3" />
            </View>

            <Text className="text-gray-500 text-sm">Outstanding</Text>
            <View className="flex-row items-center mt-1">
              <Image
                source={{
                  uri: "https://aiadvocate.s3.ap-south-1.amazonaws.com/DirhamIcon.png",
                }}
                style={{
                  width: 20, // tweak this
                  height: 22, // tweak this to match text-xl
                  marginRight: 0, // tiny spacing
                  transform: [{ scale: 1.15 }],
                }}
                resizeMode="contain"
              />
              <Text className="text-xl font-bold text-gray-900">127.50</Text>
            </View>
          </View>
        </View>

        <View className="px-6 mt-6">
          <View className="border border-blue-300 rounded-2xl p-5">
            <View className="bg-blue-100 w-10 h-10 rounded-full items-center justify-center mb-3">
              <TrendingUp size={18} color="#2196F3" />
            </View>

            <Text className="text-gray-500 text-sm">Avg. Daily Usage</Text>
            <Text className="text-2xl font-bold text-gray-900 mt-1">
              8.2 kWh
            </Text>
            <Text className="text-gray-400 text-sm mt-1">Below average</Text>
          </View>
        </View>
        {/* Quick Actions (NEW) */}
        <View className="px-6 mt-8">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </Text>

          <View className="flex-row flex-wrap justify-between">
            <ActionCard
              // icon={<DollarSign size={20} color="#2196F3" />}
              icon={
                <Image
                  source={{
                    uri: "https://aiadvocate.s3.ap-south-1.amazonaws.com/DirhamIcon.png",
                  }}
                  style={{ width: 20, height: 20, tintColor: "#2196F3" }}
                  resizeMode="contain"
                />
              }
              label="Pay Bill"
              onPress={() => router.push("/billing/makePayment")}
            />
            <ActionCard
              icon={<BarChart3 size={20} color="#2196F3" />}
              label="View Usage"
              onPress={() => router.push("/usage")}
            />
            <ActionCard
              icon={<FileText size={20} color="#2196F3" />}
              label="My Bills"
              onPress={() => router.push("/billing")}
            />
            <ActionCard
              icon={<HelpCircle size={20} color="#2196F3" />}
              label="Get Help"
              onPress={() => router.push("/profile/help&support")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ActionCard({ icon, label, onPress }) {
  return (
    <TouchableOpacity
      className="w-[48%] bg-white rounded-2xl p-4 mb-4 shadow-sm"
      onPress={onPress}
    >
      <View className="bg-blue-100 w-10 h-10 rounded-full items-center justify-center mb-2">
        {icon}
      </View>
      <Text className="text-sm font-medium text-gray-900">{label}</Text>
    </TouchableOpacity>
  );
}
