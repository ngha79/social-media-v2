import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineClose, AiOutlineUserAdd } from 'react-icons/ai'
import { IoMdNotificationsOff } from 'react-icons/io'
import FormAddMember from '../../ListChat/CreateNewConversation/FormAddMember/FormAddMember'
import { useDispatch, useSelector } from 'react-redux'
import { addUserToConversation } from '../../../../store/conversation/conversationSlice'

export default function AddMemberToConversation({ conversationId }) {
  const { user } = useSelector((state) => state.auth)
  let [isOpen, setIsOpen] = useState(false)
  const [members, setMembers] = useState([])
  const dispatch = useDispatch()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleAdd = (user) => {
    setMembers((members) => [...members, user._id])
  }
  const handleRemove = (user) => {
    setMembers(members.filter((mem) => mem !== user._id))
  }

  const handleAddMember = () => {
    dispatch(
      addUserToConversation({
        conversationId: conversationId,
        userIds: members,
      })
    )
    setIsOpen(false)
  }
  return (
    <>
      <div className=" inset-0 flex items-center justify-center">
        <div
          className="flex flex-col items-center justify-center"
          onClick={openModal}
        >
          <div className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
            <AiOutlineUserAdd size={20} />
          </div>
          <span className="text-sm max-w-[80px] truncate">
            Mời thêm thành viên
          </span>
        </div>
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
                <Dialog.Panel className="w-full max-w-md h-[450px] flex flex-col justify-between transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all">
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="relative text-2xl text-center py-3 border-b border-gray-200 dark:border-dark-icon-story-hover font-bold leading-6 text-gray-900"
                    >
                      Thêm thành viên
                      <button className="absolute top-3 right-3 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
                        <AiOutlineClose
                          size={18}
                          onClick={closeModal}
                        />
                      </button>
                    </Dialog.Title>
                    <FormAddMember
                      handleAdd={handleAdd}
                      handleRemove={handleRemove}
                    />
                  </div>

                  <div className="mt-4 flex justify-center py-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleAddMember}
                    >
                      Thêm
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
