import React from 'react'
import HeaderLeft from './HeaderLeft/Index'

const LeftHome = () => {
  return (
    <div className="w-[20%] hidden md:block">
      <div className="fixed left-0 p-2 w-[20%] flex flex-col gap-y-2 overflow-y-scroll hidden-scrollbar h-full">
        <HeaderLeft />
      </div>
    </div>
  )
}

export default LeftHome
