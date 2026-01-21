import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Slot />
    </>
  );
}
