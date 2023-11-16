import { AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { likePost } from '../../../../../store/post/postSlice'
import SharePost from './SharePost/SharePost'

const ReactInPost = ({ post, totalComment }) => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

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
            <div className="text-center">{totalComment} bình luận</div>
          ) : null}
          {!!post?.share.length && (
            <div className="text-end mr-2">
              {post?.share.length} lượt chia sẻ
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-around text-sm md:text-base gap-4 py-1 border-gray-200 dark:border-dark-icon-story border-y">
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
        <div className="flex items-center w-max font-semibold text-light-gray dark:text-dark-hover dark:hover:bg-dark-icon-story-hover gap-2 justify-center flex-1 rounded-md p-2 cursor-pointer hover:bg-gray-100">
          <FaRegCommentAlt size={16} />
          Bình luận
        </div>

        {user?._id !== post?.author?._id && <SharePost post={post} />}
      </div>
    </div>
  )
}

export default ReactInPost
