import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FAQ_DATA = [
  {
    question: "How do I request a move-in?",
    answer:
      "You can request a move-in from the Profile section under Move In / Out. Fill in the required details and submit the request.",
  },
  {
    question: "How long does approval take?",
    answer:
      "Approval usually takes 24–48 hours. You will be notified once the request is reviewed.",
  },
  {
    question: "Can I cancel my move-out request?",
    answer:
      "Yes, you can cancel the request before it gets approved by contacting support.",
  },
  {
    question: "How can I contact support?",
    answer: "Go to Profile → Help & Support to reach us via call or email.",
  },
];

export default function FAQScreen() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row items-center px-6 py-4 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold ml-3">FAQ</Text>
      </View>
      <ScrollView className="px-5 pt-6">
        {FAQ_DATA.map((item, index) => (
          <View
            key={index}
            className="bg-white rounded-2xl border border-gray-200 mb-4 overflow-hidden"
          >
            <TouchableOpacity
              onPress={() => toggleFAQ(index)}
              className="flex-row justify-between items-center p-4"
            >
              <Text className="text-gray-900 font-medium flex-1 pr-2">
                {item.question}
              </Text>
              <Ionicons
                name={openIndex === index ? "chevron-up" : "chevron-down"}
                size={20}
                color="#6b7280"
              />
            </TouchableOpacity>

            {openIndex === index && (
              <View className="px-4 pb-4">
                <Text className="text-gray-600 leading-6">{item.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
