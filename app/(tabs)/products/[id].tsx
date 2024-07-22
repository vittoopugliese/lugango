import React from "react";
import {StyleSheet, View, ScrollView} from "react-native";
import {Colors} from "@/constants/Colors";
import {PdsText} from "@/components/utilities/PdsText";
import {useGlobalContext} from "@/contexts/GlobalContext";
import { cs } from "@/constants/CommonStyles";
import ProductCardHeaderImage from "@/components/ProductCardHeaderImage";

export default function OneProductScreen() {
  const {selectedProduct} = useGlobalContext();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProductCardHeaderImage product={selectedProduct} />
      <View style={styles.productInfo}>
        <PdsText fontSize={32} bold>{selectedProduct.name}</PdsText>

        <PdsText style={cs.mt1}>{selectedProduct.description}</PdsText>

        <View style={{gap: 10, marginVertical: 10}}>
          <View style={styles.infoItemContainer}>
            <PdsText fontSize={18} gray>Price </PdsText>
            <PdsText fontSize={18}> ${selectedProduct.price}</PdsText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText fontSize={18} gray>Brand </PdsText>
            <PdsText fontSize={18}>{selectedProduct.brand}</PdsText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText fontSize={18} gray>Type </PdsText>
            <PdsText fontSize={18}>{selectedProduct.type}</PdsText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText fontSize={18} gray>THC </PdsText>
            <PdsText fontSize={18}>{selectedProduct.thc}%</PdsText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText fontSize={18} gray>CBD </PdsText>
            <PdsText fontSize={18}>{selectedProduct.cbd}%</PdsText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText fontSize={18} gray>Grams </PdsText>
            <PdsText fontSize={18}>{selectedProduct.grams}g</PdsText>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pdsGrey,
    flex: 1,
  },
  productInfo: {
    padding: 10,
  },
  infoItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.pdsGrey2,
    paddingBottom: 8,
  }
});
