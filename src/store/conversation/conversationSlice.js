import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import conversationService from './conversationService'
import { socket } from '../../utils/socket'

const initialState = {
  conversation: [],
  conversationGroup: [],
  conversationFriend: [],
  conversationSearch: [],
  messageConversation: [],
  popupListChat: [],
  iconListPopup: [],
  loading: false,
  success: false,
  error: false,
  message: '',
  currentPage: 0,
  conversationId: '',
  cancelCall: false,
  newConversationUser: null,
  checkConversation: null,
}

export const createConversation = createAsyncThunk(
  'conversation/create',
  async (data, thunk) => {
    try {
      return await conversationService.createConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getAllConversation = createAsyncThunk(
  'conversation/all',
  async (data, thunk) => {
    try {
      return await conversationService.getAllConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getAllConversationPage = createAsyncThunk(
  'conversation/all-page',
  async (data, thunk) => {
    try {
      return await conversationService.getAllConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const findConversationByName = createAsyncThunk(
  'conversation/search',
  async (data, thunk) => {
    try {
      return await conversationService.findConversationByName(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const addUserToConversation = createAsyncThunk(
  'conversation/add',
  async (data, thunk) => {
    try {
      return await conversationService.addUserToConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const acceptToConversation = createAsyncThunk(
  'conversation/accept',
  async (data, thunk) => {
    try {
      return await conversationService.acceptToConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const kickMemberConversation = createAsyncThunk(
  'conversation/kick',
  async (data, thunk) => {
    try {
      return await conversationService.kickMemberConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const leaveConversation = createAsyncThunk(
  'conversation/leave',
  async (data, thunk) => {
    try {
      return await conversationService.leaveConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const disbandConversation = createAsyncThunk(
  'conversation/disband',
  async (data, thunk) => {
    try {
      return await conversationService.disbandConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const updateConversation = createAsyncThunk(
  'conversation/update',
  async (data, thunk) => {
    try {
      return await conversationService.updateConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getMessageByConversation = createAsyncThunk(
  'conversation/message',
  async (data, thunk) => {
    try {
      return await conversationService.getMessageByConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getMessageByConversationPopup = createAsyncThunk(
  'conversation/message-popup',
  async (data, thunk) => {
    try {
      return await conversationService.getMessageByConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getMessageByConversationScroll = createAsyncThunk(
  'conversation/message-scroll',
  async (data, thunk) => {
    try {
      return await conversationService.getMessageByConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const createNewMessage = createAsyncThunk(
  'conversation/new-message',
  async (data, thunk) => {
    try {
      return await conversationService.createNewMessage(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const createNewMessageInNewConversation = createAsyncThunk(
  'conversation/new-message-conversation',
  async (data, thunk) => {
    try {
      return await conversationService.createNewMessage(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const deleteMessage = createAsyncThunk(
  'conversation/delete-message',
  async (data, thunk) => {
    try {
      return await conversationService.deleteMessage(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const deleteMessageOnlyMe = createAsyncThunk(
  'conversation/delete-message-me',
  async (data, thunk) => {
    try {
      return await conversationService.deleteMessageOnlyMe(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const reactMessage = createAsyncThunk(
  'conversation/react',
  async (data, thunk) => {
    try {
      return await conversationService.reactMessage(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getConversationFriend = createAsyncThunk(
  'conversation/friend',
  async (data, thunk) => {
    try {
      return await conversationService.getAllConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getConversationFriendPage = createAsyncThunk(
  'conversation/friend-page',
  async (data, thunk) => {
    try {
      return await conversationService.getAllConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getConversationGroup = createAsyncThunk(
  'conversation/group',
  async (data, thunk) => {
    try {
      return await conversationService.getAllConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getConversationGroupPage = createAsyncThunk(
  'conversation/group-page',
  async (data, thunk) => {
    try {
      return await conversationService.getAllConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const findConversationByUser = createAsyncThunk(
  'conversation/find',
  async (data, thunk) => {
    try {
      return await conversationService.findConversationByUser(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getStatusConversation = createAsyncThunk(
  'conversation/statusConversation',
  async (data, thunk) => {
    try {
      return await conversationService.getStatusConversation(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const getStatusUser = createAsyncThunk(
  'conversation/statusUser',
  async (data, thunk) => {
    try {
      return await conversationService.getStatusUser(data)
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  }
)

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    onCreateConversation: (state, actions) => {
      let check = state.conversation.filter(
        (conversation) => conversation._id !== actions.payload._id
      )
      check.unshift(actions.payload)
      state.conversation = check
    },
    onAddUserToConversation: (state, actions) => {
      let check = state.conversation.filter(
        (conversation) => conversation._id !== actions.payload._id
      )
      check.unshift(actions.payload)
      state.conversation = check
    },
    toAddUserToConversation: (state, actions) => {
      let update = state.conversation.map((conversation) => {
        if (conversation._id === actions.payload._id) {
          return actions.payload
        }
        return conversation
      })
      state.conversation = update
      update = state.popupListChat.map((conversation) => {
        if (conversation._id === actions.payload._id) {
          let newUpdate = {
            ...actions.payload,
            messages: conversation?.messages,
          }

          return newUpdate
        }
        return conversation
      })
      state.popupListChat = update
    },
    toConversationKickMember: (state, actions) => {
      let update = state.conversation.map((conversation) => {
        if (conversation._id === actions.payload._id) {
          return actions.payload
        }
        return conversation
      })
      state.conversation = update
      update = state.popupListChat.map((conversation) => {
        if (conversation._id === actions.payload._id) {
          let newUpdate = {
            ...actions.payload,
            messages: conversation?.messages,
          }

          return newUpdate
        }
        return conversation
      })
      state.popupListChat = update
    },
    toUserKickFromConversation: (state, actions) => {
      let update = state.conversation.filter(
        (conversation) => conversation._id !== actions.payload._id
      )
      state.conversation = update
      update = state.popupListChat.filter(
        (conversation) => conversation._id !== actions.payload._id
      )
      state.popupListChat = update
      if (state.checkConversation._id === actions.payload._id) {
        state.checkConversation = null
      }
    },
    toConversationMemberLeave: (state, actions) => {
      let update = state.conversation.map((conversation) => {
        if (conversation._id === actions.payload._id) {
          return actions.payload
        }
        return conversation
      })
      state.conversation = update
      update = state.popupListChat.map((conversation) => {
        if (conversation._id === actions.payload._id) {
          let newUpdate = {
            ...actions.payload,
            messages: conversation?.messages,
          }

          return newUpdate
        }
        return conversation
      })
      state.popupListChat = update
    },
    toConversationDisband: (state, actions) => {
      let update = state.conversation.filter(
        (conversation) => conversation._id !== actions.payload._id
      )
      state.conversation = update
      update = state.popupListChat.filter(
        (conversation) => conversation._id !== actions.payload._id
      )
      state.popupListChat = update
      if (state.checkConversation._id === actions.payload._id) {
        state.checkConversation = null
      }
    },
    toConversationUpdate: (state, actions) => {
      let update = state.conversation.map((conversation) => {
        if (conversation._id === actions.payload._id) {
          return actions.payload
        }
        return conversation
      })
      state.conversation = update
      update = state.popupListChat.map((conversation) => {
        if (conversation._id === actions.payload._id) {
          let newUpdate = {
            ...actions.payload,
            messages: conversation?.messages,
          }

          return newUpdate
        }
        return conversation
      })
      state.popupListChat = update
    },
    setCurrentMessage: (state, actions) => {
      state.conversationId = actions.payload
    },
    onCreateNewMessage: (state, actions) => {
      if (state.conversationId === actions.payload.conversation._id) {
        let update = state.messageConversation.filter(
          (message) => message._id !== actions.payload.newMessage._id
        )
        update.push(actions.payload.newMessage)
        state.messageConversation = update
      }
      if (
        state.conversation.find(
          (conver) => conver._id === actions.payload.conversation._id
        )
      ) {
        let updateConversation = state.conversation.map((conversation) => {
          if (conversation._id === actions.payload.conversation._id) {
            conversation.lastMessage = actions.payload.conversation.lastMessage
          }
          return conversation
        })
        state.conversation = updateConversation
      } else {
        state.conversation.unshift(actions.payload.conversation)
      }
      if (
        !state.iconListPopup.find(
          (conver) => conver._id === actions.payload.conversation._id
        )
      ) {
        if (
          !state.popupListChat.find(
            (conver) => conver._id === actions.payload.conversation._id
          )
        ) {
          state.popupListChat.unshift(actions.payload.conversation)
        } else {
          let updateConversation = state.popupListChat.map((conversation) => {
            if (conversation._id === actions.payload.conversation._id) {
              let currentMessage = conversation?.messages?.filter(
                (message) => message._id !== actions.payload.newMessage._id
              )
              if (currentMessage) {
                currentMessage.push(actions.payload.newMessage)
              } else {
                currentMessage = [actions.payload.newMessage]
              }
              conversation.messages = currentMessage
              return conversation
            }
            return conversation
          })
          state.popupListChat = updateConversation
        }
      } else {
        let updateConversation = state.iconListPopup.map((conversation) => {
          if (conversation._id === actions.payload.conversation._id) {
            let currentMessage = conversation?.messages?.filter(
              (message) => message._id !== actions.payload.newMessage._id
            )
            if (currentMessage) {
              currentMessage.push(actions.payload.newMessage)
            } else {
              currentMessage = [actions.payload.newMessage]
            }
            conversation.messages = currentMessage
            return conversation
          }
          return conversation
        })
        state.iconListPopup = updateConversation
      }
    },
    onDeleteMessage: (state, actions) => {
      if (state.conversationId === actions.payload.conversationId) {
        let update = state.messageConversation.map((message) => {
          if (message._id === actions.payload._id) {
            return actions.payload
          }
          return message
        })
        state.messageConversation = update
      }
      let update = state.conversation.map((conver) => {
        if (conver._id === actions.payload.conversationId) {
          conver.lastMessage.isDeleted = true
        }
        return conver
      })
      state.conversation = update
      let newupdate = state.popupListChat.map((conversation) => {
        if (conversation._id === actions.payload.conversationId) {
          let currentUpdate = conversation?.messages?.map((message) => {
            if (message._id === actions.payload._id) {
              return actions.payload
            }
            return message
          })
          conversation.messages = currentUpdate
          return conversation
        }
        return conversation
      })
      state.popupListChat = newupdate
    },
    onReactMessage: (state, actions) => {
      if (state.conversationId === actions.payload.conversationId) {
        let update = state.messageConversation.map((message) => {
          if (message._id === actions.payload._id) {
            return actions.payload
          }
          return message
        })
        state.messageConversation = update
      }
      let newupdate = state.popupListChat.map((conversation) => {
        if (conversation._id === actions.payload.conversationId) {
          let currentUpdate = conversation?.messages?.map((message) => {
            if (message._id === actions.payload._id) {
              return actions.payload
            }
            return message
          })
          conversation.messages = currentUpdate
          return conversation
        }
        return conversation
      })
      state.popupListChat = newupdate
    },
    closePopup: (state, actions) => {
      let update = state.popupListChat.filter(
        (popup) => popup._id !== actions.payload._id
      )
      state.popupListChat = update
    },
    miniIconPopup: (state, actions) => {
      let update = state.popupListChat.filter(
        (popup) => popup._id !== actions.payload._id
      )
      state.popupListChat = update
      state.iconListPopup.push(actions.payload)
    },
    openMiniPopup: (state, actions) => {
      let update = state.iconListPopup.filter(
        (popup) => popup._id !== actions.payload._id
      )
      state.iconListPopup = update
      state.popupListChat.push(actions.payload)
    },
    deleteAllMiniPopup: (state, actions) => {
      state.iconListPopup = []
      state.popupListChat = []
    },
    deleteMiniPopup: (state, actions) => {
      let update = state.iconListPopup.filter(
        (popup) => popup._id !== actions.payload._id
      )
      state.iconListPopup = update
    },
    setIsCallVideo: (state, actions) => {
      state.cancelCall = true
      state.conversationId = actions.payload
    },
    cancelCallVideo: (state, actions) => {
      state.cancelCall = false
    },
    newConversation: (state, actions) => {
      let update = state.conversation.filter(
        (conver) => conver._id !== actions.payload._id
      )
      update.unshift(actions.payload)
      state.conversation = update
    },
    newMessageUser: (state, action) => {
      state.newConversationUser = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createConversation.pending, (state) => {
        state.loading = true
      })
      .addCase(createConversation.fulfilled, (state, actions) => {
        state.loading = false
        let check = state.conversation.filter(
          (conversation) => conversation._id !== actions.payload.metadata._id
        )
        check.unshift(actions.payload.metadata)
        state.conversation = check
      })
      .addCase(getAllConversation.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllConversation.fulfilled, (state, actions) => {
        state.loading = false
        state.conversation = actions.payload.metadata
      })
      .addCase(getAllConversationPage.fulfilled, (state, actions) => {
        const conversation = actions.payload.metadata
        conversation.forEach((conver) => {
          if (!state.conversation.find((con) => con._id === conver._id)) {
            state.conversation.push(conver)
          }
        })
      })
      .addCase(findConversationByName.fulfilled, (state, actions) => {
        let check = state.conversation.filter(
          (conversation) => conversation._id !== actions.payload.metadata._id
        )
        check.unshift(actions.payload.metadata)
        state.conversation = check
      })
      .addCase(addUserToConversation.fulfilled, (state, actions) => {
        let update = state.conversation.map((conversation) => {
          if (conversation._id === actions.payload.metadata._id) {
            return actions.payload.metadata
          }
          return conversation
        })
        state.conversation = update
      })
      .addCase(acceptToConversation.fulfilled, (state, actions) => {
        let check = state.conversation.filter(
          (conversation) => conversation._id !== actions.payload.metadata._id
        )
        check.unshift(actions.payload.metadata)
        state.conversation = check
      })
      .addCase(kickMemberConversation.fulfilled, (state, actions) => {
        let update = state.conversation.map((conversation) => {
          if (conversation._id === actions.payload.metadata._id) {
            return actions.payload.metadata
          }
          return conversation
        })
        state.conversation = update
      })
      .addCase(leaveConversation.fulfilled, (state, actions) => {
        let check = state.conversation.filter(
          (conversation) => conversation._id !== actions.payload.metadata._id
        )
        state.conversation = check
        state.checkConversation = null
      })
      .addCase(disbandConversation.fulfilled, (state, actions) => {
        let check = state.conversation.filter(
          (conversation) => conversation._id !== actions.payload.metadata._id
        )
        state.conversation = check
        if (state.checkConversation._id === actions.payload.metadata._id) {
          state.checkConversation = null
        }
      })
      .addCase(updateConversation.fulfilled, (state, actions) => {
        let update = state.conversation.map((conversation) => {
          if (conversation._id === actions.payload.metadata._id) {
            return actions.payload.metadata
          }
          return conversation
        })
        state.conversation = update
      })
      .addCase(getMessageByConversation.fulfilled, (state, actions) => {
        state.messageConversation = Array.from(
          actions.payload.metadata
        ).reverse()
        state.currentPage = 1
      })
      .addCase(getMessageByConversationScroll.fulfilled, (state, actions) => {
        actions.payload.metadata.forEach((message) => {
          if (
            state.messageConversation.filter((msg) => msg._id === message._id)
              .length === 0
          ) {
            return state.messageConversation.unshift(message)
          }
          return
        })
        state.currentPage = Math.ceil(state.messageConversation.length / 20)
      })
      .addCase(createNewMessage.fulfilled, (state, actions) => {
        let update = state.messageConversation.filter(
          (message) => message._id !== actions.payload.metadata.newMessage._id
        )
        update.push(actions.payload.metadata.newMessage)
        state.messageConversation = update
        let updateConversation = state.conversation.map((conversation) => {
          if (conversation._id === actions.payload.metadata.conversation._id) {
            conversation.lastMessage =
              actions.payload.metadata.conversation.lastMessage
          }
          return conversation
        })
        state.conversation = updateConversation
        update = state.popupListChat.map((conversation) => {
          if (conversation._id === actions.payload.metadata.conversation._id) {
            let currentMessage = conversation?.messages?.filter(
              (message) =>
                message._id !== actions.payload.metadata.newMessage._id
            )
            currentMessage?.push(actions.payload.metadata.newMessage)
            conversation.messages = currentMessage
            return conversation
          }
          return conversation
        })
        state.popupListChat = update
        update = state.iconListPopup.map((conversation) => {
          if (conversation._id === actions.payload.metadata.conversation._id) {
            let currentMessage = conversation?.messages?.filter(
              (message) =>
                message._id !== actions.payload.metadata.newMessage._id
            )
            currentMessage?.push(actions.payload.metadata.newMessage)
            conversation.messages = currentMessage
            return conversation
          }
          return conversation
        })
        state.iconListPopup = update
      })
      .addCase(
        createNewMessageInNewConversation.fulfilled,
        (state, actions) => {
          let update = state.messageConversation.filter(
            (message) => message._id !== actions.payload.metadata.newMessage._id
          )
          update.push(actions.payload.metadata.newMessage)
          state.messageConversation = update
          let updateConversation = state.conversation.filter(
            (conversation) =>
              conversation._id !== actions.payload.metadata.conversation._id
          )
          updateConversation.unshift(actions.payload.metadata.conversation)
          state.conversation = updateConversation
          let checkConversation = state.popupListChat.find(
            (conver) => conver._id === actions.payload.metadata.conversation._id
          )
          if (checkConversation) {
            update = state.popupListChat.map((conversation) => {
              if (
                conversation._id === actions.payload.metadata.conversation._id
              ) {
                let currentMessage = conversation?.messages?.filter(
                  (message) =>
                    message._id !== actions.payload.metadata.newMessage._id
                )
                currentMessage?.push(actions.payload.metadata.newMessage)
                conversation.messages = currentMessage
                return conversation
              }
              return conversation
            })
            state.popupListChat = update
          } else {
            state.popupListChat.push(actions.payload.metadata.conversation)
          }
        }
      )
      .addCase(deleteMessage.fulfilled, (state, actions) => {
        let update = state.messageConversation.map((message) => {
          if (message._id === actions.payload.metadata._id) {
            return actions.payload.metadata
          }
          return message
        })
        state.messageConversation = update
        update = state.conversation.map((conver) => {
          if (conver._id === actions.payload.metadata.conversationId) {
            conver.lastMessage.isDeleted = true
          }
          return conver
        })
        state.conversation = update
        update = state.popupListChat.map((conversation) => {
          if (conversation._id === actions.payload.metadata.conversationId) {
            let currentUpdate = conversation?.messages?.map((message) => {
              if (message._id === actions.payload.metadata._id) {
                return actions.payload.metadata
              }
              return message
            })
            conversation.messages = currentUpdate
            return conversation
          }
          return conversation
        })
        state.popupListChat = update
      })
      .addCase(deleteMessageOnlyMe.fulfilled, (state, actions) => {
        let update = state.messageConversation.map((message) => {
          if (message._id === actions.payload.metadata._id) {
            return actions.payload.metadata
          }
          return message
        })
        state.messageConversation = update
        update = state.popupListChat.map((conversation) => {
          if (conversation._id === actions.payload.metadata.conversationId) {
            let currentUpdate = conversation?.messages?.map((message) => {
              if (message._id === actions.payload.metadata._id) {
                return actions.payload.metadata
              }
              return message
            })
            conversation.messages = currentUpdate
            return conversation
          }
          return conversation
        })
        state.popupListChat = update
      })
      .addCase(reactMessage.fulfilled, (state, actions) => {
        let update = state.messageConversation.map((message) => {
          if (message._id === actions.payload.metadata._id) {
            return actions.payload.metadata
          }
          return message
        })
        state.messageConversation = update
        update = state.popupListChat.map((conversation) => {
          if (conversation._id === actions.payload.metadata.conversationId) {
            let currentUpdate = conversation?.messages?.map((message) => {
              if (message._id === actions.payload.metadata._id) {
                return actions.payload.metadata
              }
              return message
            })
            conversation.messages = currentUpdate
            return conversation
          }
          return conversation
        })
        state.popupListChat = update
      })
      .addCase(getMessageByConversationPopup.fulfilled, (state, actions) => {
        let update = state.popupListChat.find(
          (conversation) =>
            conversation._id === actions.payload.metadata?.[0]?.conversationId
        )
        if (update?.messages?.length) {
          actions.payload.metadata.forEach((message) => {
            if (!update?.messages.find((msg) => msg._id === message._id)) {
              update?.messages?.unshift(message)
            }
          })
        } else {
          update = {
            ...update,
            messages: actions.payload.metadata?.reverse(),
          }
        }
        let newupdate = state.popupListChat.map((conversation) => {
          if (conversation._id === update._id) {
            return update
          }
          return conversation
        })
        state.popupListChat = newupdate
      })
      .addCase(getConversationFriend.fulfilled, (state, actions) => {
        state.conversationFriend = actions.payload.metadata
      })
      .addCase(getConversationGroup.fulfilled, (state, actions) => {
        state.conversationGroup = actions.payload.metadata
      })
      .addCase(getConversationFriendPage.fulfilled, (state, actions) => {
        const conversation = actions.payload.metadata
        conversation.forEach((conver) => {
          if (!state.conversationFriend.find((con) => con._id === conver._id)) {
            state.conversationFriend.push(conver)
          }
        })
      })
      .addCase(getConversationGroupPage.fulfilled, (state, actions) => {
        const conversation = actions.payload.metadata
        conversation.forEach((conver) => {
          if (!state.conversationGroup.find((con) => con._id === conver._id)) {
            state.conversationGroup.push(conver)
          }
        })
      })
      .addCase(findConversationByUser.pending, (state, actions) => {
        state.loading = true
      })
      .addCase(findConversationByUser.fulfilled, (state, actions) => {
        state.loading = false
        let data = actions.payload.metadata
        state.checkConversation = actions.payload.metadata
        state.messageConversation = []
        if (!data) return (state.newConversationUser = true)
        state.newConversationUser = false
      })
  },
})

export const {
  onCreateConversation,
  onAddUserToConversation,
  toAddUserToConversation,
  toConversationKickMember,
  toUserKickFromConversation,
  toConversationMemberLeave,
  toConversationDisband,
  toConversationUpdate,
  setCurrentMessage,
  onCreateNewMessage,
  onDeleteMessage,
  onReactMessage,
  closePopup,
  miniIconPopup,
  openMiniPopup,
  deleteMiniPopup,
  deleteAllMiniPopup,
  setIsCallVideo,
  cancelCallVideo,
  newConversation,
  newMessageUser,
} = conversationSlice.actions
export default conversationSlice.reducer
