import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'

const CenterBar = () => {
  const { pathname } = useLocation()

  return (
    <div className="flex items-center gap-2 justify-center w-[60%] h-full">
      <Link
        to={'/'}
        className="h-full"
      >
        {pathname === '/' ? (
          <div className="relative w-20 flex justify-center rounded hover:bg-gray-200 dark:hover:bg-dark-search h-full items-center">
            <div className="p-2 cursor-pointer">
              <AiFillHome
                className="text-blue-500"
                size={24}
              />
            </div>
            <div className="absolute -bottom-[1px] left-0 border transition-all duration-0 delay-200 border-blue-500 w-full rounded"></div>
          </div>
        ) : (
          <div className="relative w-20 flex justify-center rounded hover:bg-gray-200 dark:hover:bg-dark-search h-full items-center">
            <div className="p-2 cursor-pointer">
              <AiOutlineHome
                className="dark:text-white"
                size={24}
              />
            </div>
          </div>
        )}
      </Link>
      <Link
        to={'/friends'}
        className="h-full"
      >
        {pathname === '/friends' ? (
          <div className="relative w-20 flex justify-center rounded hover:bg-gray-200 dark:hover:bg-dark-search h-full items-center">
            <div className="p-2 cursor-pointer">
              <FaUserFriends
                className="text-blue-500"
                size={24}
              />
            </div>
            <div className="absolute -bottom-[1px] left-0 border transition-all duration-0 delay-200 border-blue-500 w-full rounded"></div>
          </div>
        ) : (
          <div className="relative w-20 flex justify-center rounded hover:bg-gray-200 dark:hover:bg-dark-search h-full items-center">
            <div className="p-2 cursor-pointer">
              <FaUserFriends
                className="dark:text-white"
                size={24}
              />
            </div>
          </div>
        )}
      </Link>
    </div>
  )
}

export default CenterBar
