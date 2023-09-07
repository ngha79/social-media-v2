import React from 'react'
import BackgroundImageUser from './header/BackgroundImageUser'
import DetailProfile from './header/DetailProfile'
import { Outlet } from 'react-router-dom'

const ProfileLayout = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full bg-white dark:bg-dark-nav h-max">
        <BackgroundImageUser />
        <DetailProfile />
      </div>
      <div className="w-full max-w-[1200px] my-8 bg-gray-100 dark:bg-dark-theme">
        <Outlet />
      </div>
    </div>
  )
}

export default ProfileLayout
