import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { resetImageShow } from '../../store/post/postSlice'

const ImageShow = ({ images, index }) => {
  const [imageShow, setImageShow] = useState()
  const [indexImage, setIndexImage] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    setImageShow(images?.[index])
    setIndexImage(index)
  }, [images, index])

  const handleSetImageLeft = (e) => {
    e.stopPropagation()
    setImageShow(
      indexImage === 0 ? images[images.length - 1] : images[indexImage - 1]
    )
    setIndexImage(indexImage === 0 ? images.length - 1 : index - 1)
  }

  const handleSetImageRight = (e) => {
    e.stopPropagation()
    setImageShow(
      indexImage === images.length - 1 ? images[0] : images[indexImage + 1]
    )
    setIndexImage(indexImage === images.length - 1 ? 0 : indexImage + 1)
  }

  const handleStopPropagation = (e) => {
    e.stopPropagation()
  }

  const onClose = () => {
    dispatch(resetImageShow())
  }

  return (
    <div
      className="fixed top-0 flex items-center justify-between z-[100] left-0 w-screen h-screen bg-gray-100/80 dark:bg-black"
      onClick={onClose}
    >
      <div
        className="h-full flex items-center justify-center cursor-pointer w-[10%] max-w-[80px] bg-zinc-200 dark:bg-dark-icon-story hover:bg-zinc-300 dark:hover:bg-dark-icon-story-hover"
        onClick={handleSetImageLeft}
      >
        <div className="p-2 rounded-full">
          <AiOutlineLeft />
        </div>
      </div>
      <div className="max-w-[70%] w-full max-h-[70vh] flex items-center justify-center">
        <img
          onClick={handleStopPropagation}
          src={imageShow}
          alt="Image carousel"
          className="w-auto h-full"
        />
      </div>
      <div
        className="h-full flex items-center justify-center w-[10%] cursor-pointer max-w-[80px] relative bg-zinc-200 dark:bg-dark-icon-story hover:bg-zinc-300 dark:hover:bg-dark-icon-story-hover"
        onClick={handleSetImageRight}
      >
        <button
          className="absolute top-4 right-4 p-4 rounded-full bg-gray-200 dark:bg-dark-icon-story hover:bg-gray-300 dark:hover:bg-dark-icon-story-hover"
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
        <div className="p-2 rounded-full ">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  )
}

export default ImageShow
