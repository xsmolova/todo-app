import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Filter } from "./Interfaces";


  const initialState = {
    search: ""
  };
  
  export const filterStateSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
      setSearchInput: (state, action: PayloadAction<Filter>) => {
        state.search = action.payload.search;
      },
      removeSearchInput: (state) => {
        state = initialState;
      },

    }
  });

 
  export const {
    setSearchInput,
    removeSearchInput
  } = filterStateSlice.actions;
  
  export const getFilter = (state: RootState) => state.filter;

  export default filterStateSlice.reducer;