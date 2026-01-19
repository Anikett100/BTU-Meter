import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PersonalDetails() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-6 py-4 border-b border-gray-100">
        <Ionicons name="chevron-back" size={24} onPress={() => router.back()} />
        <Text className="text-lg font-semibold ml-3">Personal Details</Text>
      </View>

      <ScrollView className="px-6 pt-6">
        <Input label="Full Name" value="John Doe" />
        <Input label="Account ID" value="123456789" editable={false} />
        <Input label="Phone Number" value="+1 234 567 890" />
        <Input label="Email Address" value="john@email.com" />
      </ScrollView>
    </SafeAreaView>
  );
}

function Input({ label, value, editable = true }) {
  return (
    <View className="mb-5">
      <Text className="text-gray-600 mb-2">{label}</Text>
      <TextInput
        defaultValue={value}
        editable={editable}
        className={`border rounded-xl px-4 py-3 ${
          editable ? "border-gray-300" : "bg-gray-100 border-gray-200"
        }`}
      />
    </View>
  );
}
