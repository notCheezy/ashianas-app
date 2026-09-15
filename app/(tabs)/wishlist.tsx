import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Trash2 } from "lucide-react-native";
import { useStore } from "../../src/store";
import { CATALOGUE } from "../../src/data";
import { theme } from "../../src/theme";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useStore();
  const savedItems = CATALOGUE.filter((p) => wishlist.includes(p.id));

  if (wishlist.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Nothing saved yet.</Text>
        <Text style={styles.sub}>Some things are worth waiting for.</Text>
        <Pressable style={styles.btn} onPress={() => router.push("/")}>
          <Text style={styles.btnText}>EXPLORE JEWELLERY</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wishlist</Text>
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        {savedItems.map((item) => (
          <View key={item.id} style={styles.item}>
            <Pressable onPress={() => router.push(`/product/${item.id}`)}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </Pressable>
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>
                ₹{item.price.toLocaleString("en-IN")}
              </Text>
            </View>
            <Pressable
              onPress={() => toggleWishlist(item.id)}
              style={{ padding: 8 }}
            >
              <Trash2
                size={16}
                color={theme.colors.secondaryInk}
                strokeWidth={1}
              />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  title: {
    fontFamily: theme.typography.family.display,
    fontSize: 24,
    color: theme.colors.primaryInk,
    textAlign: "center",
  },
  sub: {
    fontFamily: theme.typography.family.body,
    fontSize: 16,
    color: theme.colors.secondaryInk,
    fontStyle: "italic",
    marginTop: 8,
    marginBottom: 32,
  },
  btn: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primaryInk,
    paddingBottom: 4,
  },
  btnText: {
    fontFamily: theme.typography.family.sans,
    fontSize: 11,
    letterSpacing: 2,
    color: theme.colors.primaryInk,
  },
  header: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  headerTitle: {
    fontFamily: theme.typography.family.display,
    fontSize: 32,
    color: theme.colors.primaryInk,
  },
  list: { padding: 24 },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingVertical: 16,
    alignItems: "center",
  },
  image: { width: 70, height: 90, backgroundColor: theme.colors.surface },
  details: { flex: 1, marginLeft: 16 },
  name: {
    fontFamily: theme.typography.family.body,
    fontSize: 14,
    color: theme.colors.primaryInk,
  },
  price: {
    fontFamily: theme.typography.family.displayMedium,
    fontSize: 16,
    marginTop: 4,
    color: theme.colors.primaryInk,
  },
});
