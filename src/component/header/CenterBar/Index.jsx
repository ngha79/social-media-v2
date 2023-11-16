import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { FaFacebookMessenger, FaUserFriends } from 'react-icons/fa'
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
            <div className="md:p-4 p-2 cursor-pointer">
              <AiFillHome
                className="text-blue-500"
                size={24}
              />
            </div>
            <div className="absolute md:-bottom-[1px] top-0 left-0 border-b-2 transition-all duration-0 delay-200 border-blue-500 w-full"></div>
          </div>
        ) : (
          <div className="relative w-20 flex justify-center rounded hover:bg-gray-200 dark:hover:bg-dark-search h-full items-center">
            <div className="md:p-4 p-2 cursor-pointer">
              <AiOutlineHome
                className="dark:text-dark-item-hover"
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
            <div className="md:p-4 p-2 cursor-pointer">
              <FaUserFriends
                className="text-blue-500"
                size={24}
              />
            </div>
            <div className="absolute md:-bottom-[1px] top-0 left-0 border-b-2 transition-all duration-0 delay-200 border-blue-500 w-full"></div>
          </div>
        ) : (
          <div className="relative w-20 flex justify-center rounded hover:bg-gray-200 dark:hover:bg-dark-search h-full items-center">
            <div className="md:p-4 p-2 cursor-pointer">
              <FaUserFriends
                className="dark:text-dark-item-hover"
                size={24}
              />
            </div>
          </div>
        )}
      </Link>
      <Link
        to={'/messages/all'}
        className="h-full md:hidden"
      >
        {pathname === '/messages' ? (
          <div className="relative w-20 flex justify-center rounded hover:bg-gray-200 dark:hover:bg-dark-search h-full items-center">
            <div className="md:p-4 p-2 cursor-pointer">
              <FaFacebookMessenger
                className="text-blue-500"
                size={24}
              />
            </div>
            <div className="absolute md:-bottom-[1px] md:top-full top-0 left-0 border-b-2 transition-all duration-0 delay-200 border-blue-500 w-full"></div>
          </div>
        ) : (
          <div className="relative w-20 flex justify-center rounded hover:bg-gray-200 dark:hover:bg-dark-search h-full items-center">
            <div className="md:p-4 p-2 cursor-pointer">
              <FaFacebookMessenger
                className="dark:text-dark-item-hover"
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
