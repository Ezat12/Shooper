import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  initialState: [],
  name: "cardSlice",
  reducers: {
    addCard:  (state, action) => {
      if (localStorage.getItem("token")) {
        
        fetch("http://localhost:5000/addtocard", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product: action.payload }),
        })
      }

      const found = state.find((p) => p.id === action.payload.id);

      if (found) {
        found.Quantity += 1;
      } else {
        const product = { ...action.payload, Quantity: 1 };
        state.push(product);
      }
    },
    removeCard: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);

      if (item.Quantity === 1) {
        return (state = state.filter((p) => p.id !== action.payload.id));
      } else {
        item.Quantity--;
      }
    },
  },
});

export const { addCard, removeCard } = CardSlice.actions;
export default CardSlice.reducer;
