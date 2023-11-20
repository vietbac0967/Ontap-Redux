import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { add, calculateResult, clean, setOperator } from "../redux/calculatorSlice";

export default function Calculator() {
  const dispatch = useDispatch();
  const displayValue = useSelector((state) => state.calculator.value);
  const operator = useSelector((state) => state.calculator.operator);
  const firstValue = useSelector((state) => state.calculator.firstValue);
  console.log("operator", operator);
  console.log("firstValue", firstValue);

  const handleNumberInput = (num) => {
    // Dispatch the 'add' action with the number
    dispatch(add(num.toString()));
  };

  const handleOperatorInput = (operator) => {
    // Dispatch the corresponding operator action
    dispatch(setOperator(operator));
  };

  const handleEqual = () => {
    // Dispatch the 'equal' action
    dispatch(calculateResult());
  };

  const handleClear = () => {
    // Dispatch the 'clean' action
    dispatch(clean());
  };

  const Button = ({ text, onPress, style }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );

  const buttonRows = [
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    [0, "+", "="],
  ];

  const renderButton = (button) => {
    if (typeof button === "number") {
      return (
        <Button
          key={button}
          text={button}
          onPress={() => handleNumberInput(button)}
        />
      );
    } else if (button === "=") {
      return (
        <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
          <Text style={styles.equalButtonText}>=</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <Button
          key={button}
          text={button}
          onPress={() => handleOperatorInput(button)}
          style={styles.operatorButton}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttonRows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => renderButton(button))}
          </View>
        ))}
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  displayContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  displayText: {
    fontSize: 48,
    color: "#333",
  },
  buttonContainer: {
    flex: 3,
    width: "80%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 3,
    margin: 2,
    padding: 15,
  },
  buttonText: {
    fontSize: 34,
    color: "#333",
  },
  zeroButton: {
    flex: 2,
    paddingLeft: 35,
    paddingRight: 35,
  },
  zeroButtonText: {
    marginLeft: 10,
  },
  operatorButton: {
    backgroundColor: "#f0f0f0",
  },
  operatorButtonText: {
    color: "#ff9500",
  },
  equalButton: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff9500",
    elevation: 3,
  },
  equalButtonText: {
    fontSize: 32,
    color: "#fff",
  },
  clearButton: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    marginTop: 10,
    elevation: 3,
    padding: 10,
  },
  clearButtonText: {
    fontSize: 24,
    color: "#333",
  },
});
