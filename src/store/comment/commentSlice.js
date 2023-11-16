import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { socket } from '../../utils/socket'
import commentService from './commentService'

const initialState = {
  comments: [],
  currentCommentsPostId: null,
  loading: false,
  success: false,
  error: false,
}

export const createComment = createAsyncThunk(
  'comment/create',
  async (data, thunk) => {
    try {
      return await commentService.createComment(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const updateComment = createAsyncThunk(
  'comment/update',
  async (data, thunk) => {
    try {
      return await commentService.updateComment(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const deleteComment = createAsyncThunk(
  'comment/delete',
  async (data, thunk) => {
    try {
      return await commentService.deleteComment(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getCommentByPost = createAsyncThunk(
  'comment/post',
  async (data, thunk) => {
    try {
      return await commentService.getCommentByParentComment(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getCommentByParentComment = createAsyncThunk(
  'comment/list',
  async (data, thunk) => {
    try {
      return await commentService.getCommentByParentComment(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const likeComment = createAsyncThunk(
  'comment/like',
  async (data, thunk) => {
    try {
      return await commentService.likeComment(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const conversationSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setCurrentPostComments: (state, actions) => {
      state.currentCommentsPostId = actions.payload
    },
    onCreateNewComment: (state, actions) => {
      if (!actions.payload.comment_parentId) {
        let check = state.comments.filter(
          (comment) => comment._id !== actions.payload._id
        )
        check.unshift(actions.payload)
        state.comments = check
      } else {
        let update = state.comments.map((comment) => {
          if (comment._id === actions.payload.comment_parentId) {
            if (comment.commentChild) {
              comment.commentChild.unshift(actions.payload)
              comment.comment_child.push(actions.payload._id)
            } else {
              comment.commentChild = [actions.payload]
              comment.comment_child.push(actions.payload._id)
            }
          }
          return comment
        })
        state.comments = update
      }
    },
    onUpdateComment: (state, actions) => {
      let check = state.comments.map((comment) => {
        if (comment._id == actions.payload._id) {
          return actions.payload
        }
        return comment
      })
      state.comments = check
    },
    onDeleteComment: (state, actions) => {
      if (!actions.payload.comment_parentId) {
        let check = state.comments.map((comment) => {
          if (comment._id == actions.payload._id) {
            return actions.payload
          }
          return comment
        })
        state.comments = check
      } else {
        let update = state.comments.map((comment) => {
          if (comment._id === actions.payload.comment_parentId) {
            let update = comment?.commentChild?.map((cmt) => {
              if (cmt._id === actions.payload._id) {
                return actions.payload
              }
              return cmt
            })
            return { ...comment, commentChild: update }
          }
          return comment
        })
        state.comments = update
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.loading = true
      })
      .addCase(createComment.fulfilled, (state, actions) => {
        state.loading = false
        if (!actions.payload.metadata.comment_parentId) {
          let check = state.comments.filter(
            (comment) => comment._id !== actions.payload.metadata._id
          )
          check.unshift(actions.payload.metadata)
          state.comments = check
        } else {
          let update = state.comments.map((comment) => {
            if (comment._id === actions.payload.metadata.comment_parentId) {
              if (comment.commentChild) {
                comment.commentChild.unshift(actions.payload.metadata)
                comment.comment_child.push(actions.payload.metadata._id)
              } else {
                comment.commentChild = [actions.payload.metadata]
                comment.comment_child.push(actions.payload.metadata._id)
              }
            }
            return comment
          })
          state.comments = update
        }
      })
      .addCase(updateComment.pending, (state) => {
        state.loading = true
      })
      .addCase(updateComment.fulfilled, (state, actions) => {
        state.loading = false
        let check = state.comments.map((comment) => {
          if (comment._id == actions.payload.metadata._id) {
            return actions.payload.metadata
          }
          return comment
        })
        state.comments = check
      })
      .addCase(deleteComment.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteComment.fulfilled, (state, actions) => {
        state.loading = false
        if (!actions.payload.metadata.comment_parentId) {
          let check = state.comments.map((comment) => {
            if (comment._id == actions.payload.metadata._id) {
              return actions.payload.metadata
            }
            return comment
          })
          state.comments = check
        } else {
          let update = state.comments.map((comment) => {
            if (comment._id === actions.payload.metadata.comment_parentId) {
              let update = comment?.commentChild?.map((cmt) => {
                if (cmt._id === actions.payload.metadata._id) {
                  return actions.payload.metadata
                }
                return cmt
              })
              return { ...comment, commentChild: update }
            }
            return comment
          })
          state.comments = update
        }
      })
      .addCase(getCommentByParentComment.pending, (state) => {
        state.loading = true
      })
      .addCase(getCommentByPost.fulfilled, (state, actions) => {
        state.loading = false
        state.comments = actions.payload.metadata
      })
      .addCase(getCommentByParentComment.fulfilled, (state, actions) => {
        let data = actions.payload.metadata
        if (data?.[0]?.comment_parentId) {
          let update = state.comments.map((comment) => {
            if (comment._id === data?.[0].comment_parentId) {
              if (comment.commentChild) {
                data.forEach((cmt) => {
                  let checkComment = comment.commentChild.filter(
                    (check) => check._id !== cmt._id
                  )
                  checkComment.push(cmt)
                  comment.commentChild = checkComment
                })
              } else {
                comment.commentChild = data
              }
            }
            return comment
          })
          state.comments = update
        } else {
          data.forEach((comment) => {
            let check = state.comments.filter(
              (commentFilter) => commentFilter._id !== comment._id
            )
            check.push(comment)
            state.comments = check
          })
        }
      })
      .addCase(likeComment.pending, (state) => {
        state.loading = true
      })
      .addCase(likeComment.fulfilled, (state, actions) => {
        state.loading = false
        if (!actions.payload.metadata.comment_parentId) {
          let check = state.comments.map((comment) => {
            if (comment._id == actions.payload.metadata._id) {
              return actions.payload.metadata
            }
            return comment
          })
          state.comments = check
        } else {
          let update = state.comments.map((comment) => {
            if (comment._id === actions.payload.metadata.comment_parentId) {
              let update = comment?.commentChild?.map((cmt) => {
                if (cmt._id === actions.payload.metadata._id) {
                  return actions.payload.metadata
                }
                return cmt
              })
              return { ...comment, commentChild: update }
            }
            return comment
          })
          state.comments = update
        }
      })
  },
})

export const {
  setCurrentPostComments,
  onCreateNewComment,
  onDeleteComment,
  onUpdateComment,
} = conversationSlice.actions
export default conversationSlice.reducer
