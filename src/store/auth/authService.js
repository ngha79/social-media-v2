import RequestApi from '../../helper/api'

const logout = async () => {
  const response = await RequestApi({
    method: 'GET',
    endpoint: '/auth/logout',
  })

  return response.data
}

const updateProfileUser = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/auth/update-user',
    body: data,
  })
  return response
}

const updateUser = async (data) => {
  const response = await RequestApi({
    endpoint: '/auth/update-profile',
    method: 'POST',
    type: 'multipart/form-data',
    body: data,
  })
  return response
}

const changePasswordUser = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/user/update/password',
    body: data,
  })
  return response
}

const getProfileUser = async (profileId) => {
  const response = await RequestApi({
    method: 'GET',
    endpoint: `/user/profile/${profileId}`,
  })
  return response.data
}

const createOtp = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/create-otp',
    body: data,
  })
  return response.data
}

const updateForgotPassword = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/update/fotgot-password',
    body: data,
  })
  return response.data
}

const usersSearch = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/search/post-user',
    body: data,
  })
  return response.data
}

const authService = {
  logout,
  updateProfileUser,
  changePasswordUser,
  updateUser,
  getProfileUser,
  createOtp,
  updateForgotPassword,
  usersSearch,
}

export default authService
