import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Setting from './pages/Setting'
import MainLayout from './component/layout/MainLayout'
import Friends from './pages/Friends'
import Notifications from './pages/Notifications'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import ProfileUser from './pages/ProfileUser'
import HomeFriends from './component/friends/RightBar/HomeFriends/Index'
import FriendRequest from './component/friends/RightBar/FriendsRequest/Index'
import FriendsSuggest from './component/friends/RightBar/FriendsSuggest/Index'
import AllFriends from './component/friends/RightBar/AllFriends/Index'
import UpdateUser from './pages/UpdateUser'
import Signup from './pages/Signup'
import FriendInvited from './component/friends/RightBar/FriendsInvited/Index'
import PostDetail from './pages/PostDetail'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment/min/moment-with-locales'
import vi from 'moment/locale/vi'
import CallRoom from './pages/CallRoom'
import VideoRoom from './pages/VideoRoom'
import ForgotPassword from './pages/ForgotPassword'
import UpdateForgotPassword from './pages/UpdateForgotPassword'
import SearchResult from './pages/SearchResult'
import TopSearch from './component/search/TopSearch'
import PostSearch from './component/search/PostSearch'
import UserSearch from './component/search/UserSearch'

function App() {
  moment.updateLocale('vi', vi)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },

        {
          path: 'search/',
          element: <SearchResult />,
          children: [
            {
              path: 'top',
              element: <TopSearch />,
            },
            {
              path: 'post',
              element: <PostSearch />,
            },
            {
              path: 'user',
              element: <UserSearch />,
            },
          ],
        },
        {
          path: 'friends/',
          element: <Friends />,
          children: [
            {
              path: '',
              element: <HomeFriends />,
            },
            {
              path: 'requests',
              element: <FriendRequest />,
            },
            {
              path: 'invited',
              element: <FriendInvited />,
            },
            {
              path: 'suggestions',
              element: <FriendsSuggest />,
            },
            {
              path: 'list',
              element: <AllFriends />,
            },
          ],
        },
        {
          path: 'notifications',
          element: <Notifications />,
        },
        {
          path: 'messages/:conversationId',
          element: <Messages />,
        },
        {
          path: ':name/:id/*',
          element: <Profile />,
        },
        {
          path: 'user/:name/:id/',
          element: <ProfileUser />,
        },
        {
          path: 'post/:postId',
          element: <PostDetail />,
        },
        {
          path: 'video/:roomId',
          element: <VideoRoom />,
        },
        {
          path: 'call/:roomId',
          element: <CallRoom />,
        },
      ],
    },
    {
      path: '/update/user',
      element: <UpdateUser />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/update/forgot-password',
      element: <UpdateForgotPassword />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
