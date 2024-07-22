import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {PdsText} from "@/components/utilities/PdsText";
import {Colors} from "@/constants/Colors";
import {useRouter} from "expo-router";
import { useGlobalContext } from "@/contexts/GlobalContext";

export default function ProductCard({product}: any) {
  let productName = (product.name.length > 28) ? product.name.slice(0, 28) + "..." : product.name;

  const router = useRouter();
  const {setSelectedProduct, updateQuantityFromCartProduct} = useGlobalContext();
  
  const handleProductClick = () => {
    setSelectedProduct(product)
    router.push(`products/${product.id}`);
  };

  return (
    <TouchableOpacity style={styles.productCard} key={product.id}
      onPress={handleProductClick}>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <PdsText fontSize={18} bold>{productName}</PdsText>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <View style={{flexDirection: "column"}}>
            <PdsText gray>{product.brand} | {product.type} | {product.grams}g</PdsText>
            <PdsText gray>THC: {product.thc}% | CBD: {product.cbd}%</PdsText>
          </View>
          <PdsText bold fontSize={24} style={{paddingRight: 6, paddingTop: 10}}>${product.price}</PdsText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: Colors.pdsGrey2,
    borderRadius: 4,
  },
  productImage: {
    width: "100%",
    borderRadius: 4,
    height: 194,
  },
  productInfo: {
    padding: 10,
  },
});
