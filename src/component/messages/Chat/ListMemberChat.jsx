import React from 'react'
import MemberChat from './MemberChat'

const ListMemberChat = ({
  conversationId,
  memberConversation,
  leaderConversation,
}) => {
  return (
    <div className="max-h-[300px] overflow-y-scroll pb-24">
      <div className="flex flex-col px-4 py-2 text-sm space-y-4">
        {memberConversation?.map((member) => (
          <MemberChat
            key={member?._id}
            member={member}
            conversationId={conversationId}
            leaderConversation={leaderConversation}
          />
        ))}
      </div>
    </div>
  )
}

export default ListMemberChat
