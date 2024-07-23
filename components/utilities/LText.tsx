import {Colors} from "@/constants/Colors";
import {Text, StyleSheet} from "react-native";

type GenericText = {
  children: any;
  style?: object;
  bold?: boolean;
  italic?: boolean;
  gray?: boolean;
  black?: boolean;
  fontSize?: number;
  onPress?: () => void;
};

export const LText = ({ children, style = {}, bold = false, italic = false, fontSize = 15, gray = false, black = false, onPress}: GenericText) => {
  return (
    <Text onPress={onPress} style={[
        styles.text,
        {fontSize: fontSize},
        style,
        bold && styles.boldText,
        italic && styles.italicText,
        gray && styles.grayText,
        black && styles.blackText,
      ]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    textAlign: "left",
    fontFamily: "Poppins",
    letterSpacing: 0.3,
  },
  boldText: {
    fontWeight: "bold",
  },
  italicText: {
    fontStyle: "italic",
  },
  grayText: {
    color: Colors.gray,
  },
  blackText: {
    color: Colors.pdsBlack,
  },
});
