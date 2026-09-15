import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Heart, ShoppingBag } from "lucide-react-native";
import { theme } from "../../src/theme";
import { CATALOGUE } from "../../src/data";
import { useStore } from "../../src/store";

export default function Home() {
  // Calculate total items in cart for the badge
  const cartCount = useStore((s) =>
    s.cart.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={{ width: 28 }} />{" "}
          <View style={styles.headerCenter}>
            <Text style={styles.brand}>ASHIANA</Text>
            <Text style={styles.location}>BANGALORE</Text>
          </View>
          <Pressable
            onPress={() => router.push("/cart")}
            style={styles.cartIconContainer}
          >
            <ShoppingBag
              size={24}
              color={theme.colors.primaryInk}
              strokeWidth={1.2}
            />
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </Pressable>
        </View>

        <View style={styles.hero}>
          {/* Updated Hero Image Link */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>THE ART OF GIVING</Text>
            <Text style={styles.heroSubtitle}>
              Jewellery chosen with intention.
            </Text>
            <Pressable
              style={styles.primaryBtn}
              onPress={() => router.push("/gifting")}
            >
              <Text style={styles.primaryBtnText}>EXPLORE GIFTS</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.line} />
          <Text style={styles.sectionTitle}>Curated</Text>
          <View style={styles.line} />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.rail}
        >
          {CATALOGUE.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </ScrollView>

        <View style={{ height: 80 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function ProductCard({ product, index }: { product: any; index: number }) {
  const { wishlist, toggleWishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100).duration(400)}
      style={styles.card}
    >
      <Pressable onPress={() => router.push(`/product/${product.id}`)}>
        <Image source={{ uri: product.image }} style={styles.cardImage} />
        <Pressable
          style={styles.wishlistBtn}
          onPress={() => toggleWishlist(product.id)}
        >
          <Heart
            size={20}
            color={theme.colors.primaryInk}
            fill={isWishlisted ? theme.colors.champagne : "transparent"}
            strokeWidth={1}
          />
        </Pressable>
        <View style={styles.cardDetails}>
          <Text style={styles.cardCategory}>
            {product.category.toUpperCase()}
          </Text>
          <Text style={styles.cardName} numberOfLines={1}>
            {product.name}
          </Text>
          <Text style={styles.cardPrice}>
            ₹{product.price.toLocaleString("en-IN")}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  // UPDATED HEADER STYLES
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerCenter: { alignItems: "center" },
  brand: {
    fontFamily: theme.typography.family.displayMedium,
    fontSize: 28,
    letterSpacing: 2,
    color: theme.colors.primaryInk,
  },
  location: {
    fontFamily: theme.typography.family.sans,
    fontSize: 9,
    letterSpacing: 4,
    color: theme.colors.secondaryInk,
    marginTop: 4,
  },
  cartIconContainer: { position: "relative", padding: 4 },
  badge: {
    position: "absolute",
    top: -2,
    right: -4,
    backgroundColor: theme.colors.darkAccent,
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.surface,
  },
  badgeText: {
    color: theme.colors.surface,
    fontSize: 9,
    fontFamily: theme.typography.family.sans,
    fontWeight: "bold",
  },
  // REST OF STYLES
  hero: {
    margin: 16,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  heroImage: { width: "100%", height: 400 },
  heroContent: { padding: 24, alignItems: "center" },
  heroTitle: {
    fontFamily: theme.typography.family.display,
    fontSize: 32,
    color: theme.colors.primaryInk,
  },
  heroSubtitle: {
    fontFamily: theme.typography.family.body,
    fontSize: 14,
    color: theme.colors.secondaryInk,
    fontStyle: "italic",
    marginTop: 8,
  },
  primaryBtn: {
    backgroundColor: theme.colors.primaryInk,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginTop: 24,
    width: "100%",
    alignItems: "center",
  },
  primaryBtnText: {
    color: theme.colors.surface,
    fontFamily: theme.typography.family.sans,
    fontSize: 11,
    letterSpacing: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 24,
  },
  line: { flex: 1, height: 1, backgroundColor: theme.colors.border },
  sectionTitle: {
    fontFamily: theme.typography.family.display,
    fontSize: 20,
    color: theme.colors.primaryInk,
    paddingHorizontal: 16,
  },
  rail: { paddingHorizontal: 16, gap: 16 },
  card: {
    width: 220,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 8,
  },
  cardImage: {
    width: "100%",
    height: 260,
    backgroundColor: theme.colors.background,
  },
  wishlistBtn: { position: "absolute", top: 16, right: 16 },
  cardDetails: { paddingVertical: 12, alignItems: "center" },
  cardCategory: {
    fontFamily: theme.typography.family.sans,
    fontSize: 9,
    color: theme.colors.secondaryInk,
    letterSpacing: 1,
    marginBottom: 4,
  },
  cardName: {
    fontFamily: theme.typography.family.body,
    fontSize: 13,
    color: theme.colors.primaryInk,
  },
  cardPrice: {
    fontFamily: theme.typography.family.displayMedium,
    fontSize: 16,
    color: theme.colors.primaryInk,
    marginTop: 8,
  },
});
