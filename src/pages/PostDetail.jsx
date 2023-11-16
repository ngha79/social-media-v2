import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import RequestApi from '../helper/api'
import postsService from '../store/post/postService'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../component/home/CenterHome/Posts/Post/Index'
import { getPostById } from '../store/post/postSlice'

const PostDetail = () => {
  const { user } = useSelector((state) => state.auth)
  const { posts } = useSelector((state) => state.posts)
  const { postId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (postId && user) {
      dispatch(getPostById(postId))
    }
  }, [postId, user])

  return (
    <>
      {posts?.find((post) => post?._id === postId) ? (
        <div className="flex items-top justify-center pt-8 min-h-[calc(100vh-58px)]">
          <div className="max-w-[600px] xl:max-w-[700px] w-full">
            <Post
              author={posts?.find((post) => post._id === postId)?.author}
              post={posts?.find((post) => post._id === postId)}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-center min-h-[calc(100vh-58px)]">
          <span>Không tìm thấy bài viết</span>
        </div>
      )}
    </>
  )
}

export default PostDetail
