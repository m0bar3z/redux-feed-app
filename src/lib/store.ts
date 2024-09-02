import { type Action, configureStore, createAsyncThunk, type ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import postsReducer from "./features/posts/postsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      posts: postsReducer,
    },
  });
};
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
// about thunks:
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
