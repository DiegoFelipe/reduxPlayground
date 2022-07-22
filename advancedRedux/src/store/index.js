import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./slices/ui";
import cartSlice from "./slices/cart";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
