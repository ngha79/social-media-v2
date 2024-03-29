import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment } from '../../../../../../../../store/comment/commentSlice'

export default function DeleteComment({ comment, setOpen }) {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleDeleteComment = () => {
    dispatch(deleteComment({ commentId: comment._id, userId: user._id }))
  }

  return (
    <div className="absolute z-[1] -right-12 top-1/2 -translate-y-1/2 w-56 text-right">
      <Menu
        as="div"
        className="relative inline-block text-left"
      >
        {({ open }) => {
          setOpen(open)
          return (
            <>
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-full bg-gray-600 bg-opacity-20 p-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <BsThreeDots />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute -left-1/2 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleDeleteComment}
                          className={`${
                            active
                              ? 'bg-gray-200 dark:bg-dark-icon-story-hover'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Xóa bình luận
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )
        }}
      </Menu>
    </div>
  )
}
