import RequestApi from '../../helper/api'

const createConversation = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/conversation/',
    body: data,
    type: 'multipart/form-data',
  })
  return response.data
}

const getAllConversation = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/conversation/',
    body: data,
  })
  return response.data
}

const findConversationByName = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/conversation/search',
    body: data,
  })
  return response.data
}
const addUserToConversation = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/conversation/add-member',
    body: data,
  })
  return response.data
}
const acceptToConversation = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/conversation/accept',
    body: data,
  })
  return response.data
}

const kickMemberConversation = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/conversation/kick',
    body: data,
  })
  return response.data
}
const leaveConversation = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/conversation/leave',
    body: data,
  })
  return response.data
}
const disbandConversation = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/conversation/disband',
    body: data,
  })
  return response.data
}
const updateConversation = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/conversation/update',
    body: data,
    type: 'multipart/form-data',
  })
  return response.data
}

const getMessageByConversation = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/message/',
    body: data,
  })
  return response.data
}

const createNewMessage = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/message/',
    body: data,
    type: 'multipart/form-data',
  })
  return response.data
}

const deleteMessage = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/message/delete',
    body: data,
  })
  return response.data
}

const deleteMessageOnlyMe = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/message/delete-me',
    body: data,
  })
  return response.data
}

const reactMessage = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/message/react',
    body: data,
  })
  return response.data
}

const findConversationByUser = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/conversation/find',
    body: data,
  })
  return response.data
}

const getStatusConversation = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/status/conversations',
    body: data,
  })
  return response.data
}

const getStatusUser = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/status/users',
    body: data,
  })
  return response.data
}

const conversationService = {
  createConversation,
  getAllConversation,
  findConversationByName,
  addUserToConversation,
  acceptToConversation,
  kickMemberConversation,
  leaveConversation,
  disbandConversation,
  updateConversation,
  getMessageByConversation,
  createNewMessage,
  deleteMessage,
  deleteMessageOnlyMe,
  reactMessage,
  findConversationByUser,
  getStatusConversation,
  getStatusUser,
}

export default conversationService
