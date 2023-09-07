import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSolidPencil } from 'react-icons/bi'
import UpdateAvatar from './UpdateAvatar'
import BackgroundImage from './BackgroundImage'
import UpdateAboutUser from './UpdateAboutUser'
import StoryUser from './StoryUser'

export default function UpdateProfile() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          onClick={openModal}
          className="p-2 w-max text-white/90 flex items-center gap-1 font-semibold text-[15px] bg-blue-500 hover:bg-blue-600 rounded-md"
        >
          <BiSolidPencil size={20} />
          Chỉnh sửa trang cá nhân
        </button>
      </div>

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

          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-md bg-white dark:bg-dark-nav text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg relative font-bold text-center leading-6 p-4 border-b text-gray-900 dark:text-light-search border-gray-200 dark:border-dark-icon-story-hover"
                  >
                    Chỉnh sửa trang cá nhân
                    <button
                      onClick={closeModal}
                      className="absolute top-0 translate-y-3 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
                    >
                      <AiOutlineClose />
                    </button>
                  </Dialog.Title>
                  <UpdateAvatar />
                  <BackgroundImage />
                  <StoryUser />
                  <UpdateAboutUser />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
