import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import ProductsScreen from "./products";
import {PdsText} from "@/components/utilities/PdsText";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <PdsText fontSize={36} bold style={styles.lugango}>Lu-Gang-Oh!</PdsText>
      <ProductsScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pdsGrey,
    flex: 1,
  },
  lugango: {
    width: "100%",
    textAlign: "center",
    marginVertical: 10,
  },
});
