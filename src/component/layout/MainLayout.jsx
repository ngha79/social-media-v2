import { Outlet } from 'react-router'
import Navbar from '../header/Navbar'

const MainLayout = () => {
  return (
    <div className="h-screen w-full flex justify-start flex-col">
      <Navbar />
      <div className="h-full dark:bg-dark-theme bg-gray-200 dark:text-white">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
