import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { posts } from "@/constants/mockData";
import { RootState } from "@/lib/store";
import { createAppAsyncThunk } from "@/lib/store";

export const fetchPosts = createAppAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await fetch("http://localhost:3000/api", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();

    return result;
  },
  {
    condition: (arg, thunkApi) => {
      const postStatus = selectPostsStatus(thunkApi.getState());
      if (postStatus !== "idle") return false;
    },
  }
);

interface PostStateType {
  posts: typeof posts;
  status: "idle" | "pending" | "succeeded" | "rejected";
  error: string | null;
}

const initialState: PostStateType = {
  posts: [],
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<string>) => {
      state.posts.map(post => {
        if (post.id === action.payload) post.likes += 1;
        return post;
      });
    },
    deleteLike: (state, action: PayloadAction<string>) => {
      state.posts.map(post => {
        if (post.id === action.payload) post.likes -= 1;
        return post;
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.push(...action.payload.data);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message ?? "Unknown Error";
      });
  },
});

// extra reducer for clearing posts after logging out

export const { addLike, deleteLike } = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;

export default postSlice.reducer;
