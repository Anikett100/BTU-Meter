import { Dimensions, Image, View } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function AuthCard({ children }) {
  return (
    <View
      style={{
        height: SCREEN_HEIGHT * 0.7,
        paddingBottom: SCREEN_HEIGHT * 0.32,
      }}
      className="bg-[#0f4c5c] rounded-t-[32px] px-6"
    >
      {/* LOGO — SAME POSITION AS LOGIN */}
      <View className="items-center pt-10 pb-6">
        <Image
          source={require("../assets/images/Logo.jpeg")}
          resizeMode="contain"
          className="w-48 h-20"
        />
      </View>

      {/* FORM CONTENT — SAME START POINT */}
      <View>{children}</View>

      {/* SKYLINE — FIXED AT BOTTOM */}
      <Image
        source={require("../assets/images/burj.png")}
        resizeMode="contain"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: SCREEN_HEIGHT * 0.32,
        }}
      />
    </View>
  );
}
