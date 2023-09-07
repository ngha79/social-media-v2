import React, { useState } from 'react'

const StoryUser = () => {
  const [updateStory, setUpdateStory] = useState(false)
  const [update, setUpdate] = useState('')
  return (
    <div className="p-4 flex flex-col items-center text-gray-900 dark:text-light-search gap-y-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-xl">Tiểu sử</h1>
        <button
          className="text-base px-2 py-1 hover:bg-gray-200 text-blue-500 dark:hover:bg-dark-icon-story-hover rounded-md"
          onClick={() => setUpdateStory(!updateStory)}
        >
          {!updateStory ? 'Thêm' : 'Hủy'}
        </button>
      </div>
      <div className="flex items-center justify-center w-full">
        {!updateStory ? (
          <span className="text-lg">Mô tả bản thân...</span>
        ) : (
          <div className="flex flex-col justify-center space-y-2">
            <textarea
              type="text"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              className="w-[200px] h-[60px] border text-center resize-none outline-blue-500 font-semibold border-gray-300 dark:border-dark-icon-story-hover dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story hover:bg-gray-200 rounded-md"
              placeholder="Mô tả về bạn"
            />
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => setUpdateStory(!updateStory)}
                className="px-2 py-1 font-semibold rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
              >
                Hủy
              </button>
              <button
                className={`px-2 py-1 font-semibold rounded-md  ${
                  update.length > 0
                    ? 'cursor-pointer bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover'
                    : 'cursor-not-allowed bg-gray-200 dark:bg-dark-icon-story text-gray-500 dark:text-gray-300'
                }`}
              >
                Lưu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StoryUser
