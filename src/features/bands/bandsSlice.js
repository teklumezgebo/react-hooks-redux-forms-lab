import { createSlice } from "@reduxjs/toolkit";

export function bandAdded(band) {
  return { type: "bands/bandAdded", payload: band }
}

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    bandAdded(state, action) {
      state.entities.push(action.payload)
    }
  },
});

export default bandsSlice.reducer;
