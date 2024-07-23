import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LoadingComponent } from "./LoadingComponent";

type GenericButton = {
  text: string;
  style?: object;
  onPress: () => void;
  loading?: boolean;
};

export const LButton = ({text, style = {}, onPress, loading}: GenericButton) => {
  return (
    <TouchableOpacity style={{...styles.pdsButton, ...style}} onPress={onPress}>
      { !loading ?
        <Text style={styles.buttonText}>{text}</Text> :
        <LoadingComponent size="small" /> }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pdsButton: {
    backgroundColor: Colors.LRedLight,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});