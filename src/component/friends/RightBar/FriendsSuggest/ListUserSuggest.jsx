import React from 'react'
import UserSuggest from './UserSuggest'

const ListUserSuggest = ({ handleSetView, friendsSuggest }) => {
  return (
    <div className="flex flex-col w-full overflow-scroll h-full">
      {friendsSuggest?.map((friend) => (
        <UserSuggest
          handleSetView={handleSetView}
          friend={friend}
          key={friend?._id}
        />
      ))}
    </div>
  )
}

export default ListUserSuggest
