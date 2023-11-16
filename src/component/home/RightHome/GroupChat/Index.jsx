import React from 'react'
import Group from './Group'
import { useSelector } from 'react-redux'

const GroupChat = () => {
  const { conversationGroup } = useSelector((state) => state.conversation)
  return (
    <div className="w-full">
      <h3 className="font-semibold mx-2 text-[17px] text-[#65676b] dark:text-dark-item-hover border-t py-2 border-gray-300 dark:border-slate-500">
        Cuộc trò chuyện nhóm
      </h3>
      {conversationGroup?.map((item, i) => (
        <Group
          chat={item}
          key={i}
        />
      ))}
    </div>
  )
}

export default GroupChat
