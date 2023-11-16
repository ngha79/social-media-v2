import { useEffect, useRef, useState } from 'react'
import BackgroundImageUser from './header/BackgroundImageUser'
import DetailProfile from './header/DetailProfile'
import { Outlet, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPostProfilePage } from '../../store/post/postSlice'

const ProfileLayout = ({ user }) => {
  const dispatch = useDispatch()
  const { id, name } = useParams()
  const { userId } = window.history.state
  const { postsProfile } = useSelector((state) => state.posts)
  const [currPage, setCurrpage] = useState(0)
  useEffect(() => {
    if (currPage) {
      dispatch(
        getAllPostProfilePage({
          userId: id || userId,
          page: Math.ceil(postsProfile?.length / 20) + 1,
        })
      )
    }
  }, [currPage])
  const listInnerRef = useRef()
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrpage(currPage + 1)
      }
    }
  }
  return (
    <div
      className="flex flex-col items-center top-[57px] absolute w-full h-[calc(100vh-58px)] overflow-y-scroll"
      onScroll={onScroll}
      ref={listInnerRef}
    >
      <div className="flex flex-col items-center w-full bg-white dark:bg-dark-nav h-max">
        <BackgroundImageUser background={user?.backgroundImage} />
        <DetailProfile
          userId={user?._id}
          avatar={user?.avatar}
          friendsProfile={user?.friends}
          address={user?.address}
          name={user?.name}
          dateOfBirdth={user?.dateOfBirdth}
          story={user?.story}
          workplace={user?.workplace}
          education={user?.education}
          residence={user?.residence}
        />
      </div>
      <div className="w-full max-w-[1200px] my-8 bg-gray-100 dark:bg-dark-theme h-max overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default ProfileLayout
