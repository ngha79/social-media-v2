import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteMessage,
  deleteMessageOnlyMe,
} from '../../../store/conversation/conversationSlice'

export default function SettingMessage({
  handleShowMore,
  handleCloseMore,
  messageId,
  userSend,
  type,
}) {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const handleDeleteMessage = () => {
    dispatch(deleteMessage({ messageId, userId: user?._id }))
  }
  const handleDeleteMessageOnlyMe = () => {
    dispatch(deleteMessageOnlyMe({ messageId, userId: user?._id }))
  }
  return (
    <div className="relative top-0 w-max">
      <Menu
        as="div"
        className="inline-block text-left"
      >
        {({ open }) => {
          if (open) {
            handleShowMore()
          } else {
            handleCloseMore()
          }
          return (
            <>
              <div>
                <Menu.Button
                  title="Xem thêm"
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover text-light-gray"
                >
                  <BsThreeDotsVertical />
                </Menu.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-10 right-0 bottom-0 font-semibold md:-left-14 p-2 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-icon-story text-gray-700 dark:text-light-search border border-gray-200 dark:border-dark-icon-story-hover shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userSend === user?._id && (
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleDeleteMessage}
                          className={`flex w-full items-center gap-2 p-2 rounded-md text-sm ${
                            active
                              ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                              : ''
                          }`}
                        >
                          Xóa
                        </button>
                      )}
                    </Menu.Item>
                  )}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleDeleteMessageOnlyMe}
                        className={`flex w-full items-center gap-2 p-2 rounded-md text-sm ${
                          active
                            ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                            : ''
                        }`}
                      >
                        Gỡ
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`flex w-full items-center gap-2 border-none p-2 rounded-md text-sm ${
                          active
                            ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                            : ''
                        }`}
                      >
                        Chuyển tiếp
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`flex w-full items-center gap-2 border-none p-2 rounded-md text-sm ${
                          active
                            ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                            : ''
                        }`}
                      >
                        Ghim
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )
        }}
      </Menu>
    </div>
  )
}
