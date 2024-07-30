import React from "react";
import {View, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {LText} from "@/components/utilities/LText";
import CategoryCards from "@/components/CategoryCard";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LText fontSize={36} bold style={styles.lugango}>Lu-Gang-Oh!</LText>
      {/* <CategoryCards /> */}
      <FeaturedProducts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pdsGrey,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  lugango: {
    width: "100%",
    textAlign: "center",
    marginVertical: 10,
  },
});
