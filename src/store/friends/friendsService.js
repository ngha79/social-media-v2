import RequestApi from '../../helper/api'

const getAllFriends = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/user/friends',
    body: data,
  })
  return response.data
}

const findFriendsByName = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/friend/search',
    body: data,
  })
  return response.data
}

const getAllFriendsRequestUser = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/user/friends/request',
    body: data,
  })
  return response.data
}

const getAllFriendsInvitedUser = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/user/friends/invited',
    body: data,
  })
  return response.data
}

const getUsersSuggest = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/user/friends/suggest',
    body: data,
  })
  return response.data
}

const addFriend = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/send-request',
    body: data,
  })
  return response.data
}

const cancelAddFriend = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/cancel-request',
    body: data,
  })
  return response.data
}

const acceptFriend = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/accept-invited',
    body: data,
  })
  return response.data
}

const refuseFriend = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/refuse-invited',
    body: data,
  })
  return response.data
}

const unfriendUser = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/unfriend',
    body: data,
  })
  return response.data
}

const friendsService = {
  getAllFriends,
  getAllFriendsRequestUser,
  findFriendsByName,
  getAllFriendsInvitedUser,
  getUsersSuggest,
  addFriend,
  cancelAddFriend,
  acceptFriend,
  refuseFriend,
  unfriendUser,
}

export default friendsService
