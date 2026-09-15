import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInUp } from "react-native-reanimated";
import { CATEGORIES } from "../../src/data";
import { theme } from "../../src/theme";

export default function Categories() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Collections</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {CATEGORIES.map((category, index) => (
          <Animated.View
            key={category.slug}
            entering={FadeInUp.delay(index * 150).duration(500)}
          >
            <Pressable style={styles.card}>
              <Image source={{ uri: category.image }} style={styles.image} />
              <View style={styles.overlay}>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.exploreText}>EXPLORE</Text>
              </View>
            </Pressable>
          </Animated.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  title: {
    fontFamily: theme.typography.family.display,
    fontSize: 32,
    color: theme.colors.primaryInk,
  },
  scroll: { padding: 16, gap: 16, paddingBottom: 100 },
  card: {
    height: 280,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  image: { width: "100%", height: "100%", opacity: 0.9 },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: "rgba(255,253,249,0.85)",
  },
  categoryName: {
    fontFamily: theme.typography.family.display,
    fontSize: 24,
    color: theme.colors.primaryInk,
  },
  exploreText: {
    fontFamily: theme.typography.family.sans,
    fontSize: 10,
    letterSpacing: 2,
    color: theme.colors.secondaryInk,
    marginTop: 8,
  },
});
