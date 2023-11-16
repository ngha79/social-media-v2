import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import postService from './postService'

const initialState = {
  posts: [],
  postsProfile: [],
  postsSearch: [],
  profile: {},
  images: [],
  indexImage: 0,
  loading: false,
  success: false,
  error: false,
  message: '',
}

export const createPost = createAsyncThunk(
  '/posts/craete',
  async (data, thunk) => {
    try {
      return await postService.createPost(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getAllPost = createAsyncThunk(
  '/posts/all',
  async (data, thunk) => {
    try {
      return await postService.getAllPost(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getAllPostProfile = createAsyncThunk(
  '/posts/profile',
  async (data, thunk) => {
    try {
      return await postService.getAllPostProfile(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getAllPostProfilePage = createAsyncThunk(
  '/posts/profile-page',
  async (data, thunk) => {
    try {
      return await postService.getAllPostProfile(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const likePost = createAsyncThunk('/posts/like', async (data, thunk) => {
  try {
    return await postService.likePost(data)
  } catch (error) {
    return thunk.rejectWithValue(error)
  }
})

export const deletePost = createAsyncThunk(
  '/posts/delete',
  async (data, thunk) => {
    try {
      return await postService.deletePost(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const deletePostProfile = createAsyncThunk(
  '/posts/delete-profile',
  async (data, thunk) => {
    try {
      return await postService.deletePost(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const updatePost = createAsyncThunk(
  '/posts/update-post',
  async (data, thunk) => {
    try {
      return await postService.updatePost(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const sharePost = createAsyncThunk(
  '/posts/share-post',
  async (data, thunk) => {
    try {
      return await postService.sharePost(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getPostById = createAsyncThunk(
  '/posts/get-post',
  async (data, thunk) => {
    try {
      return await postService.getPostById(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getPostSearch = createAsyncThunk(
  '/posts/search',
  async (data, thunk) => {
    try {
      return await postService.getPostSearch(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getPostSearchPage = createAsyncThunk(
  '/posts/search-page',
  async (data, thunk) => {
    try {
      return await postService.getPostSearch(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    showImage: (state, action) => {
      state.images = action.payload.images
      state.indexImage = action.payload.index
    },
    resetImageShow: (state, action) => {
      state.images = []
      state.indexImage = 0
    },
    resetPostProfile: (state) => {
      state.postsProfile = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state, actions) => {
        state.loading = true
      })
      .addCase(createPost.fulfilled, (state, actions) => {
        state.loading = false
        let check = state.posts.filter(
          (post) => post._id !== actions.payload.metadata?._id
        )
        state.posts = check
        state.posts.unshift(actions.payload.metadata)
        state.postsProfile.unshift(actions.payload.metadata)
      })
      .addCase(getAllPost.fulfilled, (state, actions) => {
        let check = state.posts.find(
          (post) => post._id === actions.payload.metadata?.[0]?._id
        )
        if (!check) state.posts.push(...actions.payload.metadata)
      })
      .addCase(likePost.fulfilled, (state, actions) => {
        let update = state.posts.map((post) => {
          if (post._id === actions.payload.metadata?._id) {
            return { ...post, like: actions.payload.metadata.like }
          }
          return post
        })
        state.posts = update
        update = state.postsProfile.map((post) => {
          if (post._id === actions.payload.metadata?._id) {
            return { ...post, like: actions.payload.metadata.like }
          }
          return post
        })
        state.postsProfile = update
      })
      .addCase(deletePost.fulfilled, (state, actions) => {
        let update = state.posts.filter(
          (post) => post._id !== actions.payload.metadata?._id
        )
        state.posts = update
        update = state.postsProfile.filter(
          (post) => post._id !== actions.payload.metadata._id
        )
        state.postsProfile = update
      })
      .addCase(deletePostProfile.fulfilled, (state, actions) => {
        let update = state.postsProfile.filter(
          (post) => post._id !== actions.payload.metadata._id
        )
        state.postsProfile = update
        update = state.posts.filter(
          (post) => post._id !== actions.payload.metadata._id
        )
        state.posts = update
      })
      .addCase(getAllPostProfile.fulfilled, (state, actions) => {
        state.postsProfile = actions.payload.metadata
      })
      .addCase(getAllPostProfilePage.fulfilled, (state, actions) => {
        actions.payload.metadata?.forEach((postPage) => {
          if (!state.postsProfile?.find((post) => post._id === postPage._id)) {
            state.postsProfile.push(postPage)
          }
        })
      })
      .addCase(updatePost.pending, (state, actions) => {
        state.loading = true
      })
      .addCase(updatePost.fulfilled, (state, actions) => {
        state.loading = false
        let update = state.postsProfile.map((post) => {
          if (post._id === actions.payload.metadata._id) {
            return actions.payload.metadata
          }
          return post
        })
        state.postsProfile = update
        update = state.posts.map((post) => {
          if (post._id === actions.payload.metadata._id) {
            return actions.payload.metadata
          }
          return post
        })
        state.posts = update
      })
      .addCase(sharePost.fulfilled, (state, actions) => {
        let update = state.posts.filter(
          (post) => post !== actions.payload.metadata._id
        )
        update.unshift(actions.payload.metadata)
        state.posts = update
      })
      .addCase(getPostById.fulfilled, (state, actions) => {
        if (actions.payload.metadata) {
          let update = state.posts.filter(
            (post) => post._id !== actions.payload.metadata._id
          )
          update.unshift(actions.payload.metadata)
          state.posts = update
        }
      })
      .addCase(getPostSearch.fulfilled, (state, actions) => {
        const data = actions.payload.metadata
        state.postsSearch = data
      })
      .addCase(getPostSearchPage.fulfilled, (state, actions) => {
        const data = actions.payload.metadata
        for (let index = 0; index < data.length; index++) {
          const element = data[index]
          if (!state.postsSearch.find((post) => post._id === element._id)) {
            state.postsSearch.push(element)
          }
        }
      })
  },
})

export const { showImage, resetImageShow, resetPostProfile } = PostSlice.actions
export default PostSlice.reducer
