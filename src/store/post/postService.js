import RequestApi from '../../helper/api'

const createPost = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/post/',
    type: 'multipart/form-data',
    body: data,
  })
  return response.data
}

const getAllPost = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/post/posts',
    body: data,
  })
  return response.data
}

const getAllPostProfile = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/post/posts/profile',
    body: data,
  })
  return response.data
}

const likePost = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/post/',
    body: data,
  })
  return response.data
}

const deletePost = async (data) => {
  const response = await RequestApi({
    method: 'DELETE',
    endpoint: '/post/',
    body: data,
  })
  return response.data
}

const updatePost = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/post/update',
    type: 'multipart/form-data',
    body: data,
  })
  return response.data
}

const sharePost = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/post/share',
    body: data,
  })
  return response.data
}

const getPostById = async (data) => {
  const response = await RequestApi({
    method: 'GET',
    endpoint: `/post//get-detail/${data}`,
  })
  return response.data
}

const getPostSearch = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/user/search/post-user',
    body: data,
  })
  return response.data
}

const postsService = {
  createPost,
  getAllPost,
  likePost,
  deletePost,
  getAllPostProfile,
  updatePost,
  sharePost,
  getPostById,
  getPostSearch,
}

export default postsService
