// import { Stack } from "expo-router";

// export default function BillingLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen
//         name="billDispute"
//         options={{
//           presentation: "card",
//         }}
//       />
//       <Stack.Screen
//         name="trackStatus"
//         options={{
//           presentation: "card",
//         }}
//       />
//     </Stack>
//   );
// }

import { Stack } from "expo-router";

export default function BillingLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Billing" }} />
      <Stack.Screen name="billDispute" options={{ title: "Bill Dispute" }} />
      <Stack.Screen name="makePayment" options={{ title: "" }} />
    </Stack>
  );
}
