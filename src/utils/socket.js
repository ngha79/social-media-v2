import { io } from 'socket.io-client'
const VITE_REACT_APP_API_URL_SOCKET = import.meta.env
  .VITE_REACT_APP_API_URL_SOCKET

const VITE_REACT_APP_NOTIFICATIONS = import.meta.env
  .VITE_REACT_APP_NOTIFICATIONS

export let socket = io(VITE_REACT_APP_API_URL_SOCKET, {
  transports: ['websocket'],
  withCredentials: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': '*',
  },
})

export let socketNotification = io(VITE_REACT_APP_NOTIFICATIONS, {
  transports: ['websocket'],
  withCredentials: true,
  extraHeaders: {
    'Access-Control-Allow-Origin': '*',
  },
})
