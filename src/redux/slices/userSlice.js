import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    currentUser:{},
    isAdmin:false,
    error: null,
};
const userSlice = createSlice({
    name: "user",
  initialState,
  reducers: {
    setUser(state,action){
        let inf = action.payload;
        state.currentUser = inf;
    },
    setRole(state,action){
        let inf = action.payload;
        state.isAdmin = inf;
    }
  },
})


export const {setUser,setRole} = userSlice.actions;
export default userSlice.reducer;
