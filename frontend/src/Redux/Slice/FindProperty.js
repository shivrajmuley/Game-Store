import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const findProper = createAsyncThunk("findProper", async ({ id }) => {
  console.log(id);

  const response = await axios.get(`http://localhost:8000/properties/${id}`);

  return response.data;
});
const FindProperty = createSlice({
  name: "findProper",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(findProper.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(findProper.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(findProper.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default FindProperty.reducer;
