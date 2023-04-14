import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  url: ""
} 

export const URLStateSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setURL: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    }
  }
});

export const {
  setURL
} = URLStateSlice.actions;

export default URLStateSlice.reducer;