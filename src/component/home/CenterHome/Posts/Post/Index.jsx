import React from 'react'
import ContentPost from './ContentPost'
import ReactPost from './ReactPost'

const Post = ({ author, post, type }) => {
  return (
    <div className="bg-white dark:bg-dark-nav shadow-md rounded-md w-full">
      <ContentPost
        text={post?.text}
        images={post?.images}
        type={'post'}
        author={author}
        postId={post?._id}
        actions={type}
        post={post}
      />
      <ReactPost
        type={'dialog'}
        post={post}
      />
    </div>
  )
}

export default Post
