import {StyleSheet, View, ScrollView, FlatList} from "react-native";
import {Colors} from "@/constants/Colors";
import ProductCard from "@/components/ProductCard";
import { products } from "@/constants/CommonStyles";

export default function ProductsScreen() {
  return (
    <FlatList style={styles.container} data={products}
      showsVerticalScrollIndicator={false} keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View style={styles.productGrid}>
          <ProductCard product={item} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pdsGrey,
    flex: 1,
  },
  productGrid: {
    flexDirection: "column",
    padding: 15,
    gap: 15,
  },
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
