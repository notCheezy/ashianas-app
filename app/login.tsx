import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { router } from "expo-router";
import { useStore } from "../src/store";
import { theme } from "../src/theme";

export default function Login() {
  const login = useStore((s) => s.login);

  const handleLogin = () => {
    login();
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.form}>
        <Text style={styles.label}>EMAIL ADDRESS</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={theme.colors.border}
          autoCapitalize="none"
        />

        <Text style={[styles.label, { marginTop: 24 }]}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={theme.colors.border}
          secureTextEntry
        />
      </View>

      <Pressable style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>CONTINUE</Text>
      </Pressable>

      <Pressable style={styles.guestBtn} onPress={() => router.back()}>
        <Text style={styles.guestText}>Continue as Guest</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: 32,
    justifyContent: "center",
  },
  title: {
    fontFamily: theme.typography.family.display,
    fontSize: 32,
    color: theme.colors.primaryInk,
    marginBottom: 48,
    textAlign: "center",
  },
  form: { marginBottom: 40 },
  label: {
    fontFamily: theme.typography.family.sans,
    fontSize: 10,
    letterSpacing: 2,
    color: theme.colors.secondaryInk,
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primaryInk,
    paddingVertical: 12,
    fontFamily: theme.typography.family.body,
    fontSize: 16,
    color: theme.colors.primaryInk,
  },
  btn: {
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
  guestBtn: { marginTop: 24, alignItems: "center" },
  guestText: {
    fontFamily: theme.typography.family.body,
    fontSize: 14,
    color: theme.colors.secondaryInk,
    textDecorationLine: "underline",
  },
});
