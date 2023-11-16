import React from 'react'
import PopupUser from '../../../user/PopupUser'
import ActionsFriend from '../../../friends/RightBar/AllFriends/ActionsFriend'
import { useSelector } from 'react-redux'

const FriendProfile = ({ friend }) => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className="w-full h-max border relative border-gray-100 p-4 rounded-md flex items-center justify-between gap-4">
      <PopupUser userProfile={friend} />
      {user?._id !== friend?._id && <ActionsFriend friendId={friend?._id} />}
    </div>
  )
}

export default FriendProfile
