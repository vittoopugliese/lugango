import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {Stack} from "expo-router";

export default function ProductsScreen() {
  return <Stack screenOptions={{headerShown: false}} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pdsGrey,
  },
});
