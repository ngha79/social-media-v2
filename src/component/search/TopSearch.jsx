import React, { useEffect, useRef, useState } from 'react'
import UserTag from './UserTag/UserTag'
import { Link, useSearchParams } from 'react-router-dom'
import Posts from '../home/CenterHome/Posts/Index'
import { useDispatch, useSelector } from 'react-redux'
import { usersSearch } from '../../store/auth/authSlice'
import { getPostSearch, getPostSearchPage } from '../../store/post/postSlice'

const TopSearch = () => {
  const { user, userSearch } = useSelector((state) => state.auth)
  const { postsSearch } = useSelector((state) => state.posts)
  const [searchParams, setSearchParams] = useSearchParams({ search: '' })
  const [currPage, setCurrpage] = useState(0)
  const dispatch = useDispatch()
  let search = searchParams.get('search')
  useEffect(() => {
    if (search) {
      dispatch(
        usersSearch({
          search,
          typeSearch: ['user'],
          skip: 0,
          limit: 10,
        })
      )
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
      className="w-full h-full flex items-center justify-start flex-col overflow-auto"
      onScroll={onScroll}
      ref={listInnerRef}
    >
      {userSearch?.length > 0 && (
        <div className="flex flex-col p-4 rounded-lg bg-gray-50 dark:bg-dark-nav md:max-w-[700px] w-full mx-8 my-8">
          <h1 className="font-medium text-lg mb-4">Người dùng</h1>
          <div className="flex flex-col gap-y-2">
            {userSearch?.map((result) => (
              <UserTag
                userProfile={result}
                key={result._id}
              />
            ))}
            <Link to={`/search/user?search=${search}`}>
              <button className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-lg font-medium">
                Xem tất cả
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="w-full h-full overflow-y-scroll min-h-[500px] flex items-center justify-center">
        <div className="md:max-w-[700px] w-full">
          <Posts
            posts={postsSearch}
            userId={user?._id}
          />
        </div>
      </div>
    </div>
  )
}

export default TopSearch
