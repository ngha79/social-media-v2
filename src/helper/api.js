import axios from 'axios'
import Cookies from 'js-cookie'
const VITE_REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL
export default function RequestApi({
  endpoint,
  method,
  type,
  body,
  responseType = 'json',
}) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': type ? type : 'application/json',
    'Accept-Control-Allow-Origin': '*',
  }

  const instance = axios.create({ headers })

  instance.interceptors.request.use(
    (config) => {
      const token = Cookies.get('accessToken')
      const clientID = localStorage.getItem('x-client-id')
      if (token) {
        config.headers['authorization'] = token
      }

      if (clientID) {
        config.headers['x-client-id'] = clientID
      }

      return config
    },
    (err) => {
      return Promise.reject(err)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    async (err) => {
      const originalConfig = err.config
      if (
        (err.response && err.response.status == 401) ||
        err.response.status == 203
      ) {
        try {
          const refreshToken = Cookies.get('refreshToken')
          const result = await instance.post(
            `${VITE_REACT_APP_API_URL}/auth/refreshToken`,
            {
              refreshToken: refreshToken,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          const accessToken = result.data.metadata.tokens
          Cookies.set('accessToken', accessToken)
          originalConfig.headers['authorization'] = accessToken

          return instance(originalConfig)
        } catch (error) {
          if (error.response) {
            Cookies.remove('accessToken')
            Cookies.remove('refreshToken')
            localStorage.removeItem('user')
            localStorage.removeItem('x-client-id')
            window.location.href = `${import.meta.env.VITE_REACT_APP_URL}/login`
          }
        }
      }
      return Promise.reject(err.response.data)
    }
  )

  return instance.request({
    method: method,
    url: `${VITE_REACT_APP_API_URL}${endpoint}`,
    data: body,
    responseType: responseType,
    withCredentials: true,
  })
}
