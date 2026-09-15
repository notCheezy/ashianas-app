import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { useStore } from "../../src/store";
import { theme } from "../../src/theme";

export default function Profile() {
  const { isLoggedIn, logout } = useStore();

  if (!isLoggedIn) {
    return (
      <View style={styles.guestContainer}>
        <Text style={styles.greeting}>Welcome to Ashiana</Text>
        <Text style={styles.guestSub}>
          Sign in to track orders, save gifts, and manage your wishlist.
        </Text>
        <Pressable
          style={styles.primaryBtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.btnText}>LOG IN / REGISTER</Text>
        </Pressable>
      </View>
    );
  }

  const menuItems = [
    { label: "Orders & Tracking", route: "/tracking" },
    { label: "Gift Preferences", route: "/" },
    { label: "Saved Addresses", route: "/" },
    { label: "Help & Contact", route: "/" },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Guest</Text>
          <Text style={styles.email}>guest@ashianayouronestopshop.com</Text>
        </View>

        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              style={styles.menuItem}
              onPress={() => router.push(item.route as any)}
            >
              <Text style={styles.menuLabel}>{item.label}</Text>
              <ChevronRight
                size={20}
                color={theme.colors.secondaryInk}
                strokeWidth={1}
              />
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.logoutBtn} onPress={logout}>
          <Text style={styles.logoutText}>SIGN OUT</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  guestContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    padding: 32,
  },
  greeting: {
    fontFamily: theme.typography.family.display,
    fontSize: 32,
    color: theme.colors.primaryInk,
    marginBottom: 12,
  },
  guestSub: {
    fontFamily: theme.typography.family.body,
    fontSize: 16,
    color: theme.colors.secondaryInk,
    lineHeight: 24,
    marginBottom: 40,
  },
  primaryBtn: {
    backgroundColor: theme.colors.primaryInk,
    paddingVertical: 16,
    alignItems: "center",
  },
  btnText: {
    color: theme.colors.surface,
    fontFamily: theme.typography.family.sans,
    fontSize: 12,
    letterSpacing: 2,
  },
  header: {
    padding: 32,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  email: {
    fontFamily: theme.typography.family.sans,
    fontSize: 12,
    color: theme.colors.secondaryInk,
    marginTop: 4,
  },
  menu: { marginTop: 24 },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  menuLabel: {
    fontFamily: theme.typography.family.body,
    fontSize: 16,
    color: theme.colors.primaryInk,
  },
  logoutBtn: {
    margin: 32,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: "center",
  },
  logoutText: {
    fontFamily: theme.typography.family.sans,
    fontSize: 11,
    letterSpacing: 2,
    color: theme.colors.primaryInk,
  },
});
