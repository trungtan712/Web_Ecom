import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../redux/slices/authSlice";
import userReducer from "../redux/slices/userSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    // auth: authReducer,
    user: userReducer,
  },
});

export default store;
