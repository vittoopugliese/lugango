import React, {useEffect, useState} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Colors} from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useGlobalContext } from "@/contexts/GlobalContext";

export default function ProductCardHeaderImage({product}: any) {
  const [cartClicked, setCartClicked] = useState(false);
  const { setCartProducts, updateQuantityFromCartProduct } = useGlobalContext();

  const handleCartClick = () => {
    setCartClicked(true);
    setCartProducts((prev: any) => [...prev, product]);
    updateQuantityFromCartProduct(product.id, 1);
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <TouchableOpacity style={styles.cartButton} onPress={handleCartClick}>
        {cartClicked ? (
          <Ionicons name="cart" size={32} color="white" />
        ) : (
          <Ionicons name="cart-outline" size={32} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pdsGrey,
  },
  productImage: {
    width: "100%",
    height: 304,
  },
  cartButton: {
    position: "absolute",
    right: 15,
    bottom: 15,
    backgroundColor: Colors.green,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
});
