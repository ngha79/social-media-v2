import React from 'react'
import UserSuggest from './UserSuggest'

const ListUserSuggest = ({ handleSetView }) => {
  return (
    <div className="flex flex-col w-full overflow-scroll h-full">
      <UserSuggest handleSetView={handleSetView} />
      <UserSuggest handleSetView={handleSetView} />
      <UserSuggest handleSetView={handleSetView} />
      <UserSuggest handleSetView={handleSetView} />
      <UserSuggest handleSetView={handleSetView} />
      <UserSuggest handleSetView={handleSetView} />
      <UserSuggest handleSetView={handleSetView} />
      <UserSuggest handleSetView={handleSetView} />
      <UserSuggest handleSetView={handleSetView} />
      <UserSuggest handleSetView={handleSetView} />
      <UserSuggest handleSetView={handleSetView} />
    </div>
  )
}

export default ListUserSuggest
