import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setUser } from '../store/auth/authSlice'
import { socket } from '../utils/socket'
const VITE_REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL

const Login = () => {
  const { user } = useSelector((state) => state.auth)
  const [account, setAccount] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSetAccount = (e) => {
    setAccount((account) => ({ ...account, [e.target.name]: e.target.value }))
  }

  const handleLoginGoogle = () => {
    window.open(`${VITE_REACT_APP_API_URL}/auth/google`, '_self')
    function getUser() {
      axios({
        method: 'GET',
        url: `${VITE_REACT_APP_API_URL}/auth/profile`,
      })
    }
    getUser()
  }

  const handleLoginLocal = async (e) => {
    e.preventDefault()
    if (!account.email.length) {
      return toast.info('Vui lòng nhập đầy đủ thông tin.')
    }
    if (account.password.length < 6) {
      return toast.info('Mật khẩu phải từ 6 ký tự trở lên.')
    }
    await axios({
      method: 'POST',
      url: '${VITE_REACT_APP_API_URL}/auth/login',
      data: { ...account },
      withCredentials: true,
    })
      .then((res) => {
        const { status, message, user } = res.data
        if (status !== 400) {
          dispatch(setUser(user))
          navigate('/')
        } else {
          toast.error(message)
        }
      })
      .catch((err) => {
        toast.error('Có lỗi xảy ra.')
      })
  }
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
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleLoginLocal}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={account.email}
                  onChange={handleSetAccount}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={account.password}
                  onChange={handleSetAccount}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to={'/forgot-password'}
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <Link
                  to={'/signup'}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
            <div className="flex items-center justify-between gap-2 w-full">
              <button
                onClick={handleLoginGoogle}
                className="px-4 py-2 flex text-sm items-center justify-start gap-4 w-full rounded-md border border-gray-200 dark:border-dark-icon-story-hover hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover font-semibold"
              >
                <FcGoogle size={24} />
                Đăng nhập với Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
