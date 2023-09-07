import React from 'react'

const UpdateAvatar = () => {
  return (
    <div className="p-4 flex flex-col items-center text-gray-900 dark:text-light-search gap-y-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-xl">Ảnh đại diện</h1>
        <button className="text-base px-2 py-1 hover:bg-gray-200 text-blue-500 dark:hover:bg-dark-icon-story-hover rounded-md">
          Chỉnh sửa
        </button>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qwzobo5I_hgAX-bhEmI&_nc_ht=scontent.fhan5-11.fna&oh=00_AfD0_zDznzsY5icy2LAlSOwD6DisbJ_1_tHLDju_RbsqEw&oe=64FC8A73"
          alt=""
          className="w-[150px] h-[150px] rounded-full"
        />
      </div>
    </div>
  )
}

export default UpdateAvatar
