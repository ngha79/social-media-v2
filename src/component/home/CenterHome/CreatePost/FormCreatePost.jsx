import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsEmojiSmile, BsImages } from 'react-icons/bs'
import FormUploadImage from './FormUploadImage'

const FormCreatePost = ({
  isOpen,
  closeModal,
  image,
  openImage,
  closeImage,
}) => {
  const [description, setDescription] = useState('')

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
          <div className="fixed inset-0 bg-black  bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-lg relative transform overflow-hidden rounded-2xl bg-white dark:text-dark-item-hover dark:bg-dark-nav text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl p-4 border-b dark:border-[#4a4b4b] font-bold text-center leading-6 text-gray-900 dark:text-dark-item-hover"
                >
                  Tạo bài viết
                </Dialog.Title>
                <div
                  className="absolute top-2 right-2 cursor-pointer hover:opacity-80 dark:bg-dark-search p-2 rounded-full"
                  onClick={closeModal}
                >
                  <AiOutlineClose size={20} />
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-start justify-start gap-2">
                    <img
                      src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
                      alt=""
                      className="min-w-[40px] w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
                    />
                    <span className="font-semibold ">Hang uvcl</span>
                  </div>
                  <div className="mt-2">
                    <textarea
                      type="text"
                      rows={4}
                      className="w-full min-h-[100px] outline-none text-lg dark:bg-dark-nav"
                      placeholder="Bạn đang nghĩ gì thế?"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  {image && <FormUploadImage closeImage={closeImage} />}
                  <div className="flex items-center justify-between gap-4 border rounded-lg p-4 shadow-sm dark:border-[#4a4b4b]">
                    <span className="flex-1 line-clamp-1 text-[15px] font-semibold">
                      Thêm vào bài viết của bạn
                    </span>
                    <div className="flex items-center gap-2 flex-1 justify-start">
                      <div
                        className="p-1 hover:bg-gray-200 rounded-full cursor-pointer"
                        onClick={openImage}
                      >
                        <BsImages
                          className="text-green-500"
                          size={24}
                          title="Ảnh/video"
                        />
                      </div>
                      <div className="p-1 hover:bg-gray-200 rounded-full cursor-pointer">
                        <BsEmojiSmile
                          className="text-orange-500"
                          title="Cảm xúc/hoạt động"
                          size={24}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className={`inline-flex w-full justify-center rounded-md border border-transparent ${
                        description.length > 0
                          ? 'bg-blue-500'
                          : 'dark:bg-[#505151] bg-gray-300 cursor-not-allowed'
                      } text-white px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                      onClick={closeModal}
                      disabled={description.length > 0 ? false : true}
                    >
                      Đăng
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default FormCreatePost
