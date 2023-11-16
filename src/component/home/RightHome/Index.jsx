import { useEffect } from 'react'
import Friends from './Friends/Index'
import GroupChat from './GroupChat/Index'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFriends } from '../../../store/friends/friendSlice'

const RightHome = () => {
  return (
    <div className="flex-1 hidden md:flex sticky top-0">
      <div className="flex flex-col w-full gap-y-2 overflow-y-scroll hidden-scrollbar h-full">
        <Friends />
        <GroupChat />
      </div>
    </div>
  )
}

export default RightHome
