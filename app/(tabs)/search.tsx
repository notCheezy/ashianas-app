import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Search as SearchIcon } from "lucide-react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { CATALOGUE } from "../../src/data";
import { theme } from "../../src/theme";

export default function Search() {
  const [query, setQuery] = useState("");

  const results =
    query.length > 1
      ? CATALOGUE.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.searchHeader}>
        <SearchIcon
          size={20}
          color={theme.colors.secondaryInk}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search jewellery, gifts, or collections..."
          placeholderTextColor={theme.colors.secondaryInk}
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
      </View>

      <ScrollView contentContainerStyle={styles.results}>
        {query.length > 1 && results.length === 0 && (
          <Text style={styles.emptyText}>Nothing matched "{query}".</Text>
        )}

        {results.map((item, index) => (
          <Animated.View key={item.id} entering={FadeIn.delay(index * 50)}>
            <Pressable
              style={styles.resultItem}
              onPress={() => router.push(`/product/${item.id}`)}
            >
              <Image source={{ uri: item.image }} style={styles.resultImage} />
              <View style={styles.resultInfo}>
                <Text style={styles.resultCategory}>
                  {item.category.toUpperCase()}
                </Text>
                <Text style={styles.resultName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.resultPrice}>
                  ₹{item.price.toLocaleString("en-IN")}
                </Text>
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
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },
  icon: { marginRight: 12 },
  input: {
    flex: 1,
    fontFamily: theme.typography.family.body,
    fontSize: 16,
    color: theme.colors.primaryInk,
    height: 40,
  },
  results: { padding: 16, paddingBottom: 100 },
  emptyText: {
    fontFamily: theme.typography.family.body,
    fontSize: 16,
    color: theme.colors.secondaryInk,
    textAlign: "center",
    marginTop: 40,
  },
  resultItem: {
    flexDirection: "row",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    alignItems: "center",
  },
  resultImage: { width: 60, height: 60, backgroundColor: theme.colors.surface },
  resultInfo: { flex: 1, marginLeft: 16 },
  resultCategory: {
    fontFamily: theme.typography.family.sans,
    fontSize: 9,
    letterSpacing: 1,
    color: theme.colors.secondaryInk,
    marginBottom: 4,
  },
  resultName: {
    fontFamily: theme.typography.family.body,
    fontSize: 14,
    color: theme.colors.primaryInk,
  },
  resultPrice: {
    fontFamily: theme.typography.family.displayMedium,
    fontSize: 16,
    color: theme.colors.primaryInk,
    marginTop: 4,
  },
});
