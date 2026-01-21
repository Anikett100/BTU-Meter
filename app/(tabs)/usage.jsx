import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

export default function Usage() {
  const [chartType, setChartType] = useState("area"); // area | bar

  const chartData = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        data: [200, 225, 210, 180, 245, 250],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: () => "#2196F3",
    labelColor: () => "#6b7280",
    fillShadowGradient: "#2196F3",
    fillShadowGradientOpacity: 0.6,
    propsForBackgroundLines: {
      strokeDasharray: "4",
      stroke: "#e5e7eb",
    },
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 mt-6">
          <View className="bg-white rounded-2xl p-4 shadow-sm">
            {/* Header */}
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center">
                <Ionicons name="stats-chart" size={18} color="#2196F3" />
                <Text className="ml-2 font-semibold text-gray-900">
                  Monthly Usage
                </Text>
              </View>

              <View className="flex-row bg-gray-100 rounded-lg p-1">
                <TouchableOpacity
                  onPress={() => setChartType("area")}
                  className={`px-4 py-1 rounded-lg ${
                    chartType === "area"
                      ? "bg-white border border-gray-200"
                      : ""
                  }`}
                  style={chartType === "area" ? { elevation: 3 } : {}}
                >
                  <Text
                    className={`text-sm ${
                      chartType === "area"
                        ? "text-gray-900 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    Area
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setChartType("bar")}
                  className={`px-4 py-1 rounded-lg ${
                    chartType === "bar" ? "bg-white border border-gray-200" : ""
                  }`}
                  style={chartType === "bar" ? { elevation: 3 } : {}}
                >
                  <Text
                    className={`text-sm ${
                      chartType === "bar"
                        ? "text-gray-900 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    Bar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Chart */}
            {chartType === "area" ? (
              <LineChart
                data={chartData}
                width={screenWidth - 48}
                height={220}
                withDots={false}
                withInnerLines={false}
                chartConfig={chartConfig}
                bezier
                style={{ borderRadius: 16, marginTop: 10 }}
              />
            ) : (
              <BarChart
                data={chartData}
                width={screenWidth - 48}
                height={220}
                fromZero
                chartConfig={chartConfig}
                style={{ borderRadius: 16, marginTop: 10 }}
              />
            )}
          </View>
        </View>

        {/* History */}
        <View className="px-6 mt-8 mb-10">
          <View className="flex-row items-center mb-3">
            <Ionicons name="calendar-outline" size={18} color="#2196F3" />
            <Text className="ml-2 font-semibold text-gray-900">
              Meter Reading History
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-5 shadow-sm">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="font-semibold text-gray-900">
                  Jan 14, 2024
                </Text>
                <Text className="text-gray-500 text-sm mt-1">
                  Usage: 245 kWh
                </Text>
              </View>

              <View className="items-end">
                <Text className="text-xl font-bold text-gray-900">45,475</Text>
                <Text className="text-gray-500 text-xs">Meter Reading</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
