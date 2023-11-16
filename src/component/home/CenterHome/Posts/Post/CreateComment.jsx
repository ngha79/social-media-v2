import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai'
import { BsImage } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { createComment } from '../../../../../store/comment/commentSlice'

const CreateComment = ({
  post,
  userReply,
  parentCommentId,
  handleDeleteReplyComment,
  handleSetTotalComment,
}) => {
  const { user } = useSelector((state) => state.auth)
  const [form, setForm] = useState({
    text: '',
    files: [],
    images: [],
    repliesUser: null,
    userId: user?._id,
    postId: post?._id,
    parentCommentId: parentCommentId ? parentCommentId : null,
  })
  const [imageShow, setImageShow] = useState([])
  const dispatch = useDispatch()
  const handleUploadImages = (e) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach((file) => {
        const images = URL.createObjectURL(file)
        setImageShow((imagesShow) => [...imagesShow, images])
      })
      const newArray = Array.from(form.files)
      Array.from(e.target.files).map((image) => newArray.push(image))
      setForm((form) => ({
        ...form,
        files: newArray,
      }))
      imageShow?.forEach((file) => {
        URL.revokeObjectURL(file)
      })
    }
  }

  const handleDeleteImageShow = (image, index) => {
    setImageShow(imageShow.filter((img) => img !== image))
    form.files.splice(index, 1)
    setForm((form) => ({
      ...form,
      files: form.files,
    }))
  }

  const handleCreateComment = (e) => {
    e.preventDefault()
    if (!form.text && !form.files.length) {
      return
    }
    const formData = new FormData()
    if (form.parentCommentId) {
      formData.append('parentCommentId', form.parentCommentId)
    }
    formData.append('text', form.text)
    formData.append('images', form.images)
    formData.append('postId', post?._id)
    if (userReply) {
      formData.append('repliesUser', userReply._id)
    }
    formData.append('userId', user?._id)
    if (form.files.length) {
      for (let i = 0; i < form.files.length; i++) {
        formData.append('files', form.files[i])
      }
    }
    dispatch(createComment(formData))
    setForm({
      text: '',
      files: [],
      images: [],
      repliesUser: null,
      userId: user?._id,
      postId: post?._id,
      parentCommentId: parentCommentId ? parentCommentId : null,
    })
    setImageShow([])
    handleSetTotalComment()
  }

  const handleDeleteReply = (e) => {
    e.preventDefault()
    handleDeleteReplyComment()
  }
  return (
    <div className="sticky bottom-0 left-0 w-full  rounded-md dark:bg-dark-nav dark:text-dark-item-hover p-4 z-[1]">
      <label htmlFor="input-comment">
        <div className="flex items-center justify-start gap-4">
          <img
            src={user?.avatar}
            alt=""
            className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
          />
          <form
            onSubmit={handleCreateComment}
            className="w-full relative flex flex-col gap-y-0 bg-light-search rounded-lg outline-none dark:bg-dark-search"
          >
            <div className=" bottom-full left-0 w-full max-h-[200px] flex items-center justify-start z-[1]">
              {imageShow?.map((image, i) => (
                <div
                  className="relative"
                  key={i}
                >
                  <img
                    src={image}
                    alt="Image"
                    className="max-h-[200px] max-w-[200px]"
                  />
                  <div
                    onClick={() => handleDeleteImageShow(image, i)}
                    className="p-1 rounded-full absolute top-2 right-2 bg-gray-200 cursor-pointer hover:bg-gray-300 dark:bg-dark-item-hover dark:hover:bg-dark-icon-story-hover"
                  >
                    <AiOutlineClose size={16} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap bg-light-search rounded-lg outline-none dark:bg-dark-search w-full p-2">
              {userReply ? (
                <div className="flex items-center gap-2 text-sm">
                  <span>Phản hồi: </span>
                  <span className="text-sm bg-blue-100 flex items-center gap-2">
                    {userReply ? userReply?.name : null}
                    <div
                      onClick={handleDeleteReply}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover"
                    >
                      <AiOutlineClose />
                    </div>
                  </span>
                </div>
              ) : null}
              <input
                type="text"
                className="w-full p-2 bg-light-search rounded-lg outline-none dark:bg-dark-search"
                placeholder="Viết bình luận..."
                id="input-comment"
                value={form.text}
                onChange={(e) =>
                  setForm((form) => ({ ...form, text: e.target.value }))
                }
              />
            </div>

            <div className="flex justify-between items-center px-4 pb-2">
              <label htmlFor="upload-image">
                <BsImage className="cursor-pointer" />
              </label>
              <input
                type="file"
                onChange={handleUploadImages}
                name="upload-image"
                id="upload-image"
                className="hidden"
                multiple
              />
              <button
                onClick={handleCreateComment}
                disabled={!form.text.length & !form.files.length ? true : false}
              >
                <AiOutlineSend
                  size={18}
                  className={`${
                    form.text.length || form.files.length
                      ? 'text-blue-500 cursor-pointer'
                      : 'text-gray-500 cursor-not-allowed'
                  }`}
                />
              </button>
            </div>
          </form>
        </div>
      </label>
    </div>
  )
}

export default CreateComment
