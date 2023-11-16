import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import LeftBar from './LeftBar/LeftBar'
import CenterBar from './CenterBar/Index'
import RightBar from './RightBar/Index'

const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <div className="fixed top-0 z-10 left-0 w-full shadow border-b dark:border-gray-700 border-white flex items-center justify-between bg-white dark:bg-dark-nav">
      <LeftBar />
      <div
        className={`flex justify-center border-t md:border-t-0 border-gray-200 dark:border-dark-icon-story-hover flex-1 ${
          pathname !== '/' ? 'hidden md:flex' : 'md:static fixed'
        }  bottom-0 left-0 bg-white z-10 dark:bg-dark-nav w-full`}
      >
        <CenterBar />
      </div>
      <RightBar />
    </div>
  )
}

export default Navbar
