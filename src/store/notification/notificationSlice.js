import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import notificationService from './notificationService'

const initialState = {
  notification: [],
  loading: false,
  success: false,
  error: false,
  message: '',
}

export const createNotification = createAsyncThunk(
  'create',
  async (data, thunk) => {
    try {
      return await notificationService.createNotification(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getListNotification = createAsyncThunk(
  'getList',
  async (data, thunk) => {
    try {
      return await notificationService.getListNotification(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getNotification = createAsyncThunk('get', async (data, thunk) => {
  try {
    return await notificationService.getNotification(data)
  } catch (error) {
    return thunk.rejectWithValue(error)
  }
})

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    updateNotification: (state, actions) => {
      state.notification.push(...actions.payload)
    },
    pushNotification: (state, actions) => {
      let notification = actions.payload
      toast.info(
        `${notification.noti_senderId.name} ${notification.noti_content}`,
        {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      )
      if (!state.notification.find((noti) => noti._id === notification._id)) {
        state.notification.unshift(notification)
      } else {
        let update = state.notification.map((noti) => {
          if (noti._id === notification._id) {
            return notification
          }
          return noti
        })
        state.notification = update
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNotification.fulfilled, (state, actions) => {
        if (
          !state.notification.find(
            (noti) => noti._id === actions.payload.metadata._id
          )
        ) {
          state.notification.unshift(actions.payload.metadata)
        }
      })
      .addCase(getListNotification.pending, (state, actions) => {
        state.loading = true
      })
      .addCase(getListNotification.fulfilled, (state, actions) => {
        state.loading = false
        actions.payload.metadata?.forEach((noti) => {
          if (!state.notification.find((not) => not._id === noti._id)) {
            state.notification.push(noti)
          }
        })
      })
      .addCase(getNotification.fulfilled, (state, actions) => {
        let notification = actions.payload.metadata
        toast.info(
          `${notification.noti_senderId.name} ${notification.noti_content}`,
          {
            position: 'bottom-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          }
        )
        if (!state.notification.find((noti) => noti._id === notification._id)) {
          state.notification.unshift(notification)
        } else {
          let update = state.notification.map((noti) => {
            if (noti._id === notification._id) {
              return notification
            }
            return noti
          })
          state.notification = update
        }
      })
  },
})

export const { updateNotification, pushNotification } =
  notificationSlice.actions
export default notificationSlice.reducer
