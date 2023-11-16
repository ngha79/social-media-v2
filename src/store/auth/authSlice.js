import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'
import { toast } from 'react-toastify'
import { socket } from '../../utils/socket'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  userSearch: [],
  profile: null,
  loading: false,
  success: false,
  error: false,
  message: '',
}

export const logout = createAsyncThunk('auth/logout', async (thunk) => {
  try {
    return await authService.logout()
  } catch (error) {
    return thunk.rejectWithValue(error)
  }
})

export const updateProfileUser = createAsyncThunk(
  'auth/update',
  async (data, thunk) => {
    try {
      return await authService.updateProfileUser(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const updateUser = createAsyncThunk(
  'auth/update-user',
  async (data, thunk) => {
    try {
      return await authService.updateUser(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getProfileUser = createAsyncThunk(
  '/user/profile',
  async (data, thunk) => {
    try {
      return await authService.getProfileUser(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const changePasswordUser = createAsyncThunk(
  '/user/update/password',
  async (data, thunk) => {
    try {
      return await authService.changePasswordUser(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const createOtp = createAsyncThunk(
  '/user/create-otp',
  async (data, thunk) => {
    try {
      return await authService.createOtp(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const updateForgotPassword = createAsyncThunk(
  '/user/update/forgot-password',
  async (data, thunk) => {
    try {
      return await authService.updateForgotPassword(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const usersSearch = createAsyncThunk(
  '/user/search-users',
  async (data, thunk) => {
    try {
      return await authService.usersSearch(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const usersSearchPage = createAsyncThunk(
  '/user/search-users-page',
  async (data, thunk) => {
    try {
      return await authService.usersSearch(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, actions) => {
      localStorage.setItem('x-client-id', actions.payload?._id)
      localStorage.setItem('user', JSON.stringify(actions.payload))
      state.user = actions.payload
    },
    resetUser: (state, actions) => {
      localStorage.removeItem('x-client-id')
    },
    setUserForm: (state, actions) => {
      localStorage.setItem('x-client-id', actions.payload.user?._id)
      state.user = actions.payload.user
    },
    resetState: (state) => {
      state.loading = false
      state.success = false
      state.error = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        socket.emit('logout', 'logout account')
        state.user = null
        localStorage.clear()
      })
      .addCase(logout.rejected, (state) => {
        socket.emit('logout', 'logout account')
        state.user = null
        localStorage.clear()
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true
      })
      .addCase(updateUser.fulfilled, (state, actions) => {
        state.loading = false
        state.user = actions.payload?.data?.metadata
        toast.success('Cập nhật thông tin thành công.')
      })
      .addCase(updateUser.rejected, (state) => {
        toast.error('Có lỗi sảy ra, vui lòng thử lại sau!')
      })
      .addCase(updateProfileUser.fulfilled, (state, actions) => {
        localStorage.setItem('user', JSON.stringify(actions.payload.metadata))
        state.user = actions.payload.metadata
        toast.success('Cập nhật thông tin thành công.')
      })
      .addCase(getProfileUser.fulfilled, (state, actions) => {
        state.profile = actions.payload.metadata
      })
      .addCase(changePasswordUser.pending, (state, actions) => {
        state.loading = true
      })
      .addCase(changePasswordUser.fulfilled, (state, actions) => {
        state.loading = false
        state.success = true
      })
      .addCase(changePasswordUser.rejected, (state, actions) => {
        state.error = true
        state.message = actions.payload.message
      })
      .addCase(createOtp.pending, (state) => {
        state.loading = true
      })
      .addCase(createOtp.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(createOtp.rejected, (state, actions) => {
        state.error = true
        state.message = actions.payload.message
      })
      .addCase(updateForgotPassword.pending, (state) => {
        state.loading = true
      })
      .addCase(updateForgotPassword.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(updateForgotPassword.rejected, (state, actions) => {
        state.error = true
        state.message = actions.payload.message
      })
      .addCase(usersSearch.fulfilled, (state, actions) => {
        const data = actions.payload.metadata
        state.userSearch = data
      })
      .addCase(usersSearchPage.fulfilled, (state, actions) => {
        const data = actions.payload.metadata
        for (let index = 0; index < data.length; index++) {
          const element = data[index]
          if (!state.userSearch.find((user) => user._id === element._id)) {
            state.userSearch.push(element)
          }
        }
      })
  },
})

export const { setUser, resetUser, resetState } = authSlice.actions
export default authSlice.reducer
