import { Transition, Popover } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BsFillBookmarksFill, BsThreeDots } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import {
  deletePost,
  deletePostProfile,
} from '../../../../../../store/post/postSlice'
import UpdatePost from '../UpdatePost/UpdatePost'

export default function DeletePost({ postId, authorId, actions, post }) {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleDeletePost = () => {
    actions === 'profile'
      ? dispatch(
          deletePostProfile({
            postId: postId,
            authorId: authorId,
          })
        )
      : dispatch(
          deletePost({
            postId: postId,
            authorId: authorId,
          })
        )
  }
  return (
    <div className="z-[1]">
      <Popover
        as="div"
        className="relative inline-block text-left"
      >
        <div>
          <Popover.Button className="p-2 rounded-full cursor-pointer dark:hover:bg-dark-icon-story-hover hover:bg-gray-200">
            <BsThreeDots size={20} />
          </Popover.Button>
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
          <Popover.Panel className="absolute p-2 right-0 mt-2 space-y-2 w-56 rounded-md bg-white dark:bg-[#393737] shadow-lg focus:outline-none">
            {authorId === user?._id && (
              <>
                <div>
                  <button
                    onClick={handleDeletePost}
                    className={
                      'hover:bg-gray-200 dark:hover:bg-[#4a4a4a] text-red-500 group flex w-full items-center rounded-md px-2 py-2 text-sm'
                    }
                  >
                    <AiOutlineDelete
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Xóa bài viết
                  </button>
                </div>
                <div>
                  <button
                    className={
                      'hover:bg-gray-200 dark:hover:bg-[#4a4a4a] text-gray-600 dark:text-light-search group flex w-full items-center rounded-md px-2 py-2 text-sm'
                    }
                    onClick={openModal}
                  >
                    <BiEdit
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Chỉnh sửa bài viết
                  </button>
                </div>
                <UpdatePost
                  closeModal={closeModal}
                  openModal={openModal}
                  isOpen={isOpen}
                  post={post}
                />
              </>
            )}
            <div>
              <button
                className={`
                   hover:bg-gray-200 dark:hover:bg-[#4a4a4a] text-blue-500
                 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                <BsFillBookmarksFill
                  className="mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                Lưu bài viết
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
