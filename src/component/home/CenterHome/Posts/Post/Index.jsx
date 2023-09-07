import React from 'react'
import ContentPost from './ContentPost'
import ReactPost from './ReactPost'

const Post = () => {
  return (
    <div className="bg-white dark:bg-dark-nav shadow-md rounded-md w-full">
      <ContentPost type={'post'} />
      <ReactPost type={'dialog'} />
    </div>
  )
}

export default Post
