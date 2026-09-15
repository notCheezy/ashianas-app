import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  CormorantGaramond_400Regular,
  CormorantGaramond_500Medium,
} from "@expo-google-fonts/cormorant-garamond";
import { Lora_400Regular } from "@expo-google-fonts/lora";
import { View } from "react-native";
import { theme } from "../src/theme";

export default function RootLayout() {
  const [loaded] = useFonts({
    CormorantGaramond_400Regular,
    CormorantGaramond_500Medium,
    Lora_400Regular,
  });

  if (!loaded)
    return (
      <View style={{ flex: 1, backgroundColor: theme.colors.background }} />
    );

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.surface },
        headerTintColor: theme.colors.primaryInk,
        headerTitleStyle: {
          fontFamily: theme.typography.family.displayMedium,
          fontSize: 20,
        },
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="product/[id]" options={{ title: "" }} />
      <Stack.Screen name="cart" options={{ title: "Your Bag" }} />
      <Stack.Screen name="gifting" options={{ title: "Concierge" }} />
      <Stack.Screen
        name="login"
        options={{ title: "", presentation: "modal" }}
      />
      <Stack.Screen name="tracking" options={{ title: "Tracking" }} />
    </Stack>
  );
}
