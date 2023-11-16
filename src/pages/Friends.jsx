import { Outlet } from 'react-router-dom'
import LeftBar from '../component/friends/LeftBar/Index'
import RightBar from '../component/friends/RightBar/Index'

const Friends = () => {
  return (
    <div className="flex items-start flex-col md:flex-row h-screen w-full">
      <Outlet />
    </div>
  )
}

export default Friends
