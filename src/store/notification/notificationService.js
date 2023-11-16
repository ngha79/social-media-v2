import RequestApi from '../../helper/api'

const createNotification = async (data) => {
  const response = await RequestApi({
    endpoint: '/notification/',
    method: 'POST',
    body: data,
  })
  return response.data
}

const getListNotification = async (data) => {
  const response = await RequestApi({
    endpoint: '/notification/list',
    method: 'POST',
    body: data,
  })
  return response.data
}

const getNotification = async (id) => {
  const response = await RequestApi({
    endpoint: `/notification/${id}`,
    method: 'GET',
  })
  return response.data
}

const notificationService = {
  createNotification,
  getListNotification,
  getNotification,
}

export default notificationService
