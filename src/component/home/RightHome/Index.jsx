import React from 'react'
import Friends from './Friends/Index'
import GroupChat from './GroupChat/Index'

const RightHome = () => {
  return (
    <div className="max-w-[20%] w-full hidden lg:block">
      <div className="fixed w-[20%] right-0 p-2 flex flex-col gap-y-2 overflow-y-scroll hidden-scrollbar h-full">
        <Friends />
        <GroupChat />
      </div>
    </div>
  )
}

export default RightHome
