import React from 'react'

const BackgroundImage = () => {
  return (
    <div className="p-4 flex flex-col items-center text-gray-900 dark:text-light-search gap-y-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-xl">Ảnh bìa</h1>
        <button className="text-base px-2 py-1 hover:bg-gray-200 text-blue-500 dark:hover:bg-dark-icon-story-hover rounded-md">
          Chỉnh sửa
        </button>
      </div>
      <div className="flex items-center justify-center w-full">
        <img
          src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/240527394_520194609088004_8050637018545073386_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=c7l47JoSOEwAX9SOBiD&_nc_ht=scontent.fhan5-2.fna&oh=00_AfDSfjWouXoxoDBSfXHtnjWMrRxDlBNNakYd7hIpcltf3Q&oe=64F7F7A7"
          alt=""
          className="w-[80%] h-[150px] rounded-md"
        />
      </div>
    </div>
  )
}

export default BackgroundImage
