import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  BackHandler,
  Linking,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const isLoggedIn = false;
export default function HelpSupportScreen() {
  const router = useRouter();
  const [subjectFocus, setSubjectFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const handleBack = () => {
    if (!isLoggedIn) {
      router.replace("/");
    } else {
      router.replace("/profile");
    }
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        router.replace("/");
        return true;
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => subscription.remove(); // ✅ correct cleanup
    }, [])
  );

  const callSupport = async () => {
    const phone = "tel:+919876543210";
    const supported = await Linking.canOpenURL(phone);
    if (supported) {
      Linking.openURL(phone);
    }
  };
  const emailSupport = async () => {
    const email = "mailto:support@yourapp.com";
    const supported = await Linking.canOpenURL(email);
    if (supported) {
      Linking.openURL(email);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-6 py-4 bg-white">
        <Ionicons
          name="chevron-back"
          size={24}
          color="#111827"
          onPress={handleBack}
        />
        <Text className="text-lg font-semibold ml-3">Help & Support</Text>
      </View>

      <ScrollView className="px-4 pt-6">
        <View className="bg-gray-200 rounded-xl p-4 mb-6">
          <Text className="text-black-700 text-md">
            Facing issues or need assistance? Fill the form below and our
            support team will get back to you.
          </Text>
        </View>
        <Text className="text-gray-800 mb-2">Subject</Text>
        <TextInput
          placeholder="Enter your issue subject"
          onFocus={() => setSubjectFocus(true)}
          onBlur={() => setSubjectFocus(false)}
          className={`rounded-xl px-4 py-3 mb-4 border ${
            subjectFocus ? "border-teal-500" : "border-gray-300"
          }`}
        />
        <Text className="text-gray-800 mb-2">Message</Text>
        <TextInput
          multiline
          textAlignVertical="top"
          placeholder="Describe your issue..."
          onFocus={() => setMessageFocus(true)}
          onBlur={() => setMessageFocus(false)}
          className={`rounded-xl px-4 py-3 h-32 mb-6 border ${
            messageFocus ? "border-teal-500" : "border-gray-300"
          }`}
        />
        <View className="bg-white rounded-xl border border-gray-200 p-4 mb-6 items-center">
          <TouchableOpacity
            onPress={emailSupport}
            className="flex-row items-center mb-3"
          >
            <Ionicons name="mail-outline" size={18} color="#0d9488" />
            <Text className="ml-2 text-gray-700">support@yourapp.com</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={callSupport}
            className="flex-row items-center"
          >
            <Ionicons name="call-outline" size={18} color="#0d9488" />
            <Text className="ml-2 text-gray-700">+91 98765 43210</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="bg-teal-500 py-4 rounded-full mb-10">
          <Text className="text-white text-center font-semibold text-lg">
            Submit Request
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
