import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getCommentByParentComment,
  likeComment,
} from '../../../../../../../store/comment/commentSlice'
import moment from 'moment/min/moment-with-locales'
import vi from 'moment/locale/vi'
import { BiSolidLike } from 'react-icons/bi'
import CreateComment from '../../CreateComment'
import DeleteComment from '../Comment/DeleteComment/DeleteComment'

const ReplyComment = ({ comment, post, handleSetTotalComment }) => {
  const { user } = useSelector((state) => state.auth)
  const [open, setOpen] = useState(false)
  const [createComment, setCreateComment] = useState(false)
  const [userReply, setUserReply] = useState()
  const dispatch = useDispatch()
  const handleLikeComment = () => {
    dispatch(likeComment({ commentId: comment._id, userId: user._id }))
  }
  moment.updateLocale('vi', vi)
  const handleSetOpen = (result) => {
    setOpen(result)
  }

  const handleCreateReplyComment = () => {
    setCreateComment(!createComment)
    setUserReply(comment?.comment_userId)
  }

  const handleDeleteReplyComment = () => {
    setUserReply()
  }

  const handleGetCommentChild = () => {
    dispatch(
      getCommentByParentComment({
        postId: post._id,
        parentCommentId: comment._id,
        userId: user._id,
      })
    )
  }
  return (
    <>
      {comment?.isDeleted ? (
        <span className="text-sm text-center">Bình luận đã bị xóa</span>
      ) : (
        <>
          <div className="flex relative items-start justify-start gap-2">
            <Link
              to={`/${comment?.comment_userId?.name}/${comment?.comment_userId?._id}`}
            >
              <img
                src={comment?.comment_userId?.avatar}
                alt=""
                className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
              />
            </Link>
            <div className="bg-light-search group relative  max-w-[70%] dark:bg-dark-search rounded-md p-2 text-sm text-gray-700 dark:text-dark-item-hover">
              <Link
                to={`/${comment?.comment_userId?.name}/${comment?.comment_userId?._id}`}
              >
                <span className="font-semibold max-w-[150px] truncate line-clamp-1 text-ellipsis overflow-hidden hover:underline cursor-pointer">
                  {comment?.comment_userId?.name}
                </span>
              </Link>

              <div className="flex flex-col text-base min-w-[200px] w-max">
                <div className="flex flex-wrap gap-2">
                  {comment?.comment_user_replies?.map((userReply) => (
                    <button
                      key={userReply._id}
                      className="hover:underline "
                    >
                      <Link
                        to={`/${userReply.name}/${userReply._id}`}
                        className="cursor-pointer text-blue-500"
                      >
                        {userReply?.name}
                      </Link>
                    </button>
                  ))}
                  <span>{comment?.comment_content}</span>
                </div>
                {comment?.comment_images?.length > 0 && (
                  <div className="flex flex-wrap gap-2 max-w-[400px] w-max">
                    {comment?.comment_images?.map((image, i) => (
                      <img
                        src={image}
                        key={i}
                        className="max-w-[20%] min-w-[120px] md:max-h-[200px] max-h-[150px] border border-gray-200 dark:border-dark-icon-hover shadow-sm"
                      />
                    ))}
                  </div>
                )}
              </div>
              {comment?.comment_likes?.length ? (
                <div className="absolute bottom-1 right-1 flex items-center bg-white shadow-md dark:bg-dark-icon-story-hover rounded-xl">
                  <div className="p-1 rounded-full text-blue-500">
                    <BiSolidLike size={16} />
                  </div>
                  <span className="text-sm mr-1">
                    {comment?.comment_likes?.length}
                  </span>
                </div>
              ) : null}
              {comment?.comment_userId?._id === user?._id ? (
                <div
                  className={`group-hover:block ${open ? 'block' : 'hidden'}`}
                >
                  <DeleteComment
                    comment={comment}
                    setOpen={handleSetOpen}
                  />
                </div>
              ) : null}
            </div>
            <div className="absolute -bottom-[20px] w-max px-2 left-12 text-sm flex items-center gap-4">
              <span
                className={`hover:underline cursor-pointer ${
                  comment?.comment_likes?.find((userId) => userId === user?._id)
                    ? 'text-blue-500'
                    : ''
                }`}
                onClick={handleLikeComment}
              >
                Thích
              </span>
              <span
                className="hover:underline cursor-pointer"
                onClick={handleCreateReplyComment}
              >
                Phản hồi
              </span>
              <span className="hover:underline cursor-pointer">
                {moment(comment?.createdAt).fromNow()}
              </span>
            </div>
          </div>
          {comment?.comment_child?.length > 0 &&
          comment?.commentChild?.length !== comment?.comment_child?.length ? (
            <button
              onClick={handleGetCommentChild}
              className="text-sm hover:underline w-max items-start pl-12 pt-2"
            >
              {comment?.comment_child?.length} phản hồi
            </button>
          ) : null}

          {userReply || createComment ? (
            <div className="relative bottom-0 px-8">
              <CreateComment
                post={post}
                userReply={userReply}
                parentCommentId={comment?.comment_parentId}
                handleDeleteReplyComment={handleDeleteReplyComment}
                handleSetTotalComment={handleSetTotalComment}
              />
            </div>
          ) : null}
        </>
      )}
    </>
  )
}

export default ReplyComment
