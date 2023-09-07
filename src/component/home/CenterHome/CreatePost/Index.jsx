import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsEmojiSmile, BsImages } from 'react-icons/bs'
import FormCreatePost from './FormCreatePost'

const CreatePost = () => {
  let [isOpen, setIsOpen] = useState(false)
  let [image, setImage] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function openImage() {
    setImage(true)
  }

  function closeImage() {
    setImage(false)
  }

  function openModalImage() {
    setIsOpen(true)
    setImage(true)
  }

  return (
    <div className="flex flex-col gap-y-2 bg-white dark:bg-dark-nav w-full px-4 pt-4 pb-2 shadow-lg rounded-md">
      <div className="flex items-center justify-start gap-4">
        <Link to="/123">
          <img
            src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
            alt=""
            className="min-w-[40px] w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
          />
        </Link>
        <input
          type="text"
          onClick={openModal}
          className="p-2 bg-light-search w-full dark:bg-dark-search rounded-2xl outline-none cursor-pointer"
          placeholder="Bạn đang nghĩ gì thế?"
        />
      </div>
      <div className="flex items-center justify-between gap-4 border-t pt-2 dark:border-[#4a4b4b]">
        <div
          onClick={openModalImage}
          className="flex items-center gap-2 py-2 justify-center rounded-lg text-[#65676b] dark:text-[#b0b3b8] cursor-pointer w-full dark:hover:bg-dark-icon-story-hover hover:bg-dark-item-hover"
        >
          <BsImages
            className="text-green-500"
            size={24}
          />
          <span className="font-semibold line-clamp-1 truncate text-sm md:text-base">
            Ảnh/video
          </span>
        </div>
        <div
          onClick={openModal}
          className="flex items-center gap-2 py-2 justify-center rounded-lg text-[#65676b] dark:text-[#b0b3b8] cursor-pointer w-full dark:hover:bg-dark-icon-story-hover hover:bg-dark-item-hover"
        >
          <BsEmojiSmile
            className="text-orange-500"
            size={24}
          />
          <span className="font-semibold line-clamp-1 truncate text-sm md:text-base">
            Cảm xúc/hoạt động
          </span>
        </div>
      </div>
      <FormCreatePost
        isOpen={isOpen}
        closeModal={closeModal}
        image={image}
        openImage={openImage}
        closeImage={closeImage}
      />
    </div>
  )
}

export default CreatePost
