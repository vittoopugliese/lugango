import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Colors} from "@/constants/Colors";
import ProductCard from "./ProductCard";
import { products } from "@/constants/CommonStyles";

export default function FeaturedProducts() {
  return <FlatList data={products} 
  showsVerticalScrollIndicator={false} keyExtractor={(item) => item.id}
  renderItem={({item}) => (
    <View style={styles.productGrid}>
      <ProductCard onHome product={item} />
    </View>
  )}
/>;
}

const styles = StyleSheet.create({
      productGrid: {
        flexDirection: "row",
        padding: 5.4,
        justifyContent: "space-between",
        width: "100%",
      },
});
