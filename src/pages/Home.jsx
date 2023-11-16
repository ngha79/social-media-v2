import { useDispatch, useSelector } from 'react-redux'
import CenterHome from '../component/home/CenterHome/Index'
import LeftHome from '../component/home/LeftHome/Index'
import { ListPopupChat } from '../component/home/ListChat/ListPopupChat'
import RightHome from '../component/home/RightHome/Index'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllPost } from '../store/post/postSlice'
const Home = () => {
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const { id } = useParams()
  const { posts } = useSelector((state) => state.posts)
  const [currPage, setCurrpage] = useState(0)
  useEffect(() => {
    if (user && currPage) {
      dispatch(
        getAllPost({
          userId: user?._id,
          page: Math.ceil(posts?.length / 20) + 1,
        })
      )
    }
  }, [currPage, id, user])

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
      className="relative top-[58px] flex h-[calc(100vh-58px)] dark:bg-dark-theme bg-light-search dark:text-dark-item-hover overflow-y-scroll"
      ref={listInnerRef}
      onScroll={onScroll}
    >
      <LeftHome />
      <CenterHome />
      <RightHome />
      <ListPopupChat />
    </div>
  )
}

export default Home
