import React from 'react'
import { Outlet } from 'react-router-dom'

const RightBar = () => {
  return (
    <div className="flex-1 overflow-y-scroll z-0 p-8 w-full h-[calc(100vh-58px)]">
      <Outlet />
    </div>
  )
}

export default RightBar
