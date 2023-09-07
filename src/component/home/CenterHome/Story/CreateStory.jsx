import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const CreateStory = () => {
  return (
    <div className="w-[150px] shrink-0 relative hover:opacity-90 overflow-hidden cursor-pointer rounded-xl transition duration-200 ease-in-out">
      <img
        src="https://picsum.photos/id/23/200/300"
        className="rounded-xl hover:scale-110 duration-200"
      />
      <div className="absolute flex flex-col items-center justify-end w-full bottom-0 left-0 py-4 bg-white dark:bg-dark-nav dark:text-dark-item-hover text-black">
        <div className="absolute rounded-full bg-white dark:bg-dark-nav dark:text-dark-item-hover p-1 -top-6">
          <div className="bg-blue-500 text-white rounded-full p-2">
            <AiOutlinePlus
              size={20}
              className="dark:text-white"
            />
          </div>
        </div>
        <div className="text-center">Tạo tin</div>
      </div>
    </div>
  )
}

export default CreateStory
