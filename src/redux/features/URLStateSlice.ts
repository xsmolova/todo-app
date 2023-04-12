import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface URLState {
  url: string;
};

const initialState: URLState = {
  url: "/"
};

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