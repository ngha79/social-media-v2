import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import LeftBar from './LeftBar/LeftBar'
import CenterBar from './CenterBar/Index'
import RightBar from './RightBar/Index'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full shadow border-b dark:border-gray-700 border-white flex items-center justify-between bg-white z-10 dark:bg-dark-nav">
      <LeftBar />
      <CenterBar />
      <RightBar />
    </div>
  )
}

export default Navbar
