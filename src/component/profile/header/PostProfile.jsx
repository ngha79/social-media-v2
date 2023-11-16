import React from 'react'
import CreatePost from '../../home/CenterHome/CreatePost/Index'
import Posts from '../../home/CenterHome/Posts/Index'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostProfile = () => {
  const { user, profile } = useSelector((state) => state.auth)
  const { name, id } = useParams()
  return (
    <div className="flex flex-col w-full min-[920px]:flex-row gap-x-4 gap-y-4 px-2 md:px-20 min-[920px]:px-0">
      <div className="flex flex-col gap-y-4 flex-[4]">
        {/* <div className="bg-white dark:bg-dark-nav rounded-md shadow w-full p-4 space-y-2">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-bold text-lg">Ảnh</h1>
            <Link to={`/${name}/${id}/picture`}>
              <button className="text-blue-500 text-base font-semibold rounded-md hover:bg-gray-100 py-2 px-4 dark:hover:bg-dark-icon-story-hover">
                Xem tất cả ảnh
              </button>
            </Link>
          </div>
          <div className="w-full max-h-[600px] grid grid-cols-3 gap-4 gap-y-4">
            <img
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/240527394_520194609088004_8050637018545073386_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=c7l47JoSOEwAX9SOBiD&_nc_ht=scontent.fhan5-2.fna&oh=00_AfDSfjWouXoxoDBSfXHtnjWMrRxDlBNNakYd7hIpcltf3Q&oe=64F7F7A7"
              alt=""
              className="w-full h-full cursor-pointer rounded-md"
            />
            <img
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/240527394_520194609088004_8050637018545073386_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=c7l47JoSOEwAX9SOBiD&_nc_ht=scontent.fhan5-2.fna&oh=00_AfDSfjWouXoxoDBSfXHtnjWMrRxDlBNNakYd7hIpcltf3Q&oe=64F7F7A7"
              alt=""
              className="w-full h-full cursor-pointer rounded-md"
            />
          </div>
        </div> */}
        <div className="bg-white dark:bg-dark-nav rounded-md shadow w-full p-4 space-y-2">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-bold text-lg">Bạn bè</h1>
            <Link to={`/${name}/${id}/friends`}>
              <button className="text-blue-500 text-base font-semibold rounded-md hover:bg-gray-100 py-2 px-4 dark:hover:bg-dark-icon-story-hover">
                Xem tất cả Bạn bè
              </button>
            </Link>
          </div>
          <span className="text-gray-700 dark:text-light-search">
            {profile?.friends?.length} người bạn
          </span>
          <div className="w-full max-h-[600px] grid grid-cols-3 gap-x-4 gap-y-4">
            {profile?.friends?.map((friend) => (
              <Link
                to={`/${friend?.name}/${friend?._id}`}
                key={friend?._id}
              >
                <div className="flex flex-col w-full">
                  <img
                    src={friend?.avatar}
                    alt=""
                    className="w-full h-full cursor-pointer rounded-md"
                  />
                  <span className="font-semibold w-max">{friend?.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex-[5] space-y-4">
        {id === user?._id && <CreatePost />}
        <Posts
          userId={profile?._id}
          type={'profile'}
        />
      </div>
    </div>
  )
}

export default PostProfile
