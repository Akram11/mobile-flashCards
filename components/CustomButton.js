import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ children, onPress,disabled, style = {} }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled = {disabled}>
      <Text style={[styles.Text, style]}>{children}</Text>
    </TouchableOpacity>
  );


  const styles = StyleSheet.create({
    button: {
      borderRadius: 3,
      backgroundColor: '#1E90FF',
      margin: 5,
      padding: 15,
 
    },
    Text: {
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold",
      color: '#fff'
    }
  });
  
  export default CustomButton;