import React from 'react'
import SettingMemberChat from './SettingMemberChat'
import { useSelector } from 'react-redux'

const MemberChat = ({ member, leaderConversation, conversationId }) => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className="flex items-center justify-between relative">
      <div className="flex items-center gap-2 w-full">
        <img
          src={member?.avatar}
          alt=""
          className="w-[40px] h-[40px] rounded-full"
        />
        <span className="font-semibold">{member?.name}</span>
      </div>
      {member?._id !== user?._id && (
        <SettingMemberChat
          leaderConversation={leaderConversation}
          conversationId={conversationId}
          memberId={member?._id}
        />
      )}
    </div>
  )
}

export default MemberChat
