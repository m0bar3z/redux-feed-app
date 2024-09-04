import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { posts } from "@/constants/mockData";
import { createAppAsyncThunk, RootState } from "@/lib/store";

interface PostStateType {
  posts: typeof posts;
  status: "idle" | "pending" | "succeeded" | "rejected";
  error: string | null;
}

const httpHeaders = { "Content-Type": "application/json" };

export const fetchPosts = createAppAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: httpHeaders,
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

export const addNewLike = createAppAsyncThunk("posts/addNewLike", async (postId: string) => {
  const response = await fetch(`http://localhost:3000/api/posts/like/${postId}`, {
    method: "PUT",
    headers: httpHeaders,
  });

  const result = await response.json();
  return result;
});

export const removeLike = createAppAsyncThunk("posts/removeLike", async (postId: string) => {
  const response = await fetch(`http://localhost:3000/api/posts/like/${postId}`, {
    method: "DELETE",
    headers: httpHeaders,
  });

  const result = await response.json();
  return result;
});

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
      })
      .addCase(addNewLike.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.map(p => (action.payload.data.id === p.id ? p.likes++ : p));
      })
      .addCase(removeLike.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.map(p => (action.payload.data.id === p.id ? p.likes-- : p));
      });
  },
});

// extra reducer for clearing posts after logging out

export const { addLike, deleteLike } = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;

export default postSlice.reducer;
