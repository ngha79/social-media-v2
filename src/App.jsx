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
import DetailProfile from './component/profile/header/DetailProfile'
import FriendsProfile from './component/profile/header/FriendsProfile'
import Introduce from './component/profile/header/Introduce'
import ImagesProfie from './component/profile/header/ImagesProfie'
import PostProfile from './component/profile/header/PostProfile'

function App() {
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
          path: 'setting',
          element: <Setting />,
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
              path: 'suggestions/',
              element: <FriendsSuggest />,
              children: [
                {
                  path: '*',
                  element: <ProfileUser />,
                },
              ],
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
          path: 'messages',
          element: <Messages />,
        },
        {
          path: ':id',
          element: <Profile />,
        },
        {
          path: 'user/*',
          element: <ProfileUser />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
