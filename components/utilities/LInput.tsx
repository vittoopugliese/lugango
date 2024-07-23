import React from "react";
import {TextInput, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import { KeyboardType } from "react-native";

type GenericInput = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: object;
  keyboardType?: KeyboardType;
};


export const PdsInput = ({placeholder, value, onChangeText, secureTextEntry = false, style = {}, keyboardType = "default"}: GenericInput) => {
  return (
    <TextInput
      style={[styles.textInput, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={Colors.gray}
      keyboardType={keyboardType as KeyboardType}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    padding: 10,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: Colors.pdsGrey2,
    color: Colors.white,
  },
});
