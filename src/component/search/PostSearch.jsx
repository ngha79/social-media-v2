import React, { useEffect, useRef, useState } from 'react'
import Posts from '../home/CenterHome/Posts/Index'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getPostSearch, getPostSearchPage } from '../../store/post/postSlice'

const PostSearch = () => {
  const { user } = useSelector((state) => state.auth)
  const { postsSearch } = useSelector((state) => state.posts)
  const [searchParams, setSearchParams] = useSearchParams({ search: '' })
  const dispatch = useDispatch()
  let search = searchParams.get('search')
  const [currPage, setCurrpage] = useState(0)

  useEffect(() => {
    if (search) {
      dispatch(
        getPostSearch({
          search,
          typeSearch: ['post'],
          skip: 0,
          limit: 10,
        })
      )
    }
  }, [search])

  useEffect(() => {
    if (search && currPage) {
      dispatch(
        getPostSearchPage({
          search,
          typeSearch: ['post'],
          skip: postsSearch.length,
          limit: 10,
        })
      )
    }
  }, [currPage, search])

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
      className="w-full flex items-start justify-center overflow-auto h-full"
      ref={listInnerRef}
      onScroll={onScroll}
    >
      <div className="flex flex-col md:max-w-[700px] w-full mt-8">
        <Posts
          posts={postsSearch}
          userId={user?._id}
        />
      </div>
    </div>
  )
}

export default PostSearch
