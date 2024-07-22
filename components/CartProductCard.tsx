import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {PdsText} from "@/components/utilities/PdsText";
import {Colors} from "@/constants/Colors";
import {CartOptions} from "./CartOptions";

export default function CartProductCard({product}: any) {
  let productName = (product.name.length > 25) ? product.name.slice(0, 25) + "..." : product.name;

  return (
    <View style={{marginVertical: 10}}>
      <View style={styles.productCard} key={product.id}>
        <View style={{flexDirection: "row"}}>
          <Image source={product.image} style={styles.productImage} />
          <View style={styles.productInfo}>
            <PdsText bold>{productName}</PdsText>
            <PdsText gray>{product.brand} | {product.type} | {product.grams}g</PdsText>
            <PdsText fontSize={18}>${product.price}</PdsText>
          </View>
        </View>
      </View>
      <CartOptions product={product} />
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: Colors.pdsGrey2,
    borderTopRightRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productImage: {
    borderTopLeftRadius: 6,
    height: 94,
    width: 94,
  },
  productInfo: {
    padding: 10,
    justifyContent: "space-between",
  }
});
