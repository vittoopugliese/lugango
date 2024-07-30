import {StyleSheet, View, Image, TouchableOpacity, Touchable} from "react-native";
import {PdsText} from "@/components/utilities/PdsText";
import {Colors} from "@/constants/Colors";
import {CartOptions} from "./CartOptions";
import { useRouter } from "expo-router";
import { useGlobalContext } from "@/contexts/GlobalContext";

export default function CartProductCard({product}: any) {
  let productName = (product.name.length > 20) ? product.name.slice(0, 20) + "..." : product.name;

  const {setSelectedProduct} = useGlobalContext(); 
  const router = useRouter();

  const handleOnCartProductPress = () => {
    setSelectedProduct(product);
    router.navigate(`products/${product.id}`)
  };

  return (
    <TouchableOpacity style={{marginVertical: 10}} onPress={handleOnCartProductPress}>
      <View style={styles.productCard} key={product.id}>
        <View style={{flexDirection: "row"}}>
          <Image source={product.image} style={styles.productImage} />
          <View style={styles.productInfo}>
            <PdsText fontSize={14} bold>{productName}</PdsText>
            <PdsText fontSize={12} gray>{product.brand} | {product.type} | {product.grams}g</PdsText>
            <PdsText fontSize={16}>${product.price}</PdsText>
          </View>
        </View>
      </View>
      <CartOptions product={product} />
    </TouchableOpacity>
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
    paddingBottom: 0,
    justifyContent: "space-between",
  }
});
