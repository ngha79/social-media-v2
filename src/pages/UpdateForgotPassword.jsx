import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  createOtp,
  resetState,
  setUser,
  updateForgotPassword,
} from '../store/auth/authSlice'
import { socket } from '../utils/socket'

const UpdateForgotPassword = () => {
  const { user, error, success, message } = useSelector((state) => state.auth)
  const [update, setUpdate] = useState({
    email: '',
    otp: '',
    newPassword: '',
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleUpdatePassword = (e) => {
    e.preventDefault()
    const { email, otp, newPassword } = update
    if (!email || !otp || !newPassword) {
      return toast.info('Vui lòng nhập đầy đủ thông tin.')
    }
    if (newPassword.length < 6) {
      return toast.info('Mật khẩu phải từ 6 ký tự trở lên.')
    }
    dispatch(updateForgotPassword(update))
  }

  const handleOnchange = (e) => {
    setUpdate((update) => ({ ...update, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (error) {
      toast.error(message)
      dispatch(resetState())
    }
    if (success) {
      dispatch(resetState())
      toast.success('Cập nhật mật khẩu thành công.')
      navigate('/login')
    }
  }, [error, dispatch, success, message])

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [])

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Quên mật khẩu
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleUpdatePassword}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email của bạn:
                </label>
                <input
                  type="email"
                  name="email"
                  value={update.email}
                  onChange={handleOnchange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="otp"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mã xác thực:
                </label>
                <input
                  type="text"
                  name="otp"
                  value={update.otp}
                  onChange={handleOnchange}
                  id="otp"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="VD:111111"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mật khẩu mới:
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={update.newPassword}
                  onChange={handleOnchange}
                  id="newPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="*******"
                  required
                />
              </div>
              <button
                onClick={handleUpdatePassword}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Cập nhật
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Bạn đã có tài khoản?{' '}
                <Link
                  to={'/login'}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Đăng nhập
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpdateForgotPassword
