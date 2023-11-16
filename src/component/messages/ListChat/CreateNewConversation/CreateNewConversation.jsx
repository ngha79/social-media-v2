import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import FormAddMember from './FormAddMember/FormAddMember'
import { useDispatch, useSelector } from 'react-redux'
import { createConversation } from '../../../../store/conversation/conversationSlice'
import { toast } from 'react-toastify'

export default function CreateNewConversation() {
  const { user } = useSelector((state) => state.auth)
  let [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState({
    leaderId: user?._id,
    name: '',
    avatar:
      'https://res.cloudinary.com/dlzulba2u/image/upload/v1683999517/avatar/o9groynhzw7o0kvkm2om.jpg',
    memberIds: [user?._id],
  })
  const [avatar, setAvatar] = useState('')

  const dispatch = useDispatch()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleAdd = (user) => {
    setForm((form) => ({
      ...form,
      memberIds: [...form.memberIds, user._id],
    }))
  }
  const handleRemove = (user) => {
    setForm((form) => ({
      ...form,
      memberIds: form?.memberIds?.filter((member) => member !== user._id),
    }))
  }

  const handleOnChange = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }))
  }

  const handleUploadAvatar = (e) => {
    if (e.target.files) {
      setAvatar(URL.createObjectURL(e.target.files[0]))
      setForm((form) => ({
        ...form,
        avatar: e.target.files[0],
      }))
    }
  }

  const handleCreateConversation = () => {
    if (!form.name) {
      return toast.info('Vui lòng nhập tên cho nhóm của bạn!')
    }
    if (form.memberIds.length < 2) {
      return toast.info(
        'Nhóm phải trên 2 thành viên, vui lòng thêm thành viên!'
      )
    }
    dispatch(createConversation(form))
    closeModal()
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center w-full">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center gap-2 w-full"
        >
          <AiOutlinePlus size={20} />
          Tạo đoạn chat mới
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
                <Dialog.Panel className="w-full relative max-w-xl dark:text-light-search transform rounded-md bg-white dark:bg-dark-nav text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold p-4 border-b text-center leading-6"
                  >
                    Tạo cuộc trò chuyện mới
                    <button
                      onClick={closeModal}
                      className="p-1 rounded-full absolute top-3 right-3 bg-gray-100 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
                    >
                      <AiOutlineClose />
                    </button>
                  </Dialog.Title>
                  <div className="flex flex-col">
                    <FormAddMember
                      handleAdd={handleAdd}
                      handleRemove={handleRemove}
                    />
                    <div className="flex flex-col gap-y-1 px-4 py-2 relative">
                      <label
                        htmlFor="name"
                        className="font-semibold"
                      >
                        Tên nhóm:
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleOnChange}
                        value={form.name}
                        id="name"
                        className="border border-gray-200 px-2 py-1 rounded-md focus:outline-blue-500 bg-gray-100 hover:bg-gray-200 dark:bg-dark-search dark:border-dark-search"
                      />
                    </div>
                    <form className="flex items-center space-x-6 px-4 py-4">
                      <div className="shrink-0">
                        <img
                          className="h-16 w-16 object-cover rounded-full"
                          src={avatar || form?.avatar}
                          alt="Current profile photo"
                        />
                      </div>
                      <label className="block">
                        <span className="sr-only">Chọn ảnh nhóm</span>
                        <input
                          type="file"
                          onChange={handleUploadAvatar}
                          className="block w-full text-sm
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50
                            hover:file:bg-violet-100"
                        />
                      </label>
                    </form>
                    <div className="flex justify-center p-4">
                      <button
                        className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-lg text-white font-semibold"
                        onClick={handleCreateConversation}
                      >
                        Tạo nhóm
                      </button>
                    </div>
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
