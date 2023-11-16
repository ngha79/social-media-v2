import Comment from './Comment/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { getCommentByParentComment } from '../../../../../../store/comment/commentSlice'

const Comments = ({
  post,
  handleSetTotalComment,
  totalComment,
  totalCommentParent,
}) => {
  const { comments } = useSelector((state) => state.comments)
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const handleGetMoreComment = () => {
    dispatch(
      getCommentByParentComment({
        postId: post?._id,
        userId: user?._id,
        page: Math.floor(comments.length / 40) + 1,
      })
    )
  }

  return (
    <div className="flex flex-col justify-start items-start w-full min-h-[300px] p-4 gap-y-6">
      {comments?.map((comment) => (
        <Comment
          key={comment?._id}
          comment={comment}
          post={post}
          handleSetTotalComment={handleSetTotalComment}
        />
      ))}
      {comments?.length < totalCommentParent && (
        <button
          className="hover:underline pt-2 text-sm"
          onClick={handleGetMoreComment}
        >
          Xem thêm bình luận
        </button>
      )}
      <span>
        {comments?.length} / {totalComment}
      </span>
    </div>
  )
}

export default Comments
