// Button.js
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ onPress, text, style }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text style={style}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
