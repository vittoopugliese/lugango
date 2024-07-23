import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Colors} from "@/constants/Colors";
import ProductCard from "./ProductCard";
import { products } from "@/constants/CommonStyles";

export default function FeaturedProducts() {
  return <FlatList style={styles.container} data={products}
  showsVerticalScrollIndicator={false} keyExtractor={(item) => item.id}
  renderItem={({item}) => (
    <View style={styles.productGrid}>
      <ProductCard product={item} />
    </View>
  )}
/>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.pdsGrey,
        flex: 1,
      },
      productGrid: {
        flexDirection: "column",
        padding: 15,
        gap: 15,
      },
});
