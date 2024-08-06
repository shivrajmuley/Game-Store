import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const game = createAsyncThunk("game", async () => {
  const response = await axios.get("http://localhost:8000/");
  return response.data;
});
const GameData = createSlice({
  name: "game",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(game.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(game.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(game.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default GameData.reducer;
