import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { BsImage } from 'react-icons/bs'

const CreateComment = () => {
  const [content, setContent] = useState('')

  return (
    <div className="sticky bottom-0 left-0 w-full bg-white border-t border-gray-200 dark:bg-dark-nav dark:text-dark-item-hover dark:border-dark-icon-story p-4 z-[1]">
      <label htmlFor="input-comment">
        <div className="flex items-center justify-start gap-4">
          <img
            src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
            alt=""
            className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
          />
          <div className="w-full flex flex-col gap-y-0 bg-light-search rounded-lg outline-none dark:bg-dark-search">
            <input
              type="text"
              className="w-full p-2 bg-light-search rounded-lg outline-none dark:bg-dark-search"
              placeholder="Viết bình luận..."
              id="input-comment"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex justify-between items-center px-4 pb-2">
              <label htmlFor="upload-image">
                <BsImage className="cursor-pointer" />
              </label>
              <input
                type="file"
                name="upload-image"
                id="upload-image"
                className="hidden"
              />
              <AiOutlineSend
                size={18}
                className={`${
                  content.length
                    ? 'text-blue-500 cursor-pointer'
                    : 'text-gray-500 cursor-not-allowed'
                }`}
              />
            </div>
          </div>
        </div>
      </label>
    </div>
  )
}

export default CreateComment
