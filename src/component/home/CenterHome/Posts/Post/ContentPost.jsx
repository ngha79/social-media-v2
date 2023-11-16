import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import PopupUser from '../../../../user/PopupUser'
import { useDispatch, useSelector } from 'react-redux'
import DeletePost from './DeletePost/DeletePost'
import Gallery from 'react-photo-gallery'
import ImageShow from '../../../../imageShow/ImageShow'
import { showImage } from '../../../../../store/post/postSlice'
import ContentPostShare from './ContentPostShare/ContentPostShare'
import moment from 'moment/min/moment-with-locales'

const ContentPost = ({ type, author, text, images, postId, actions, post }) => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    if (images)
      setPhotos(
        images.map((image) => {
          return {
            src: image,
            width: 3,
            height: 4,
          }
        })
      )
  }, [images])
  const openLightbox = useCallback((event, { photo, index }) => {
    dispatch(
      showImage({
        index,
        images,
      })
    )
  }, [])

  return (
    <>
      <div className="flex flex-col gap-y-2 justify-center items-start text-black dark:text-dark-item-hover">
        <div className="flex items-center  justify-between gap-2 relative  px-4 pt-4 w-full">
          <PopupUser userProfile={author} />

          <div className="flex gap-2 items-center mr-2">
            <DeletePost
              authorId={author?._id}
              postId={postId}
              actions={actions}
              post={post}
            />
            {author?._id === user?._id && !type && (
              <div className="p-2 rounded-full cursor-pointer dark:hover:bg-dark-icon-story-hover hover:bg-gray-200">
                <AiOutlineClose size={20} />
              </div>
            )}
          </div>
          <div
            className="absolute top-10 left-16 hover:underline cursor-pointer"
            title={post?.createdAt}
          >
            <p className="text-[13px]">{moment(post?.createdAt).fromNow()}</p>
          </div>
        </div>
        <span className="w-full break-words  px-4 py-2">{text}</span>
        <div className="h-auto bg-gray-50 w-full dark:bg-dark-nav">
          <Gallery
            photos={photos}
            onClick={openLightbox}
          />
        </div>
        {post?.type === 'share' ? (
          post?.postShare ? (
            <ContentPostShare
              postShare={post?.postShare}
              images={post?.postShare?.images}
            />
          ) : (
            <span className="px-4 text-sm">Bài viết không còn tồn tại.</span>
          )
        ) : null}
      </div>
    </>
  )
}

export default ContentPost
