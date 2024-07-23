import React, {useEffect, useState} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Colors} from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { LText } from "./utilities/LText";
import { LButton } from "./utilities/LButton";
import { PdsText } from "./utilities/PdsText";
import { Product } from "@/utils/types";

export default function ProductCardHeaderImage({product}: {product: Product}) {
  const [cartClicked, setCartClicked] = useState(false);
  const [productInCartQuantity, setProductInCartQuantity] = useState(0);
  const { cartProducts, addProductToCart, selectedProduct } = useGlobalContext();

  useEffect(() => {
    let productFound = cartProducts.find((p:any) => p.id === product.id)
    if (productFound) {
      setProductInCartQuantity(productFound.quantity);
      setCartClicked(true)
    }
  }, [cartProducts])
  

  const handleCartClick = () => {
    setCartClicked(true);
    setProductInCartQuantity(selectedProduct.quantity+1);
    addProductToCart(product);
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <TouchableOpacity style={[styles.cartButton, {backgroundColor: Colors.LGold2}]} onPress={handleCartClick}>
        {cartClicked ? (
          <Ionicons name="cart" size={32} color={Colors.sidebarBackgroundColor} />
        ) : (
          <Ionicons name="cart-outline" size={32} color={Colors.sidebarBackgroundColor} />
        )}
        <PdsText style={styles.q}>{productInCartQuantity}</PdsText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  q: {
    color: Colors.white,
    backgroundColor: Colors.sidebarBackgroundColor,
    textAlign: "center",
    borderRadius: 100,
    position: "absolute",
    width: 25,
    padding: 3,
    paddingVertical: 0,
    fontSize: 14,
    left: -4,
    top: -4,
  },
  container: {
    backgroundColor: Colors.pdsGrey,
  },
  productImage: {
    width: "100%",
    height: 304,
  },
  cartButton: {
    position: "absolute",
    borderColor: Colors.LGold3,
    borderWidth: 3,
    right: 15,
    bottom: 15,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
});
