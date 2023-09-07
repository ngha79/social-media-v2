import { Outlet } from 'react-router'
import Navbar from '../header/Navbar'

const MainLayout = () => {
  return (
    <div className="w-full flex justify-start flex-col">
      <Navbar />
      <div className="h-screen dark:bg-dark-theme bg-light-search dark:text-dark-item-hover">
        <div className="relative top-[57px] h-max dark:bg-dark-theme bg-light-search dark:text-dark-item-hover">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
