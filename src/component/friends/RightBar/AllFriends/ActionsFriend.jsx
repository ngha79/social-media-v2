import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FiUserX } from 'react-icons/fi'
import {
  PiMessengerLogo,
  PiMessengerLogoThin,
  PiUserMinusLight,
} from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { unfriendUser } from '../../../../store/friends/friendSlice'

const ActionsFriend = ({ friendId }) => {
  const { user } = useSelector((state) => state.auth)
  const { friendsInvited, friends, friendsRequest } = useSelector(
    (state) => state.friends
  )

  const dispatch = useDispatch()

  const handleUnfriend = (e) => {
    e.stopPropagation()
    dispatch(unfriendUser({ userId: user?._id, friendId }))
  }

  return (
    <div className="right-4 top-[50%] z-[2] -translate-y-[50%] absolute">
      <Menu
        as="div"
        className={'relative'}
      >
        <Menu.Button>
          <div className="p-2 right-0 top-[50%] -translate-y-[50%] absolute rounded-full hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover cursor-pointer">
            <BsThreeDots />
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-4 shadow-xl p-2 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {user?._id !== friendId && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-200' : 'text-gray-900'
                    } flex w-full items-center gap-2 font-semibold  z-[2] rounded-md px-2 py-2 text-sm`}
                  >
                    <PiMessengerLogoThin size={20} />
                    Nhắn tin
                  </button>
                )}
              </Menu.Item>
            )}
            {friends?.find((friend) => friend._id === friendId) && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleUnfriend}
                    className={`${
                      active ? 'bg-gray-200' : 'text-gray-900'
                    } flex w-full items-center gap-2 font-semibold  z-[2] rounded-md px-2 py-2 text-sm`}
                  >
                    <PiUserMinusLight size={20} />
                    Hủy kết bạn
                  </button>
                )}
              </Menu.Item>
            )}
            {friendsInvited?.find((friend) => friend._id === friendId) && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleUnfriend}
                    className={`${
                      active ? 'bg-gray-200' : 'text-gray-900'
                    } flex w-full items-center gap-2 font-semibold  z-[2] rounded-md px-2 py-2 text-sm`}
                  >
                    <PiUserMinusLight size={20} />
                    Hủy Lời mời
                  </button>
                )}
              </Menu.Item>
            )}
            {friendsRequest?.find((friend) => friend._id === friendId) && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleUnfriend}
                    className={`${
                      active ? 'bg-gray-200' : 'text-gray-900'
                    } flex w-full items-center gap-2 font-semibold  z-[2] rounded-md px-2 py-2 text-sm`}
                  >
                    <PiUserMinusLight size={20} />
                    Chấp nhận
                  </button>
                )}
              </Menu.Item>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default ActionsFriend
