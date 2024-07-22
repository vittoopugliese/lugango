import CartProductCard from "@/components/CartProductCard";
import {PdsButton} from "@/components/utilities/PdsButton";
import { PdsIconButton } from "@/components/utilities/PdsIconButton";
import {PdsText} from "@/components/utilities/PdsText";
import {Colors} from "@/constants/Colors";
import {useGlobalContext} from "@/contexts/GlobalContext";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import { useEffect, useState } from "react";
import {StyleSheet, View, FlatList} from "react-native";

export default function CartScreen() {
  const [totalPrice, setTotalPrice] = useState(0)

  const {cartProducts} = useGlobalContext();
  const router = useRouter();

  const handleCheckout = () => {
    if (cartProducts.length === 0) return;
    // router.navigate("checkout")
  };

  useEffect(() => {
    let total = 0;

    cartProducts.forEach((product) => {
      total += product.price * product.quantity;
    });

    setTotalPrice(total);
  }, [cartProducts])
  
  return (
    <View style={styles.container}>
      {cartProducts.length === 0 && (
        <View style={styles.emptyCartContainer}>
          <View style={{flexDirection: "row", marginBottom: 10}}>
            <Ionicons name="cart" size={28} color={Colors.gray} />
            <PdsText bold gray fontSize={21}> Add products to your cart... </PdsText>
          </View>
          <PdsButton text="  Search for products  " onPress={() => router.navigate("products")} />
        </View>
      )}

      {cartProducts.length > 0 && (
        <>
          <View style={styles.cartInfoContainer}>
            <View>
              <View style={{flexDirection: "row", gap: 5, marginBottom: 4}}>
                <Ionicons name="cart" size={28} color={Colors.gray} />
                <PdsText bold fontSize={20}>Cart Summary</PdsText>
              </View>

              <PdsText gray>Number of Items: 
                <PdsText bold> {" "}{cartProducts.length}</PdsText>
              </PdsText>

              <PdsText gray>Total Price:
                <PdsText>{" "}${totalPrice}</PdsText>
              </PdsText>
            </View>

            <PdsIconButton icon="arrow-forward" style={{backgroundColor: Colors.green}}
              onPress={handleCheckout} />
          </View>

          <FlatList data={cartProducts} keyExtractor={(item) => item.id}
            renderItem={({item}) => <CartProductCard product={item} />} 
            showsVerticalScrollIndicator={false} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pdsGrey,
    padding: 15,
    height: "100%",
  },
  cartInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.sidebarBackgroundColor,
    padding: 14,
    paddingRight: 22,
    borderRadius: 6,
    marginVertical: 10,
    // borderWidth: 2,
    // borderColor: Colors.pdsGrey2,
  },
  emptyCartContainer: {
    height: "100%",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
