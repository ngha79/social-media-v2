import React from 'react'
import UserRequest from './UserRequest'

const ListUserRequest = ({ handleSetView, friendsRequest }) => {
  return (
    <div className="flex flex-col w-full overflow-scroll h-full">
      {friendsRequest?.map((friend) => (
        <UserRequest
          handleSetView={handleSetView}
          friend={friend}
          key={friend?._id}
        />
      ))}
    </div>
  )
}

export default ListUserRequest
