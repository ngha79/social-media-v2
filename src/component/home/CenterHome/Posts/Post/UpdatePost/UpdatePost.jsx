import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaRegCommentAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsEmojiSmile, BsImages } from 'react-icons/bs'
import FormCreatePost from '../../../CreatePost/FormCreatePost'
import { createPost, updatePost } from '../../../../../../store/post/postSlice'
import { toast } from 'react-toastify'
import ListTypePost from '../../../CreatePost/ListTypePost'
import FormUploadImage from '../../../CreatePost/FormUploadImage'
import Loading from '../../../../../Loading'

export default function UpdatePost({ isOpen, closeModal, openModal, post }) {
  const { user } = useSelector((state) => state.auth)
  const { loading } = useSelector((state) => state.posts)
  const [imagesShow, setImagesShow] = useState([])
  let [image, setImage] = useState(false)
  const [formData, setFormData] = useState({
    text: '',
    images: [],
    files: [],
    typePost: 'public',
  })
  useEffect(() => {
    setFormData({
      text: post?.text,
      images: post?.images,
      files: [],
      typePost: post?.typePost,
    })
    setImagesShow(post?.images || [])
  }, [post])
  const dispatch = useDispatch()
  function openImage() {
    setImage(true)
  }

  function closeImage() {
    setImage(false)
  }
  const handleUploadImages = (e) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach((file) => {
        const images = URL.createObjectURL(file)
        setImagesShow((imagesShow) => [...imagesShow, images])
      })
      const newArray = Array.from(formData.files)
      Array.from(e.target.files).map((image) => newArray.push(image))
      setFormData((formData) => ({
        ...formData,
        files: newArray,
      }))
      imagesShow?.forEach((file) => {
        URL.revokeObjectURL(file)
      })
    }
  }

  const handleCloseImage = () => {
    setImagesShow([])
    setFormData((formData) => ({ ...formData, images: [] }))
  }

  const hanleOnChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSetTypePost = (type) => {
    setFormData((formData) => ({
      ...formData,
      typePost: type,
    }))
  }

  const handleOnClose = () => {
    setFormData({
      text: '',
      images: [],
      files: [],
      typePost: 'public',
    })
    setImagesShow([])
    closeModal()
  }
  const handleUpdatePost = async () => {
    try {
      const form = new FormData()
      form.append('text', formData.text)
      form.append('typePost', formData.typePost)
      form.append('authorId', user?._id)
      form.append('postId', post?._id)
      if (formData.images?.length) {
        for (let i = 0; i < formData.images.length; i++) {
          form.append('images', formData.images[i])
        }
      }
      if (formData.files?.length) {
        for (let i = 0; i < formData.files.length; i++) {
          form.append('files', formData.files[i])
        }
      }
      dispatch(updatePost(form))
      handleOnClose()
    } catch (error) {
      toast.error('Có lỗi xảy ra, vui lòng thử lại sau!')
    }
  }

  const handleDeleteImageUpload = (image, index) => {
    if (image.startsWith('blob')) {
      formData.files.splice(index - formData.images.length, 1)
    }
    setFormData((formData) => ({
      ...formData,
      images: formData.images.filter((img) => img !== image),
      files: formData.files,
    }))
    setImagesShow(imagesShow.filter((img) => img !== image))
  }

  if (loading) {
    return <Loading />
  }

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
              <Dialog.Panel className="w-full max-w-[700px] transform overflow-hidden rounded-2xl bg-white dark:bg-dark-nav text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg sticky top-0 left-0 border-b dark:border-dark-icon-story-hover p-4 text-center font-medium leading-6 text-gray-900  dark:text-dark-item-hover"
                >
                  Chỉnh sửa bài viết
                  <div
                    onClick={closeModal}
                    className="absolute top-2 right-2 p-2 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover"
                  >
                    <AiOutlineClose />
                  </div>
                </Dialog.Title>

                <div className="p-4 space-y-4">
                  <div className="flex items-start justify-start gap-2">
                    <img
                      src={user?.avatar}
                      alt=""
                      className="min-w-[40px] w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold ">{user?.name}</span>
                      <ListTypePost
                        handleSetTypePost={handleSetTypePost}
                        value={formData?.typePost}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <textarea
                      type="text"
                      name="text"
                      value={formData?.text}
                      rows={4}
                      className="w-full min-h-[100px] outline-none text-lg dark:bg-dark-nav"
                      placeholder="Bạn đang nghĩ gì thế?"
                      onChange={hanleOnChange}
                    />
                  </div>
                  {imagesShow && (
                    <FormUploadImage
                      closeImage={closeImage}
                      handleUploadImages={handleUploadImages}
                      images={imagesShow}
                      handleDeleteImageUpload={handleDeleteImageUpload}
                    />
                  )}

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
                        !formData?.text?.length &&
                        !formData?.images?.length &&
                        !formData?.files?.length
                          ? 'dark:bg-[#505151] bg-gray-300 cursor-not-allowed'
                          : 'bg-blue-500 cursor-pointer'
                      } text-white px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                      onClick={handleUpdatePost}
                      disabled={
                        !formData?.text?.length &&
                        !formData?.images?.length &&
                        !formData?.files?.length
                          ? true
                          : false
                      }
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
