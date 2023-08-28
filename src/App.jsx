import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Setting from './pages/Setting'
import MainLayout from './component/layout/MainLayout'
import Friends from './pages/Friends'

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
          path: 'friends',
          element: <Friends />,
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
