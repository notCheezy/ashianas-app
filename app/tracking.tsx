import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Check } from "lucide-react-native";
import { theme } from "../src/theme";

export default function Tracking() {
  const steps = [
    { title: "Order Placed", date: "Oct 12, 10:00 AM", completed: true },
    { title: "Payment Confirmed", date: "Oct 12, 10:05 AM", completed: true },
    { title: "Preparing to Ship", date: "Oct 13, Processing", completed: true },
    { title: "Out for Delivery", date: "Pending", completed: false },
    { title: "Delivered", date: "Expected Oct 15", completed: false },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 32 }}
    >
      <Text style={styles.orderNumber}>ORDER #ASH-9021</Text>
      <Text style={styles.eta}>Expected Delivery: Oct 15</Text>

      <View style={styles.timeline}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            {index !== steps.length - 1 && (
              <View
                style={[styles.line, step.completed ? styles.lineActive : {}]}
              />
            )}

            <View style={[styles.dot, step.completed ? styles.dotActive : {}]}>
              {step.completed && (
                <Check size={12} color={theme.colors.surface} strokeWidth={3} />
              )}
            </View>

            <View style={styles.stepContent}>
              <Text
                style={[
                  styles.stepTitle,
                  !step.completed && styles.textInactive,
                ]}
              >
                {step.title}
              </Text>
              <Text style={styles.stepDate}>{step.date}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  orderNumber: {
    fontFamily: theme.typography.family.sans,
    fontSize: 11,
    letterSpacing: 2,
    color: theme.colors.secondaryInk,
    marginBottom: 8,
  },
  eta: {
    fontFamily: theme.typography.family.display,
    fontSize: 24,
    color: theme.colors.primaryInk,
    marginBottom: 48,
  },
  timeline: { marginLeft: 8 },
  stepContainer: { flexDirection: "row", marginBottom: 40, minHeight: 40 },
  line: {
    position: "absolute",
    left: 11,
    top: 24,
    bottom: -40,
    width: 2,
    backgroundColor: theme.colors.border,
  },
  lineActive: { backgroundColor: theme.colors.champagne },
  dot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.surface,
    borderWidth: 2,
    borderColor: theme.colors.border,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  dotActive: {
    backgroundColor: theme.colors.champagne,
    borderColor: theme.colors.champagne,
  },
  stepContent: { marginLeft: 24, justifyContent: "center" },
  stepTitle: {
    fontFamily: theme.typography.family.displayMedium,
    fontSize: 18,
    color: theme.colors.primaryInk,
  },
  textInactive: { color: theme.colors.secondaryInk },
  stepDate: {
    fontFamily: theme.typography.family.sans,
    fontSize: 10,
    color: theme.colors.secondaryInk,
    marginTop: 4,
    letterSpacing: 1,
  },
});
