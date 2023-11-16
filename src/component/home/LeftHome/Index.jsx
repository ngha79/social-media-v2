import React from 'react'
import HeaderLeft from './HeaderLeft/Index'

const LeftHome = () => {
  return (
    <div className="flex-1 hidden lg:flex sticky top-0">
      <div className="flex w-full gap-y-2 overflow-y-scroll hidden-scrollbar h-full">
        <HeaderLeft />
      </div>
    </div>
  )
}

export default LeftHome
