import RequestApi from '../../helper/api'

const createComment = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/comment/',
    body: data,
    type: 'multipart/form-data',
  })
  return response.data
}

const updateComment = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/comment/',
    body: data,
    type: 'multipart/form-data',
  })
  return response.data
}

const getCommentByParentComment = async (data) => {
  const response = await RequestApi({
    method: 'POST',
    endpoint: '/comment/list',
    body: data,
  })
  return response.data
}

const deleteComment = async ({ commentId, userId }) => {
  const response = await RequestApi({
    method: 'DELETE',
    endpoint: `/comment/${commentId}/${userId}`,
  })
  return response.data
}

const likeComment = async (data) => {
  const response = await RequestApi({
    method: 'PUT',
    endpoint: '/comment/like',
    body: data,
  })
  return response.data
}

const commentService = {
  createComment,
  getCommentByParentComment,
  updateComment,
  deleteComment,
  likeComment,
}

export default commentService
