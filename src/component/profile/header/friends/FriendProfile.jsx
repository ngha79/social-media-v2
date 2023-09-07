import React from 'react'
import PopupUser from '../../../user/PopupUser'
import ActionsFriend from '../../../friends/RightBar/AllFriends/ActionsFriend'

const FriendProfile = () => {
  return (
    <div className="w-full h-max border relative border-gray-100 p-4 rounded-md flex items-center justify-between gap-4">
      <PopupUser />
      <ActionsFriend />
    </div>
  )
}

export default FriendProfile
