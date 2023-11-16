import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSolidPencil } from 'react-icons/bi'
import UpdateAvatar from './UpdateAvatar'
import BackgroundImage from './BackgroundImage'
import UpdateAboutUser from './UpdateAboutUser'
import StoryUser from './StoryUser'
import { useDispatch, useSelector } from 'react-redux'
import RequestApi from '../../../../helper/api'
import { useNavigate } from 'react-router-dom'
import { setUser, updateUser } from '../../../../store/auth/authSlice'
import { toast } from 'react-toastify'
import Loading from '../../../Loading'

export default function UpdateProfile() {
  const { user, loading } = useSelector((state) => state.auth)
  const [avatar, setAvatar] = useState(user?.avatar)
  const [background, setBackground] = useState(user?.backgroundImage)
  let [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    avatar: '',
    backgroundImage: '',
    residence: user?.residence,
    address: user?.address,
    story: user?.story,
    workplace: user?.workplace,
    education: user?.education,
    dateOfBirth: user?.dateOfBirth,
  })

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleOnchange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCancelOnchange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: user?.[e.target.name],
    }))
  }

  const handleCancelAbout = (e) => {
    setFormData((formData) => ({
      ...formData,
      residence: user.residence,
      address: user.address,
      workplace: user.workplace,
      education: user.education,
      dateOfBirth: user.dateOfBirth,
    }))
  }

  const removeEmptyValues = (object) => {
    const keys = Object.keys(object)
    for (var i = 0; i < keys.length; ++i) {
      const key = keys[i]
      const value = object[key]
      if (value === null || value === undefined || value === '') {
        delete object[key]
      }
    }
    return object
  }

  const handleUploadAvatar = (e) => {
    if (e.target.files) {
      const avatarImage = URL.createObjectURL(e.target.files[0])
      setAvatar(avatarImage)
      setFormData((formData) => ({ ...formData, avatar: e.target.files[0] }))
      URL.revokeObjectURL(e.target.files[0])
    }
  }

  const handleCancelUploadAvatar = (e) => {
    setAvatar(user?.avatar)
    setFormData((formData) => ({ ...formData, avatar: '' }))
  }

  const handleUploadBackground = (e) => {
    if (e.target.files) {
      setFormData((formData) => ({
        ...formData,
        backgroundImage: e.target.files[0],
      }))
      const avatarImage = URL.createObjectURL(e.target.files[0])
      setBackground(avatarImage)
      URL.revokeObjectURL(e.target.files[0])
    }
  }

  const handleCancelUploadBackground = (e) => {
    setFormData((formData) => ({
      ...formData,
      backgroundImage: '',
    }))
    setBackground(user?.backgroundImage)
  }

  const handleUpdateProfileUser = async (e) => {
    e.preventDefault()
    const data = removeEmptyValues(formData)
    dispatch(updateUser(data))
    closeModal()
  }

  if (loading) {
    return <Loading />
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
                  <UpdateAvatar
                    avatar={avatar}
                    handleUploadAvatar={handleUploadAvatar}
                    handleCancelUploadAvatar={handleCancelUploadAvatar}
                  />
                  <BackgroundImage
                    backgroundImage={background}
                    handleUploadBackground={handleUploadBackground}
                    handleCancelUploadBackground={handleCancelUploadBackground}
                  />
                  <StoryUser
                    story={formData?.story}
                    handleOnchange={handleOnchange}
                    handleCancelOnchange={handleCancelOnchange}
                  />

                  <UpdateAboutUser
                    address={formData?.address}
                    education={formData?.education}
                    residence={formData?.residence}
                    workplace={formData?.workplace}
                    handleOnchange={handleOnchange}
                    handleCancelOnchange={handleCancelAbout}
                  />
                  <div className="w-full px-8">
                    <button
                      onClick={handleUpdateProfileUser}
                      className="w-full my-4 py-2 text-lg font-semibold rounded-md bg-blue-500 text-light-search hover:bg-blue-600"
                    >
                      Cập nhật
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
