import React, { useEffect, useState } from "react";
import {StyleSheet, View, ScrollView} from "react-native";
import {Colors} from "@/constants/Colors";
import {PdsText} from "@/components/utilities/PdsText";
import {useGlobalContext} from "@/contexts/GlobalContext";
import { cs } from "@/constants/CommonStyles";
import ProductCardHeaderImage from "@/components/ProductCardHeaderImage";
import { LoadingComponent } from './../../../components/utilities/LoadingComponent';

const ValueText = ({ fontSize, style, children}:any) => {
  return (
    <PdsText style={styles.typeText} fontSize={18}>{children}</PdsText>
  )
}

export default function OneProductScreen() {
  const [loading, setLoading] = useState(true)
  const {selectedProduct} = useGlobalContext();

  useEffect(() => {
    if(selectedProduct === null) {
      setLoading(true);
      return;
    }

    setLoading(false);
  }, [])

  if(loading) {
    return (
      <View style={{backgroundColor:Colors.pdsGrey, height: "100%"}}>
        <LoadingComponent text="Loading product..." />
      </View>
    )
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProductCardHeaderImage product={selectedProduct} />
      <View style={styles.productInfo}>
        <PdsText fontSize={32} bold>{selectedProduct.name}</PdsText>

        <View style={{gap: 10, marginVertical: 10}}>
          <View style={styles.infoItemContainer}>
            <PdsText style={styles.typeText} fontSize={18} gray>Category</PdsText>
            <ValueText style={styles.typeText} fontSize={18}>{selectedProduct.category}</ValueText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText style={styles.typeText} fontSize={18} gray>Price </PdsText>
            <ValueText style={styles.typeText} fontSize={18}>${selectedProduct.price}</ValueText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText style={styles.typeText} fontSize={18} gray>Brand </PdsText>
            <ValueText style={styles.typeText} fontSize={18}>{selectedProduct.brand}</ValueText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText style={styles.typeText} fontSize={18} gray>Type </PdsText>
            <ValueText style={styles.typeText} fontSize={18}>{selectedProduct.type}</ValueText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText style={styles.typeText} fontSize={18} gray>THC </PdsText>
            <ValueText style={styles.typeText} fontSize={18}>{selectedProduct.thc}%</ValueText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText style={styles.typeText} fontSize={18} gray>CBD </PdsText>
            <ValueText style={styles.typeText} fontSize={18}>{selectedProduct.cbd}%</ValueText>
          </View>

          <View style={styles.infoItemContainer}>
            <PdsText style={styles.typeText} fontSize={18} gray>Grams </PdsText>
            <ValueText style={styles.typeText} fontSize={18}>{selectedProduct.grams}g</ValueText>
          </View>
        </View>

        <PdsText style={cs.mt1}>{selectedProduct.description}</PdsText>

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
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.pdsGrey2,
    paddingBottom: 8,
    gap: 8,
  },
  typeText: {
    width: "50%",
    textAlign: "left"
  }
});
