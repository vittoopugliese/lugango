import { Colors } from "@/constants/Colors";
import {Text, StyleSheet, View, ActivityIndicator} from "react-native";

type LoadingComponent = {
  text?: string;
  color?:string;
  size?:string;
}

export const LoadingComponent = ({size = "large", text, color = Colors.white}:LoadingComponent) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color={color} style={styles.spinner}
      size={size as number | "large" | "small"} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
  },
  spinner: {
    transform: [{scale: 1.4}],
  }
});
