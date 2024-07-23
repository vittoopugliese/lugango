import {Colors} from "@/constants/Colors";
import {StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

type Icon = {
  style?: object;
  onPress: () => void;
  icon: string;
  size?: number;
  color?: string;
};
// ICONS HERE: https://icons.expo.fyi/Index
// Or CRTRL + CLICK on the Ionicons component to see the accepted strings...
export const PdsIconButton = ({style = {}, onPress, icon, size = 32, color = "white"}: Icon) => {
  return (
    <TouchableOpacity style={{...styles.pdsButton, ...style}} onPress={onPress}>
      <Ionicons name={icon as any} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pdsButton: {
    backgroundColor: Colors.LRedLight,
    width: 44,
    height: 44,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  }
});
