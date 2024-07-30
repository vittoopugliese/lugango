import React, {useEffect, useState} from "react";
import {View, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import {Colors} from "@/constants/Colors";
import {PdsText} from "./utilities/PdsText";
import {ScrollView} from "react-native-gesture-handler";
import {LinearGradient} from "expo-linear-gradient";

export default function CategoryCards() {
  const categories = ["Edibles", "Carts", "Flowers", "Extracts", "Pre-rolls"];

  const getGradientColors = () => {
    let colors = [
      "#" + Math.floor(Math.random() * 16777215).toString(16),
      "#" + Math.floor(Math.random() * 16777215).toString(16),
    ];
    return colors;
  };

  return (
    <ScrollView
      style={[styles.container]}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity key={999} style={styles.extrasCard}>
        <PdsText fontSize={18} bold style={styles.allText}>
          All Prods
        </PdsText>
      </TouchableOpacity>

      {categories.map((category: any, index: any) => (
        <TouchableOpacity key={index} style={styles.categoryCard}>
          <LinearGradient
            start={{x: 0.3, y: 0.5}}
            style={styles.categoryCard}
            colors={getGradientColors()}>
            <PdsText fontSize={18} bold>
              {category}
            </PdsText>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pdsBlack,
    flexDirection: "row",
    maxHeight: 96,
    maxWidth: Dimensions.get("window").width,
    overflow: "scroll",
  },
  allText: {
    color: Colors.LGold2,
  },
  categoryCard: {
    marginHorizontal: 12,
    marginVertical: 18,
    padding: 16,
    borderRadius: 10,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    borderRadius: 10,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  extrasCard: {
    backgroundColor: Colors.sidebarBackgroundColor,
    borderColor: Colors.pdsGrey2,
    borderWidth: 1,
    marginHorizontal: 12,
    marginVertical: 18,
    padding: 16,
    borderRadius: 10,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
});
