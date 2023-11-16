import React, { useEffect } from 'react'
import ProfileLayout from '../component/profile/Index'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPostProfile, resetPostProfile } from '../store/post/postSlice'
import { useParams } from 'react-router-dom'
import { getProfileUser } from '../store/auth/authSlice'

const Profile = () => {
  const { profile } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  let { id } = useParams()
  const { userId } = window.history.state
  useEffect(() => {
    dispatch(getProfileUser(id || userId))
    dispatch(
      getAllPostProfile({
        userId: id || userId,
        page: 1,
      })
    )
  }, [id, userId])
  return <ProfileLayout user={profile} />
}

export default Profile
