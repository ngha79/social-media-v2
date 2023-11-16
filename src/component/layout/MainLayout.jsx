import { Outlet } from 'react-router'
import Navbar from '../header/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser, setUser } from '../../store/auth/authSlice'
import RequestApi from '../../helper/api'
import { useCallback, useEffect, useRef, useState } from 'react'
import { socket, socketNotification } from '../../utils/socket'
import {
  acceptFriendSocket,
  addFriendSocket,
  cancelAddFriendSocket,
  getAllFriends,
  getAllFriendsInvitedUser,
  getAllFriendsRequestUser,
  getUsersSuggest,
  refuseFriendSocket,
  unfriendUserSocket,
} from '../../store/friends/friendSlice'
import ImageShow from '../imageShow/ImageShow'
import {
  cancelCallVideo,
  getAllConversation,
  getConversationFriend,
  getConversationGroup,
  getStatusConversation,
  getStatusUser,
  newConversation,
  onAddUserToConversation,
  onCreateConversation,
  onCreateNewMessage,
  onDeleteMessage,
  onReactMessage,
  toAddUserToConversation,
  toConversationDisband,
  toConversationKickMember,
  toConversationMemberLeave,
  toConversationUpdate,
  toUserKickFromConversation,
} from '../../store/conversation/conversationSlice'
import { getAllPost, getAllPostProfilePage } from '../../store/post/postSlice'
import {
  getListNotification,
  getNotification,
  pushNotification,
} from '../../store/notification/notificationSlice'
import notification from '../../assets/notification.wav'
import {
  onCreateNewComment,
  onDeleteComment,
  onUpdateComment,
} from '../../store/comment/commentSlice'
import soundcall from '../../assets/callvideosound.mp3'
import ReceiverCallVideo from '../callVideo/ReceiverCallVideo'
import IsCallVideo from '../callVideo/IsCallVideo'
import Loading from '../Loading'

const MainLayout = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const { cancelCall, conversationId } = useSelector(
    (state) => state.conversation
  )
  const { images, indexImage } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  const [roomCall, setRoomCall] = useState()
  const [isCallVideo, setIsCallVideo] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const audio = new Audio(notification)

  const handleReceiverVideoCall = (data) => {
    setRoomCall(data)
    setIsCallVideo(true)
  }

  const handleAcceptVideoCall = () => {
    socket.emit('accept video call', roomCall)
    setIsCallVideo(false)
    navigate(`/video/${roomCall.roomId}`)
  }

  const onAcceptVideoCall = ({ userId, roomId }) => {
    dispatch(cancelCallVideo())
    navigate(`/video/${roomId}`)
    socket.emit('join room call', { userId, roomId })
  }

  const handleRefuseVideoCall = () => {
    socket.emit('refuse video call', roomCall.roomId)
    setIsCallVideo(false)
  }

  const handleCancelCallVideo = () => {
    socket.emit('cancel video call', conversationId)
    dispatch(cancelCallVideo())
  }

  useEffect(() => {
    if (user) {
      socket.emit('login', user?._id)
      socketNotification.emit('connection', user?._id)
      dispatch(getAllConversation({ userId: user?._id }))
      dispatch(getUsersSuggest({ userId: user?._id, page: 1, limit: 20 }))
      dispatch(
        getAllFriendsRequestUser({ userId: user?._id, page: 1, limit: 20 })
      )
      dispatch(
        getAllFriendsInvitedUser({ userId: user?._id, page: 1, limit: 20 })
      )
      dispatch(getAllFriends({ userId: user?._id, page: 1, limit: 20 }))
      dispatch(
        getListNotification({
          userId: user?._id,
          page: 1,
          limit: 30,
        })
      )
      dispatch(
        getConversationFriend({
          userId: user?._id,
          type: 'single',
        })
      )
      dispatch(
        getConversationGroup({
          userId: user?._id,
          type: 'group',
        })
      )
      dispatch(
        getAllPost({
          userId: user?._id,
          page: 1,
          limit: 20,
        })
      )

      if (!user?.name) {
        navigate('/update/user')
      }
      socket.emit('User Online Join Rooms', user?._id)

      socket.on('request-friend', (userId) => {
        dispatch(addFriendSocket(userId))
        audio.play()
      })
      socket.on('unfriend', (userId) => {
        dispatch(unfriendUserSocket(userId))
      })
      socket.on('cancel-invited-friend', (userId) => {
        dispatch(cancelAddFriendSocket(userId))
      })
      socket.on('refuse-invited-friend', (userId) => {
        dispatch(refuseFriendSocket(userId))
        audio.play()
      })
      socket.on('accept-invited-friend', (userId) => {
        dispatch(acceptFriendSocket(userId))
        audio.play()
      })
      socket.on('createNewMessage', ({ newMessage, conversation }) => {
        dispatch(onCreateNewMessage({ newMessage, conversation }))
        if (newMessage.userSendId._id !== user._id) audio.play()
      })
      socket.on('deleteMessage', (result) => {
        dispatch(onDeleteMessage(result))
        if (result.userSendId._id !== user._id) audio.play()
      })
      socket.on('addReactMessage', (result) => {
        dispatch(onReactMessage(result))
        audio.play()
        if (result.userSendId._id !== user._id) audio.play()
      })
      socket.on('create new conversation', (result) => {
        dispatch(onCreateConversation(result))
        audio.play()
      })
      socket.on('toAddUserToConversation', (result, userIds) => {
        if (!userIds.includes(user?._id)) {
          dispatch(toAddUserToConversation(result))
        }
      })
      socket.on('onAddUserToConversation', (result) => {
        dispatch(onAddUserToConversation(result))
        socket.emit('join room', result)
        audio.play()
      })
      socket.on('kickMemberConversation', (result, userId) => {
        if (userId !== user?._id) {
          dispatch(toConversationKickMember(result))
        }
        audio.play()
      })
      socket.on('toMemberKickConversation', (result) => {
        dispatch(toUserKickFromConversation(result))
      })
      socket.on('leaveConversation', (result) => {
        dispatch(toConversationMemberLeave(result))
        audio.play()
      })
      socket.on('disbandConversation', (result) => {
        dispatch(toConversationDisband(result))
        audio.play()
      })
      socket.on('updateConversation', (result) => {
        dispatch(toConversationUpdate(result))
        audio.play()
      })
      socket.on('createNewComment', (comment) => {
        if (user?._id !== comment.comment_userId._id) {
          dispatch(onCreateNewComment(comment))
        }
      })
      socket.on('updateComment', (comment) => {
        if (user?._id !== comment.comment_userId._id) {
          dispatch(onUpdateComment(comment))
        }
      })
      socket.on('deleteComment', (comment) => {
        if (user?._id !== comment.comment_userId._id) {
          dispatch(onDeleteComment(comment))
        }
      })
      socketNotification.on('notification', (notification) => {
        dispatch(pushNotification(notification))
        audio.play()
      })

      socket.on('receiver video call', handleReceiverVideoCall)
      socket.on('cancel video call to room', () => {
        setIsCallVideo(false)
      })
      socket.on('refuse video call to room', () => {
        dispatch(cancelCallVideo())
      })
      socket.on('accept video call to room', onAcceptVideoCall)
      socket.on('New Conversation', (conversation) => {
        dispatch(newConversation(conversation))
        socket.emit('join room', conversation)
      })
      socket.on('Join New Conversation', (conversation) => {
        socket.emit('join room', conversation)
      })
      setTimeout(() => {
        setIsLoading(false)
      }, [500])
    } else {
      navigate('/login')
    }
  }, [user])

  return (
    <div className="w-full h-screen fixed top-0 flex justify-start flex-col dark:bg-dark-theme bg-light-search dark:text-dark-item-hover">
      <Navbar />
      {isLoading ? <Loading /> : <Outlet />}
      {!!images?.length && (
        <ImageShow
          images={images}
          index={indexImage}
        />
      )}
      {isCallVideo && (
        <>
          <ReceiverCallVideo
            handleAcceptVideoCall={handleAcceptVideoCall}
            handleRefuseVideoCall={handleRefuseVideoCall}
          />
          <video
            loop
            autoPlay
            style={{ display: 'none' }}
            id="videomain"
          >
            <source
              src={soundcall}
              type="video/mp4"
            />
          </video>
        </>
      )}
      {cancelCall && (
        <>
          <IsCallVideo handleCancelCallVideo={handleCancelCallVideo} />
          <video
            loop
            autoPlay
            style={{ display: 'none' }}
            id="videomain"
          >
            <source
              src={soundcall}
              type="video/mp4"
            />
          </video>
        </>
      )}
    </div>
  )
}

export default MainLayout
