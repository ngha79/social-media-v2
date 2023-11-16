import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineUpload } from 'react-icons/ai'
import { BiSolidLike } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import {
  createNewMessage,
  createNewMessageInNewConversation,
} from '../../../store/conversation/conversationSlice'
import Loading from '../../Loading'
import { useParams } from 'react-router-dom'

const CreateMessage = ({ conversation, userChat }) => {
  const params = useParams()
  const conversationId = params.conversationId
  const { user } = useSelector((state) => state.auth)
  const { loading } = useSelector((state) => state.comments)
  const [form, setForm] = useState({
    text: '',
    files: [],
    images: [],
    conversationId: conversation?._id || '',
    tags: [],
    replyMessageId: '',
    userSend: user?._id,
  })
  const [imageShow, setImageShow] = useState([])
  const dispatch = useDispatch()
  const ref = useRef()
  const refForm = useRef()
  const handleOnChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }

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

  const handleOpenFileInput = () => {
    ref.current.click()
  }

  const handleDeleteImageShow = (image, index) => {
    setImageShow(imageShow.filter((img) => img !== image))
    form.files.splice(index, 1)
    setForm((form) => ({
      ...form,
      files: form.files,
    }))
  }

  const handleCreateNewMessage = async (e) => {
    e.preventDefault()
    if (!form.text && !form.files.length) {
      return
    }
    const formData = new FormData()
    formData.append('text', form.text)
    formData.append('images', form.images)
    formData.append('tags', form.tags || [])
    formData.append('conversationId', conversation?._id || '')
    formData.append('replyMessageId', form.replyMessageId)
    formData.append('userSend', user?._id)
    if (form.files.length) {
      for (let i = 0; i < form.files.length; i++) {
        formData.append('files', form.files[i])
      }
    }
    if (userChat) {
      formData.append('userReceiver', userChat.friendId)
      dispatch(createNewMessageInNewConversation(formData))
    } else {
      dispatch(createNewMessage(formData))
    }
    setForm({
      text: '',
      files: [],
      images: [],
      conversationId: conversation?._id || '',
      tags: [],
      replyMessageId: '',
      userSend: user?._id,
    })
    setImageShow([])
  }

  useEffect(() => {
    refForm.current.focus()
  }, [conversationId])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="p-3 h-max flex items-center justify-between gap-4 relative">
      <button
        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 w-max"
        onClick={handleOpenFileInput}
      >
        <AiOutlineUpload />
      </button>
      <input
        type="file"
        id="upload-images"
        name="upload-images"
        onChange={handleUploadImages}
        multiple
        ref={ref}
        className="hidden"
      />
      <form
        onSubmit={handleCreateNewMessage}
        className="flex w-full items-center justify-between gap-4"
      >
        <input
          type="text"
          onChange={handleOnChange}
          value={form.text}
          name="text"
          ref={refForm}
          autoFocus
          placeholder="Aa"
          className="px-4 py-2 text-[15px] rounded-2xl bg-gray-200 dark:bg-dark-search outline-none w-full"
        />
        <div className="p-1 hover:bg-gray-200 cursor-pointer dark:hover:bg-dark-icon-story-hover rounded-full text-blue-500">
          <BiSolidLike size={24} />
        </div>
      </form>
      <div className="absolute bottom-[60px] left-0 w-full max-h-[200px] flex items-center justify-start z-[1]">
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
    </div>
  )
}

export default CreateMessage
