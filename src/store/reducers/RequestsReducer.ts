import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const requestsSlice = createSlice({
  name: "request",
  initialState: initialState,
  reducers: {
    addRequest: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

export const { addRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
