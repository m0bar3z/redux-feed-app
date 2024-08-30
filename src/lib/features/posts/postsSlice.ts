import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { posts } from "@/constants/mockData";
import { RootState } from "@/lib/store";

export type PostStateType = (typeof posts)[number];

const initialState: PostStateType[] = posts;
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<string>) => {
      state.map(post => {
        if (post.id === action.payload) post.likes += 1;
        return post;
      });
    },
    deleteLike: (state, action: PayloadAction<string>) => {
      state.map(post => {
        if (post.id === action.payload) post.likes -= 1;
        return post;
      });
    },
  },
});

export const { addLike, deleteLike } = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

export default postSlice.reducer;
