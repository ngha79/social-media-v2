import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showImage } from '../../../../../../store/post/postSlice'
import PopupUser from '../../../../../user/PopupUser'
import Gallery from 'react-photo-gallery'
import { Link } from 'react-router-dom'

const ContentPostShare = ({ postShare, images }) => {
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
    <section className="w-full p-2">
      <div className="border rounded-md border-gray-200 dark:border-dark-icon-story-hover flex flex-col w-full p-2 gap-y-4">
        {postShare?.images?.length ? (
          <div className="h-auto bg-gray-50 w-full dark:bg-dark-nav">
            <Gallery
              photos={photos}
              onClick={openLightbox}
            />
          </div>
        ) : null}
        <div className="flex items-start justify-start w-full flex-col gap-y-4">
          <div className="flex items-start justify-between w-full">
            <PopupUser userProfile={postShare?.author} />
            <Link to={`/post/${postShare?._id}`}>
              <button className="text-sm py-1 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
                Tới bài viết
              </button>
            </Link>
          </div>
          <span className="break-words w-full">{postShare?.text}</span>
        </div>
      </div>
    </section>
  )
}

export default ContentPostShare
