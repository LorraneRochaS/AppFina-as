import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { THEME } from "../../Theme";
import { MotiView, AnimatePresence, MotiText } from "moti";

export default function Moviments({ data }) {
  const [showValue, setShowValue] = useState(false);
  return (
    <TouchableOpacity
      style={styles.conatiner}
      onPress={() => setShowValue(!showValue)}
    >
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}> {data.label}</Text>
        {showValue ? (
          <AnimatePresence>
            <MotiText
              style={data.type === 1 ? styles.value : styles.expenses}
              from={{
                translateX: 300,
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                type: "timing",
                duration: 500,
              }}
            >
              {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <View style={styles.skeleton}></View>
          </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADA",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    color: THEME.colors.cinzaDa,
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: "#2ECC71",
    fontWeight: "bold",
  },
  expenses: {
    fontSize: 16,
    color: "#E74C3C",
    fontWeight: "bold",
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: THEME.colors.cinzaDa,
    borderRadius: 8,
  },
});
