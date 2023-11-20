// calculatorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "0",
  operator: null,
  firstValue: "",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.value === "0") {
        state.value = action.payload;
      } else {
        state.value += action.payload;
      }
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
      state.firstValue = state.value;
      state.value = "0";
    },
    calculateResult: (state) => {
      const num1 = parseFloat(state.firstValue);
      const num2 = parseFloat(state.value);

      if (state.operator === "+") {
        state.value = (num1 + num2).toString();
      } else if (state.operator === "-") {
        state.value = (num1 - num2).toString();
      } else if (state.operator === "*") {
        state.value = (num1 * num2).toString();
      } else if (state.operator === "/") {
        state.value = (num1 / num2).toString();
      }

      state.operator = null;
      state.firstValue = "";
    },
    clean: (state) => {
      state.value = "0";
      state.operator = null;
      state.firstValue = "";
    },
  },
});

export const { add, setOperator, calculateResult, clean } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
