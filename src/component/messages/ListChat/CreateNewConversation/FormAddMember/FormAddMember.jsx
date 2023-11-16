import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import UserForm from './UserForm'
import useDebounce from '../../../../../hooks/useDebounce'
import {
  findFriendsByName,
  resetFriendSearch,
} from '../../../../../store/friends/friendSlice'

const FormAddMember = ({ handleAdd, handleRemove }) => {
  const { user } = useSelector((state) => state.auth)
  const { friendsSearch, loading } = useSelector((state) => state.friends)
  const [search, setSearch] = useState('')
  const [member, setMember] = useState([])

  const dispatch = useDispatch()
  const debouncedSearch = useDebounce(search, 500)

  const handleAddUser = (memberAdd) => {
    const isExist = member.find((mem) => mem._id === memberAdd._id)
    if (!isExist) {
      setMember((member) => [...member, memberAdd])
      handleAdd(memberAdd)
    }
  }
  const handleRemoveUser = (user) => {
    setMember(member.filter((mem) => mem._id !== user._id))
    handleRemove(user)
  }

  useEffect(() => {
    if (debouncedSearch)
      dispatch(findFriendsByName({ name: search, userId: user?._id }))
    else dispatch(resetFriendSearch())
  }, [debouncedSearch])

  return (
    <div className="p-4 flex flex-col gap-y-1">
      <label htmlFor="">Thêm thành viên</label>
      <div className="flex flex-wrap gap-2 border w-full p-2 border-gray-100 rounded-md h-max  dark:border-dark-search bg-gray-100 dark:bg-dark-search">
        {!!member?.length &&
          member?.map((mem) => (
            <UserForm
              key={mem._id}
              avatar={mem?.avatar}
              name={mem?.name}
              info={mem}
              handleRemoveUser={handleRemoveUser}
            />
          ))}
        <div className="relative w-full flex">
          <div className="w-max">
            <input
              type="text"
              name="name"
              placeholder="Nhập để tìm kiếm.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="name"
              className="px-2 py-1 rounded-md outline-none max-w-[250px]  bg-gray-100 dark:bg-dark-search"
            />
          </div>
          {loading ? (
            <div className="flex flex-col z-[1] max-h-[200px] w-full space-y-2 overflow-y-scroll absolute top-[100%] left-0 bg-white border-blue-100 rounded-md border p-2 shadow-lg">
              <button className="animate-pulse flex items-center gap-2 text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-sm font-semibold">
                <div className="w-[30px] bg-gray-200 h-[30px] rounded-full" />
                <div className="h-2 bg-slate-200 flex-1 rounded-md"></div>
              </button>
              <button className="animate-pulse flex items-center gap-2 text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-sm font-semibold">
                <div className="w-[30px] bg-gray-200 h-[30px] rounded-full" />
                <div className="h-2 bg-slate-200 flex-1 rounded-md"></div>
              </button>
              <button className="animate-pulse flex items-center gap-2 text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-sm font-semibold">
                <div className="w-[30px] bg-gray-200 h-[30px] rounded-full" />
                <div className="h-2 bg-slate-200 flex-1 rounded-md"></div>
              </button>
              <button className="animate-pulse flex items-center gap-2 text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-sm font-semibold">
                <div className="w-[30px] bg-gray-200 h-[30px] rounded-full" />
                <div className="h-2 bg-slate-200 flex-1 rounded-md"></div>
              </button>
            </div>
          ) : friendsSearch?.length ? (
            <div className="flex flex-col z-[1] min-h-[200px] w-full space-y-2 overflow-y-scroll absolute top-12 -left-2 bg-white border-blue-100 rounded-md border p-2 shadow-lg">
              <h3 className="p-2 font-medium">Kết quả tìm kiếm</h3>
              {friendsSearch?.map((friend) => (
                <button
                  key={friend?._id}
                  onClick={() => handleAddUser(friend)}
                  className="flex items-center justify-start gap-2 text-blue-600 w-full hover:bg-blue-100 p-2 border rounded-sm font-semibold"
                >
                  <img
                    src={friend?.avatar}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <span className="w-full text-left text-sm truncate">
                    {friend?.name}
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default FormAddMember
