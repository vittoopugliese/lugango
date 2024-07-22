import {StyleSheet, View, ScrollView, FlatList} from "react-native";
import {Colors} from "@/constants/Colors";
import ProductCard from "@/components/ProductCard";

export default function ProductsScreen() {
  const products = [
    {
      id: "10",
      name: "GHOST TRAIN HAZE CART 1G",
      thc: 84.39,
      cbd: 0.24,
      grams: 1,
      type: "Sativa",
      brand: "Torch",
      price: 90,
      image: require("../../../assets/images/cart-image.png"),
      description:
        "Ghost Train Haze is a sativa cross between Ghost OG and Neville's Wreck. Unlike typical sativas, Ghost Train Haze grows dense buds blanketed in white, crystal-capped trichomes. With a sour citrus and floral aroma, Ghost Train Haze delivers a potent dose of THC to knock out pain, depression, and appetite loss, but patients prone to anxiety should steer clear of this heavy-hitter.",
    },
    {
      id: "20",
      name: "RUNTZ CART 1G",
      thc: 87.15,
      cbd: 0.27,
      grams: 1,
      type: "Hybrid",
      brand: "Torch",
      price: 50,
      image: require("../../../assets/images/cart-image.png"),
      description:
        "Runtz is a rare sativa strain to find, so not much is known to-date about its THC and CBD averages. However, reviewers enjoy its sweet, fruity, and candy-like scent and taste as well as its spectrum of color. Runtz derives its name from the candy as it has a colorful appearance as well as a flavor profile that’s sugary-sweet.",
    },
    {
      id: "30",
      name: "STRAWBERRY BANANA GOO CART 1G",
      thc: 87.25,
      cbd: 0.3,
      grams: 1,
      type: "Indica",
      brand: "Torch",
      price: 40,
      image: require("../../../assets/images/cart-image.png"),
      description:
        "Strawberry Banana is an indica developed by DNA Genetics in collaboration with Serious Seeds. A genetic cross of Crockett’s Banana Kush and the “Strawberry” phenotype of Bubble Gum, Strawberry Banana inherited a sweet, fruity flavor, hence the name. Known for its heavy resin production and high-THC content, Strawberry Banana produces happy, peaceful effects that sharpen creativity and sensory awareness.",
    },
    {
      id: "40",
      name: "OG SHARK CART 1G",
      thc: 87.64,
      cbd: 0.25,
      grams: 1,
      type: "Hybrid",
      brand: "Torch",
      price: 20,
      image: require("../../../assets/images/cart-image.png"),
      description:
        "OG Shark, a rare strain found primarily in Canada, sets high standards with its impressive THC content and pungent, earthy aroma. Patients most commonly turn to this heavy-hitter for nausea, pain, and sleep disorders, as well as many other symptoms.",
    },
  ];

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
