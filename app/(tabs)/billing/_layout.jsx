import { Stack } from "expo-router";
export default function BillingLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="billDispute" options={{ title: "Bill Dispute" }} />
      <Stack.Screen name="makePayment" options={{ title: "Payment" }} />
      <Stack.Screen
        name="paymentHistory"
        options={{ title: "paymentHistory" }}
      />
    </Stack>
  );
}
