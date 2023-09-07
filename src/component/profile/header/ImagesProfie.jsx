import React from 'react'

const ImagesProfie = () => {
  return (
    <div className="flex flex-col bg-white p-4 dark:bg-dark-nav shadow rounded-md">
      <div className="flex items-center justify-between flex-col md:flex-row gap-y-4">
        <h1 className="font-bold text-lg">Ảnh</h1>
        <div className="flex items-center gap-2 md:justify-end justify-center">
          <label
            htmlFor="upload-image"
            className="text-blue-500 font-semibold hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover p-2 rounded-md"
          >
            Thêm ảnh/video
          </label>
          <input
            type="file"
            multiple
            name="upload-image"
            id="upload-image"
            className="hidden"
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-x-2 gap-y-2 mt-8 min-h-[350px]">
        <img
          src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/240527394_520194609088004_8050637018545073386_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=c7l47JoSOEwAX9SOBiD&_nc_ht=scontent.fhan5-2.fna&oh=00_AfDSfjWouXoxoDBSfXHtnjWMrRxDlBNNakYd7hIpcltf3Q&oe=64F7F7A7"
          alt=""
          className="w-full cursor-pointer rounded-md"
        />
        <img
          src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/240527394_520194609088004_8050637018545073386_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=c7l47JoSOEwAX9SOBiD&_nc_ht=scontent.fhan5-2.fna&oh=00_AfDSfjWouXoxoDBSfXHtnjWMrRxDlBNNakYd7hIpcltf3Q&oe=64F7F7A7"
          alt=""
          className="w-full cursor-pointer rounded-md"
        />
      </div>
    </div>
  )
}

export default ImagesProfie
