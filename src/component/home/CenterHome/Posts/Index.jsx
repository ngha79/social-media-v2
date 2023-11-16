import React, { useEffect, useRef } from 'react'
import Post from './Post/Index'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

const Posts = ({ type }) => {
  const { id } = useParams()
  const { postsProfile, posts } = useSelector((state) => state.posts)
  return (
    <div className="flex flex-col gap-y-4 pb-20 w-full">
      {id || window.location.pathname !== '/'
        ? postsProfile?.map((post) => (
            <Post
              author={post?.author}
              post={post}
              key={post?._id}
              type={type}
            />
          ))
        : posts?.map((post) => (
            <Post
              author={post?.author}
              post={post}
              key={post?._id}
              type={type}
            />
          ))}
    </div>
  )
}

export default Posts
