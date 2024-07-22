import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, } from "react-native";
import {Colors} from "@/constants/Colors";
import { PdsText } from "./PdsText";
import { PdsButton } from "./PdsButton";
import { cs } from "@/constants/CommonStyles";

interface Dropdown {
  options: string[];
  onSelect: (option: string) => void;
  placeholder?: string;
}

const PdsDropdown: React.FC<Dropdown> = ({
  options,
  onSelect,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(`Showing ${option} Inspections`);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsOpen(true)}>
            <PdsText fontSize={16} gray>{selectedOption || placeholder}</PdsText>
      </TouchableOpacity>

      <Modal visible={isOpen} transparent={true}
        animationType="fade" onTouchMove={() => setIsOpen(false)}>

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <PdsText fontSize={20} bold style={cs.mb1}>{placeholder}</PdsText>

            <FlatList data={options}
              keyExtractor={(item) => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )} />

            <PdsButton style={{...cs.w100, ...cs.mt2}} text="Close" onPress={() => setIsOpen(false)} />
          </View>
        </View>

      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  dropdownButton: {
    height: 50,
    padding: 10,
    flex: 1,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: Colors.pdsGrey2,
    color: Colors.white,
    borderColor: Colors.pdsGrey,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Colors.pdsBlack,
    borderRadius: 10,
    padding: 20,
    paddingTop: 10,
    width: "80%",
    maxHeight: "80%",
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.pdsGrey,
  },
  optionText: {
    fontSize: 16,
    color: Colors.white,
  },
});

export default PdsDropdown;
