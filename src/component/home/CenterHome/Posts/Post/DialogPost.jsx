import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ContentPost from './ContentPost'
import CreateComment from './CreateComment'
import Comments from './Comments/Comments'
import ReactInPost from './ReactInPost'

export default function DialogPost({
  isOpen,
  closeModal,
  post,
  handleSetTotalComment,
  totalComment,
  totalCommentParent,
}) {
  return (
    <Transition
      appear
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[700px] transform overflow-hidden rounded-2xl bg-white dark:bg-dark-nav text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg sticky top-0 left-0 border-b dark:border-dark-icon-story-hover p-4 text-center font-medium leading-6 text-gray-900  dark:text-dark-item-hover"
                >
                  Bài viết của {post?.author?.name}
                  <div
                    onClick={closeModal}
                    className="absolute top-2 right-2 p-2 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover"
                  >
                    <AiOutlineClose />
                  </div>
                </Dialog.Title>
                <div className="overflow-y-scroll max-h-[80vh]">
                  <ContentPost
                    text={post?.text}
                    images={post?.images}
                    type={'post'}
                    author={post?.author}
                    postId={post?._id}
                    post={post}
                  />
                  <ReactInPost
                    post={post}
                    totalComment={totalComment}
                  />
                  <Comments
                    post={post}
                    handleSetTotalComment={handleSetTotalComment}
                    totalComment={totalComment}
                    totalCommentParent={totalCommentParent}
                  />
                </div>
                <CreateComment
                  post={post}
                  handleSetTotalComment={handleSetTotalComment}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
