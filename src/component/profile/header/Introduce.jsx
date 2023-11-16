import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Introduce = () => {
  const { profile } = useSelector((state) => state.auth)
  const [userProfile, setUserProfile] = useState({
    address: '',
    dateOfBirdth: '',
    story: '',
    workplace: '',
    education: '',
    residence: '',
    gender: '',
  })
  useEffect(() => {
    setUserProfile({
      address: profile?.address,
      dateOfBirdth: profile?.dateOfBirdth,
      story: profile?.story,
      workplace: profile?.workplace,
      education: profile?.education,
      residence: profile?.residence,
      gender: profile?.gender,
    })
  }, [profile])
  return (
    <div className="bg-white rounded-md shadow w-full dark:bg-dark-nav">
      <h1 className="font-bold text-lg p-4 border-b border-gray-200 dark:border-dark-icon-story-hover">
        Giới thiệu
      </h1>
      <div className="flex flex-col gap-y-2 p-4">
        {userProfile?.workplace ? (
          <div className="">Đang làm việc tại {userProfile?.workplace}</div>
        ) : (
          <div className="">Không có nơi làm việc để hiển thị</div>
        )}
        {userProfile?.education ? (
          <div className="">Học tại {userProfile?.education}</div>
        ) : (
          <div className="">Không có trường học nào để hiển thị</div>
        )}
        {userProfile?.residence ? (
          <div className="">Sống tại {userProfile?.residence}</div>
        ) : (
          <div className="">Chưa cập nhật nơi ở.</div>
        )}
        {userProfile?.address ? (
          <div className="">Sinh ra ở {userProfile?.address}</div>
        ) : (
          <div className="">Chưa cập nhật nơi sinh.</div>
        )}

        <div className="">
          Giới tính: {userProfile?.gender === 'male' ? 'Nam' : 'Nữ'}
        </div>
        <div className="">Ngày sinh {userProfile?.dateOfBirdth}</div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="font-semibold text-lg pt-4"
          >
            Tiểu sử:
          </label>
          <div>{userProfile?.story}</div>
        </div>
      </div>
    </div>
  )
}

export default Introduce
