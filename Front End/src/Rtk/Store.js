import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./Slices/CardSlice";

const store = configureStore({
  reducer: {
    Card: CardSlice,
  },
})
export default store;