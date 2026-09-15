import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { CATALOGUE } from "../../src/data";
import { theme } from "../../src/theme";
import { useStore } from "../../src/store";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const product = CATALOGUE.find((p) => p.id === id);
  const addToCart = useStore((s) => s.addToCart);

  const [isGifting, setIsGifting] = useState(false);
  const [giftNote, setGiftNote] = useState("");

  if (!product)
    return (
      <View style={styles.container}>
        <Text>Product not found.</Text>
      </View>
    );

  const handleAdd = () => {
    addToCart(product, 1, isGifting, isGifting ? giftNote : undefined);
    router.push("/cart");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.category}>{product.category.toUpperCase()}</Text>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>
            ₹{product.price.toLocaleString("en-IN")}
          </Text>
          <Text style={styles.description}>{product.description}</Text>

          {product.giftable && (
            <View style={styles.giftBox}>
              <View style={styles.giftHeader}>
                <Text style={styles.giftTitle}>Make it a Gift</Text>
                <Pressable
                  onPress={() => setIsGifting(!isGifting)}
                  style={[styles.toggle, isGifting && styles.toggleActive]}
                >
                  <View
                    style={[styles.toggleKnob, isGifting && styles.knobActive]}
                  />
                </Pressable>
              </View>
              {isGifting && (
                <View style={styles.giftDetails}>
                  <Text style={styles.label}>Gift Note</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Write a delicate note..."
                    placeholderTextColor={theme.colors.secondaryInk}
                    value={giftNote}
                    onChangeText={setGiftNote}
                    multiline
                  />
                  <Text style={styles.giftHint}>
                    Item will arrive in our signature Ashiana ribbon packaging.
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <Pressable style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>
            ADD TO BAG • ₹{product.price.toLocaleString("en-IN")}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  image: { width: "100%", height: 500 },
  content: { padding: 24 },
  category: {
    fontFamily: theme.typography.family.sans,
    fontSize: 10,
    letterSpacing: 2,
    color: theme.colors.secondaryInk,
    marginBottom: 8,
  },
  title: {
    fontFamily: theme.typography.family.display,
    fontSize: 28,
    color: theme.colors.primaryInk,
    lineHeight: 34,
  },
  price: {
    fontFamily: theme.typography.family.displayMedium,
    fontSize: 20,
    color: theme.colors.darkAccent,
    marginTop: 12,
  },
  description: {
    fontFamily: theme.typography.family.body,
    fontSize: 15,
    color: theme.colors.secondaryInk,
    marginTop: 24,
    lineHeight: 24,
  },
  giftBox: {
    marginTop: 40,
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.champagne,
    backgroundColor: theme.colors.surface,
  },
  giftHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  giftTitle: {
    fontFamily: theme.typography.family.display,
    fontSize: 18,
    color: theme.colors.primaryInk,
  },
  toggle: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.border,
    padding: 2,
  },
  toggleActive: { backgroundColor: theme.colors.champagne },
  toggleKnob: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.surface,
  },
  knobActive: { transform: [{ translateX: 20 }] },
  giftDetails: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  label: {
    fontFamily: theme.typography.family.sans,
    fontSize: 10,
    textTransform: "uppercase",
    color: theme.colors.primaryInk,
    letterSpacing: 1,
  },
  input: {
    marginTop: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    fontFamily: theme.typography.family.body,
    fontSize: 14,
    minHeight: 80,
    textAlignVertical: "top",
  },
  giftHint: {
    marginTop: 12,
    fontFamily: theme.typography.family.body,
    fontSize: 12,
    color: theme.colors.secondaryInk,
    fontStyle: "italic",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.surface,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  button: {
    backgroundColor: theme.colors.primaryInk,
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.surface,
    fontFamily: theme.typography.family.sans,
    fontSize: 12,
    letterSpacing: 2,
  },
});
