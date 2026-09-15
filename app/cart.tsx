import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { Trash2 } from "lucide-react-native";
import { useStore } from "../src/store";
import { theme } from "../src/theme";

export default function Cart() {
  const { cart, removeFromCart } = useStore();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your bag is waiting.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {cart.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={{ uri: item.product.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.product.name}</Text>
              <Text style={styles.price}>
                ₹{item.product.price.toLocaleString("en-IN")}
              </Text>

              {item.isGift && (
                <View style={styles.giftBadge}>
                  <Text style={styles.giftText}>Includes Gift Wrapping</Text>
                </View>
              )}
            </View>
            <Pressable
              onPress={() => removeFromCart(item.id)}
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

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Subtotal</Text>
          <Text style={styles.totalValue}>
            ₹{subtotal.toLocaleString("en-IN")}
          </Text>
        </View>
        <Pressable style={styles.checkoutBtn}>
          <Text style={styles.checkoutBtnText}>CHECKOUT (DEMO)</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  emptyText: {
    fontFamily: theme.typography.family.display,
    fontSize: 24,
    color: theme.colors.secondaryInk,
  },
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
  giftBadge: { marginTop: 8 },
  giftText: {
    fontFamily: theme.typography.family.sans,
    fontSize: 10,
    color: theme.colors.champagne,
    textTransform: "uppercase",
  },
  footer: {
    backgroundColor: theme.colors.surface,
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  totalLabel: {
    fontFamily: theme.typography.family.body,
    fontSize: 16,
    color: theme.colors.secondaryInk,
  },
  totalValue: {
    fontFamily: theme.typography.family.displayMedium,
    fontSize: 20,
    color: theme.colors.primaryInk,
  },
  checkoutBtn: {
    backgroundColor: theme.colors.primaryInk,
    paddingVertical: 16,
    alignItems: "center",
  },
  checkoutBtnText: {
    color: theme.colors.surface,
    fontFamily: theme.typography.family.sans,
    fontSize: 12,
    letterSpacing: 2,
  },
});
