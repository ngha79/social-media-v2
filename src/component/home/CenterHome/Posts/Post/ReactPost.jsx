import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { FaShare, FaRegCommentAlt } from 'react-icons/fa'
import { PiShareFatLight } from 'react-icons/pi'
import DialogPost from './DialogPost'
import { useDispatch, useSelector } from 'react-redux'
import { likePost } from '../../../../../store/post/postSlice'
import SharePost from './SharePost/SharePost'
import RequestApi from '../../../../../helper/api'
import {
  getCommentByPost,
  setCurrentPostComments,
} from '../../../../../store/comment/commentSlice'
import { socket } from '../../../../../utils/socket'

const ReactPost = ({ type, post }) => {
  const { user } = useSelector((state) => state.auth)
  const { comments, currentCommentsPostId } = useSelector(
    (state) => state.comments
  )
  let [isOpen, setIsOpen] = useState(false)
  let [totalComment, setTotalComment] = useState(0)
  let [totalCommentParent, setTotalCommentParent] = useState(0)
  const dispatch = useDispatch()
  function closeModal() {
    setIsOpen(false)
    socket.emit('leave-post', post._id)
  }
  function openModal() {
    if (!type) return
    setIsOpen(true)
    if (currentCommentsPostId === post._id) return
    socket.emit('register-post', post._id)
    dispatch(
      getCommentByPost({
        postId: post?._id,
        userId: user?._id,
      })
    )
    dispatch(setCurrentPostComments(post._id))
  }

  const handleLikePost = () => {
    let type
    post?.like?.find((userId) => userId === user?._id)
      ? (type = 'unlike')
      : (type = 'like')

    dispatch(
      likePost({
        postId: post?._id,
        userId: user?._id,
        type,
      })
    )
  }

  // useEffect(() => {
  //   async function getCountComment() {
  //     try {
  //       const res = await RequestApi({
  //         endpoint: `/comment/${post?._id}`,
  //         method: 'GET',
  //       })
  //       const data = res.data.metadata
  //       if (data) {
  //         setTotalComment(data.totalComment)
  //         setTotalCommentParent(data.totalCommentParent)
  //       }
  //     } catch (error) {
  //       return
  //     }
  //   }
  //   return () => {
  //     if (post && type && !totalComment && !totalCommentParent) {
  //       getCountComment()
  //     }
  //   }
  // }, [])

  const handleSetTotalComment = () => {
    setTotalComment(totalComment + 1)
  }

  return (
    <div className="flex flex-col px-4 pt-4 ">
      <div className="grid grid-cols-2 text-sm">
        <div>
          {!!post?.like.length && (
            <div className="text-start ml-2">
              {post?.like.length} lượt thích
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 justify-end w-full">
          {totalComment ? (
            <div className="text-center">
              {totalComment || comments?.length} bình luận
            </div>
          ) : null}
          {!!post?.share.length && (
            <div className="text-end mr-2">
              {post?.share.length} lượt chia sẻ
            </div>
          )}
        </div>
      </div>
      <div
        className={`flex items-center justify-around text-sm md:text-base gap-4 py-1 border-gray-200 dark:border-dark-icon-story ${
          type ? 'border-t' : 'border-y'
        }`}
      >
        <div
          onClick={handleLikePost}
          className={`flex items-center w-max font-semibold ${
            post?.like?.find((userId) => userId === user?._id)
              ? 'text-blue-500'
              : 'text-light-gray dark:text-dark-hover dark:hover:bg-dark-icon-story-hover'
          }  gap-2 justify-center flex-1 rounded-md p-2 cursor-pointer hover:bg-gray-100`}
        >
          <AiOutlineLike size={18} />
          Thích
        </div>
        <div
          onClick={openModal}
          className="flex items-center w-max font-semibold text-light-gray dark:text-dark-hover dark:hover:bg-dark-icon-story-hover gap-2 justify-center flex-1 rounded-md p-2 cursor-pointer hover:bg-gray-100"
        >
          <FaRegCommentAlt size={16} />
          Bình luận
        </div>
        <DialogPost
          isOpen={isOpen}
          closeModal={closeModal}
          openModal={openModal}
          post={post}
          handleSetTotalComment={handleSetTotalComment}
          totalComment={totalComment}
          totalCommentParent={totalCommentParent}
        />

        {user?._id !== post?.author?._id && <SharePost post={post} />}
      </div>
    </div>
  )
}

export default ReactPost
