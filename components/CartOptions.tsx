import {View, TouchableOpacity, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import {PdsInput} from "./utilities/PdsInput";
import {useEffect, useState} from "react";
import { useRouter } from "expo-router";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { PdsText } from "./utilities/PdsText";

export const CartOptions = ({product, preselectedQuantity = 1}: any) => {
  const [quantity, setQuantity] = useState(preselectedQuantity);
  const { cartProducts, removeCartProduct, updateQuantityFromCartProduct, setSelectedProduct } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    let productFound = cartProducts.find((p:any) => p.id === product.id)
    if (productFound) {
      setQuantity(productFound.quantity)
    }
  }, [cartProducts])

  const handleQuantityPress = (type?: string) => {
    if (type === "+") {
      setQuantity((prev: number) => prev + 1);
      updateQuantityFromCartProduct(product.id, quantity + 1);
    } else {
      if (quantity == 1) return;
      setQuantity((prev: number) => prev - 1);
      updateQuantityFromCartProduct(product.id, quantity - 1);
    }
  };

  const handleInputTextChange = (text: string) => {
    if (text === "") {
      setQuantity(1);
      updateQuantityFromCartProduct(product.id, 1);
    } else {
      setQuantity(parseInt(text));
      updateQuantityFromCartProduct(product.id, parseInt(text));
    }
  }

  const handleDeleteProductFromCard = () => {
    removeCartProduct(product.id)
  };

  return (
    <View style={styles.optionsContainer}>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={{...styles.quantityButton, borderBottomLeftRadius: 6}}
          onPress={() => handleQuantityPress()}>
          <Ionicons name="remove" size={24} color={Colors.gray} />
        </TouchableOpacity>

        <PdsInput placeholder="1" keyboardType="number-pad" value={quantity.toString()} 
          style={styles.quantityInput} onChangeText={handleInputTextChange} />

        <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityPress("+")}>
          <Ionicons name="add" size={24} color={Colors.gray} />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
        <TouchableOpacity style={styles.crossContainer} onPress={handleDeleteProductFromCard}>
          <Ionicons name="close" size={27} color={Colors.gray} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    justifyContent: "space-between",
    paddingRight: 10,
    flexDirection: "row",
    backgroundColor: "#191919",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  crossContainer: {},
  quantityContainer: {
    flexDirection: "row",
  },
  quantityInput: {
    width: 49,
    height: "100%",
    padding: 0,
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: 0,
    borderRadius: 0,
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: "#191919",
  },
  quantityButton: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    backgroundColor: "#191919",
  },
});

export default CartOptions;
