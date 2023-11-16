import React, { useEffect, useRef, useState } from 'react'
import UserTag from './UserTag/UserTag'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { usersSearch, usersSearchPage } from '../../store/auth/authSlice'

const UserSearch = () => {
  const { userSearch } = useSelector((state) => state.auth)
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
    }
  }, [search])

  useEffect(() => {
    if (search && currPage) {
      dispatch(
        usersSearchPage({
          search,
          typeSearch: ['user'],
          skip: userSearch.length,
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
      className="w-full flex items-start justify-center overflow-y-scroll h-full"
      ref={listInnerRef}
      onScroll={onScroll}
    >
      <div className="flex flex-col md:max-w-[700px] w-full mt-8 gap-y-4">
        {userSearch?.map((result) => (
          <UserTag
            userProfile={result}
            key={result._id}
          />
        ))}
      </div>
    </div>
  )
}

export default UserSearch
