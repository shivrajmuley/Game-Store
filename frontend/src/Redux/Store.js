import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./Slice/GameData";
import findProperReducer from "./Slice/FindProperty";

export const Store = configureStore({
  reducer: {
    game: gameReducer,
    find: findProperReducer,
  },
});
