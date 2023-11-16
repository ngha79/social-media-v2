import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../store/auth/authSlice'
import friendsReducer from '../store/friends/friendSlice'
import postsReducer from '../store/post/postSlice'
import conversationReducer from '../store/conversation/conversationSlice'
import commentReducer from '../store/comment/commentSlice'
import notificationReducer from '../store/notification/notificationSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    friends: friendsReducer,
    posts: postsReducer,
    conversation: conversationReducer,
    comments: commentReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
