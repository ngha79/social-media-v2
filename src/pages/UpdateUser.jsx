import React, { useState } from 'react'
import avatarUser from '../assets/user.png'
import RequestApi from '../helper/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/auth/authSlice'

const UpdateUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
    backgroundImage: '',
    residence: '',
    address: '',
    story: '',
    workplace: '',
    education: '',
    dateOfBirth: '2000-01-01',
  })

  const [avatar, setAvatar] = useState()
  const [background, setBackground] = useState()

  const handleOnchange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
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

  const handleUpdateProfileUser = (e) => {
    e.preventDefault()
    RequestApi({
      endpoint: '/auth/update-profile',
      method: 'POST',
      type: 'multipart/form-data',
      body: removeEmptyValues(formData),
    })
      .then((res) => {
        if (res.data.metadata) {
          dispatch(setUser(res.data.metadata))
          navigate('/')
        }
      })
      .catch((err) => {
        toast.error('Có lỗi sảy ra, vui lòng thử lại sau!')
      })
  }

  return (
    <div className="flex items-center bg-gray-100 justify-center w-full min-h-screen p-2">
      <div className="flex flex-col bg-white max-w-md w-full items-center min-h-[500px] shadow-sm rounded-md overflow-y-scroll h-max">
        <h1 className="font-semibold text-xl py-4 border-b w-full text-center">
          Thêm thông tin tài khoản
        </h1>
        <form
          action=""
          onSubmit={handleUpdateProfileUser}
          className="w-full"
        >
          <div className="flex flex-col gap-y-2 items-start w-full py-2 px-4">
            <label
              htmlFor=""
              className="font-semibold"
            >
              Tên:
            </label>
            <input
              type="text"
              required
              value={formData?.name}
              name="name"
              onChange={handleOnchange}
              placeholder="Nguyễn Văn A"
              className="bg-gray-100 px-4 py-2 rounded-md outline-none w-full"
            />
          </div>
          <div className="relative py-2 mx-4">
            <div className="absolute left-4 top-[50%] translate-y-[-50%] flex items-center">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              type="date"
              onChange={handleOnchange}
              value={formData.dateOfBirth}
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date"
            />
          </div>
          <div className="flex flex-col gap-y-2 items-center w-full py-2 px-4">
            <div className="flex items-center justify-between w-full">
              <label
                htmlFor=""
                className="font-semibold"
              >
                Ảnh đại diện:
              </label>
              <label htmlFor="upload-avatar">
                <div className="cursor-pointer text-blue-500 font-semibold">
                  Thêm ảnh
                </div>
              </label>
              <input
                type="file"
                onChange={handleUploadAvatar}
                id="upload-avatar"
                className="hidden"
              />
            </div>
            <img
              src={avatar ? avatar : avatarUser}
              alt=""
              className="w-[80px] h-[80px] rounded-full bg-gray-200 text-white"
            />
          </div>
          <div className="flex flex-col gap-y-2 items-center w-full py-2 px-4">
            <div className="flex items-center justify-between w-full">
              <label
                htmlFor=""
                className="font-semibold"
              >
                Ảnh bìa:
              </label>
              <label htmlFor="upload-background">
                <div className="cursor-pointer text-blue-500 font-semibold">
                  Thêm ảnh
                </div>
              </label>
              <input
                type="file"
                onChange={handleUploadBackground}
                id="upload-background"
                className="hidden"
              />
            </div>
            {background ? (
              <img
                src={background}
                alt=""
                className="w-full max-h-[200px] h-max shadow-sm min-h-[100px] rounded-md"
              />
            ) : (
              <span>Chưa cập nhật</span>
            )}
          </div>
          <div className="flex flex-col gap-y-2 items-start w-full py-2 px-4">
            <label
              htmlFor=""
              className="font-semibold"
            >
              Nơi sống:
            </label>
            <input
              type="text"
              value={formData?.residence}
              onChange={handleOnchange}
              name="residence"
              placeholder="Hà Nội"
              className="bg-gray-100 px-4 py-2 rounded-md outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-y-2 items-start w-full py-2 px-4">
            <label
              htmlFor=""
              className="font-semibold"
            >
              Quê quán:
            </label>
            <input
              type="text"
              value={formData?.address}
              onChange={handleOnchange}
              name="address"
              placeholder="Hà Nội"
              className="bg-gray-100 px-4 py-2 rounded-md outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-y-2 items-start w-full py-2 px-4">
            <label
              htmlFor=""
              className="font-semibold"
            >
              Học vấn (nếu có):
            </label>
            <input
              type="text"
              value={formData?.education}
              name="education"
              onChange={handleOnchange}
              placeholder="Đại học Bách Khoa Hà Nội...."
              className="bg-gray-100 px-4 py-2 rounded-md outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-y-2 items-start w-full py-2 px-4">
            <label
              htmlFor=""
              className="font-semibold"
            >
              Nơi làm việc:
            </label>
            <input
              type="text"
              value={formData?.workplace}
              onChange={handleOnchange}
              name="workplace"
              placeholder="Hà Nội"
              className="bg-gray-100 px-4 py-2 rounded-md outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-y-2 items-start w-full py-2 px-4">
            <label
              htmlFor=""
              className="font-semibold"
            >
              Tiểu sử:
            </label>
            <input
              type="text"
              value={formData?.story}
              onChange={handleOnchange}
              name="story"
              placeholder="................"
              className="bg-gray-100 px-4 py-2 rounded-md outline-none w-full"
            />
          </div>
          <div className="px-4 py-4">
            <button className="w-full py-2 rounded-md bg-blue-500 text-lg font-semibold text-white">
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
