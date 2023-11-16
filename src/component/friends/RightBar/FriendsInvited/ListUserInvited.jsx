import React from 'react'
import UserInvited from './UserInvited'

const ListUserInvited = ({ handleSetView, friendsInvited }) => {
  return (
    <div className="flex flex-col w-full overflow-scroll h-full">
      {friendsInvited?.map((friend) => (
        <UserInvited
          handleSetView={handleSetView}
          friend={friend}
          key={friend?._id}
        />
      ))}
    </div>
  )
}

export default ListUserInvited
