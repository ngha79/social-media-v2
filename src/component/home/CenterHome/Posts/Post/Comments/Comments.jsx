import React from 'react'
import Comment from './Comment/Comment'

const Comments = () => {
  return (
    <div className="flex flex-col justify-start w-full p-4 gap-y-6">
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default Comments
