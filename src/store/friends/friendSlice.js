import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import friendsService from './friendsService'
import { toast } from 'react-toastify'

const initialState = {
  friends: [],
  friendsRequest: [],
  friendsInvited: [],
  friendsSuggest: [],
  friendsSearch: [],
  loading: false,
  success: false,
  error: false,
  message: '',
}

export const getAllFriends = createAsyncThunk(
  'friends/all',
  async (id, thunk) => {
    try {
      return await friendsService.getAllFriends(id)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const findFriendsByName = createAsyncThunk(
  'friends/search',
  async (id, thunk) => {
    try {
      return await friendsService.findFriendsByName(id)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getAllFriendsRequestUser = createAsyncThunk(
  'friends/request',
  async (id, thunk) => {
    try {
      return await friendsService.getAllFriendsRequestUser(id)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getAllFriendsInvitedUser = createAsyncThunk(
  'friends/invited',
  async (id, thunk) => {
    try {
      return await friendsService.getAllFriendsInvitedUser(id)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getUsersSuggest = createAsyncThunk(
  'friends/suggest',
  async (id, thunk) => {
    try {
      return await friendsService.getUsersSuggest(id)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const addFriend = createAsyncThunk(
  'friends/addFriend',
  async (id, thunk) => {
    try {
      return await friendsService.addFriend(id)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const cancelAddFriend = createAsyncThunk(
  'friends/cancelAddFriend',
  async (id, thunk) => {
    try {
      return await friendsService.cancelAddFriend(id)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const unfriendUser = createAsyncThunk(
  'friends/unfriendUser',
  async (id, thunk) => {
    try {
      return await friendsService.unfriendUser(id)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const acceptFriend = createAsyncThunk(
  'friends/acceptFriend',
  async (id, thunk) => {
    try {
      return await friendsService.acceptFriend(id)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const refuseFriend = createAsyncThunk(
  'friends/refuseFriend',
  async (id, thunk) => {
    try {
      return await friendsService.refuseFriend(id)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    deleteUser: (state, actions) => {
      const update = state.friendsSuggest.filter(
        (user) => user._id !== actions.payload._id
      )
      state.friendsSuggest = update
      state.friendsInvited.push(actions.payload)
    },
    addFriendSocket: (state, actions) => {
      let update = state.friendsSuggest.filter(
        (user) => user._id !== actions.payload._id
      )
      state.friendsSuggest = update
      let newupdate = state.friendsRequest.filter(
        (user) => user._id !== actions.payload._id
      )
      newupdate.push(actions.payload)
      state.friendsRequest = newupdate
    },
    cancelAddFriendSocket: (state, actions) => {
      const update = state.friendsRequest.filter(
        (user) => user._id !== actions.payload._id
      )
      state.friendsRequest = update
      let newupdate = state.friendsSuggest.filter(
        (user) => user._id !== actions.payload._id
      )
      newupdate.push(actions.payload)
      state.friendsSuggest = newupdate
    },
    refuseFriendSocket: (state, actions) => {
      const update = state.friendsInvited.filter(
        (user) => user._id !== actions.payload._id
      )
      state.friendsInvited = update
      let newupdate = state.friendsSuggest.filter(
        (user) => user._id !== actions.payload._id
      )
      newupdate.push(actions.payload)
      state.friendsSuggest = newupdate
    },
    acceptFriendSocket: (state, actions) => {
      const update = state.friendsInvited.filter(
        (user) => user._id !== actions.payload._id
      )
      state.friendsInvited = update
      let newupdate = state.friends.filter(
        (user) => user._id !== actions.payload._id
      )
      newupdate.push(actions.payload)
      state.friends = newupdate
    },
    unfriendUserSocket: (state, actions) => {
      const update = state.friends.filter(
        (user) => user._id !== actions.payload._id
      )
      state.friends = update
      let newupdate = state.friendsSuggest.filter(
        (user) => user._id !== actions.payload._id
      )
      newupdate.push(actions.payload)
      state.friendsSuggest = newupdate
    },
    resetFriendSearch: (state) => {
      state.friendsSearch = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFriends.fulfilled, (state, actions) => {
        state.friends = actions.payload.metadata
      })
      .addCase(findFriendsByName.pending, (state, actions) => {
        state.loading = true
      })
      .addCase(findFriendsByName.fulfilled, (state, actions) => {
        state.loading = false
        state.friendsSearch = actions.payload.metadata
      })
      .addCase(getAllFriendsRequestUser.fulfilled, (state, actions) => {
        state.friendsRequest = actions.payload.metadata
      })
      .addCase(getAllFriendsInvitedUser.fulfilled, (state, actions) => {
        state.friendsInvited = actions.payload.metadata
      })
      .addCase(getUsersSuggest.fulfilled, (state, actions) => {
        state.friendsSuggest = actions.payload.metadata
      })
      .addCase(addFriend.fulfilled, (state, actions) => {
        const update = state.friendsSuggest.filter(
          (user) => user._id !== actions.payload.metadata._id
        )
        state.friendsSuggest = update
        state.friendsInvited.push(actions.payload.metadata)
      })
      .addCase(cancelAddFriend.fulfilled, (state, actions) => {
        const update = state.friendsInvited.filter(
          (user) => user._id !== actions.payload.metadata._id
        )
        state.friendsInvited = update
        state.friendsSuggest.push(actions.payload.metadata)
      })
      .addCase(acceptFriend.fulfilled, (state, actions) => {
        const update = state.friendsRequest.filter(
          (user) => user._id !== actions.payload.metadata._id
        )
        state.friendsRequest = update
        state.friends.push(actions.payload.metadata)
      })
      .addCase(refuseFriend.fulfilled, (state, actions) => {
        const update = state.friendsRequest.filter(
          (user) => user._id !== actions.payload.metadata._id
        )
        state.friendsRequest = update
        state.friendsSuggest.push(actions.payload.metadata)
      })
      .addCase(unfriendUser.fulfilled, (state, actions) => {
        const update = state.friends.filter(
          (user) => user._id !== actions.payload.metadata._id
        )
        state.friends = update
        state.friendsSuggest.push(actions.payload.metadata)
      })
  },
})

export const {
  deleteUser,
  addFriendSocket,
  cancelAddFriendSocket,
  refuseFriendSocket,
  acceptFriendSocket,
  unfriendUserSocket,
  resetFriendSearch,
} = friendsSlice.actions
export default friendsSlice.reducer
