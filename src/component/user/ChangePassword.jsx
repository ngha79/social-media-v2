import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { FaExchangeAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { changePasswordUser, resetState } from '../../store/auth/authSlice'

export default function ChangePassword() {
  const { user, error, message, success } = useSelector((state) => state.auth)
  let [isOpen, setIsOpen] = useState(false)
  let [update, setUpdate] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const dispatch = useDispatch()
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleOnchange = (e) => {
    setUpdate((update) => ({ ...update, [e.target.name]: e.target.value }))
  }

  const handleUpdatePassword = (e) => {
    e.preventDefault()
    const { newPassword, confirmPassword, currentPassword } = update
    if (Object.values(update).find((value) => value.length < 6)) {
      return toast.info('Mật khẩu phải từ 6 ký tự trở lên.')
    }
    if (
      currentPassword === confirmPassword ||
      currentPassword === newPassword
    ) {
      return toast.info(
        'Mật khẩu trùng nhau, vui lòng nhập mật khẩu bạn muốn thay đổi.'
      )
    }
    if (newPassword !== confirmPassword) {
      return toast.info('Mật khẩu chưa khớp.')
    }
    dispatch(
      changePasswordUser({
        userId: user._id,
        newPassword,
        confirmPassword,
        currentPassword,
      })
    )
  }

  useEffect(() => {
    if (error) {
      toast.error(message)
      dispatch(resetState())
    }
    if (success) {
      dispatch(resetState())
      toast.success('Đổi mật khẩu thành công.')
      closeModal()
    }
  }, [error, dispatch, success, message])

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <div
          onClick={openModal}
          className="flex w-full items-center justify-start p-2 hover:bg-gray-200 dark:hover:bg-dark-search transition-colors duration-200 cursor-pointer gap-2 font-semibold rounded-md"
        >
          <div className="bg-gray-200 dark:bg-dark-icon p-2 rounded-full">
            <FaExchangeAlt />
          </div>
          <span>Đổi mật khẩu</span>
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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:max-w-lg transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-center font-bold leading-6 text-gray-900"
                  >
                    Đổi mật khẩu
                  </Dialog.Title>
                  <form
                    className="flex flex-col gap-2 py-4 items-center w-full"
                    onSubmit={handleUpdatePassword}
                  >
                    <div className="flex flex-col gap-2 items-start w-full">
                      <label
                        htmlFor=""
                        className="font-medium"
                      >
                        Mật khẩu hiện tại:
                      </label>
                      <input
                        type="password"
                        name="currentPassword"
                        placeholder=""
                        onChange={handleOnchange}
                        className="p-2 rounded-md focus:outline-blue-500 border-2 border-blue-100 w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                      <label
                        htmlFor=""
                        className="font-medium"
                      >
                        Mật khẩu mới:
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        onChange={handleOnchange}
                        placeholder=""
                        className="p-2 rounded-md focus:outline-blue-500 border-2 border-blue-100 w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                      <label
                        htmlFor=""
                        className="font-medium"
                      >
                        Xác nhận mật khẩu:
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        onChange={handleOnchange}
                        placeholder=""
                        className="p-2 rounded-md focus:outline-blue-500 border-2 border-blue-100 w-full"
                      />
                    </div>
                    <button
                      onClick={handleUpdatePassword}
                      className="mt-4 px-12 py-2 font-medium text-white w-max bg-blue-500 rounded-md"
                    >
                      Xác nhận
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
