import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const UserForm = ({ avatar, name, info, handleRemoveUser }) => {
  const handleRemove = () => {
    handleRemoveUser(info)
  }
  return (
    <div className="flex items-center gap-2 text-blue-600 bg-blue-100 p-1 rounded-md font-semibold">
      <img
        src={avatar}
        alt=""
        className="w-[30px] h-[30px] rounded-full"
      />
      <span className="max-w-[100px] truncate">{name}</span>
      <button onClick={handleRemove}>
        <AiOutlineClose />
      </button>
    </div>
  )
}

export default UserForm
