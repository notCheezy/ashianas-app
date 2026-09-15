import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";
import { theme } from "../src/theme";

export default function GiftingFlow() {
  const occasions = ["Birthday", "Anniversary", "Wedding", "Just Because"];

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(600)} style={styles.inner}>
        <Text style={styles.heading}>Give something they’ll keep.</Text>
        <Text style={styles.sub}>What is the occasion?</Text>

        <View style={styles.grid}>
          {occasions.map((occ) => (
            <Pressable
              key={occ}
              style={styles.pill}
              onPress={() => router.replace("/")}
            >
              <Text style={styles.pillText}>{occ}</Text>
            </Pressable>
          ))}
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: 24,
    justifyContent: "center",
  },
  inner: { alignItems: "center" },
  heading: {
    fontFamily: theme.typography.family.display,
    fontSize: 32,
    color: theme.colors.primaryInk,
    textAlign: "center",
    marginBottom: 16,
  },
  sub: {
    fontFamily: theme.typography.family.body,
    fontSize: 16,
    color: theme.colors.secondaryInk,
    fontStyle: "italic",
    marginBottom: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  pill: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 0,
  },
  pillText: {
    fontFamily: theme.typography.family.sans,
    fontSize: 11,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: theme.colors.primaryInk,
  },
});
