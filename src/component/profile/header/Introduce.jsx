import React from 'react'

const Introduce = () => {
  return (
    <div className="bg-white rounded-md shadow w-full dark:bg-dark-nav">
      <h1 className="font-bold text-lg p-4 border-b border-gray-200 dark:border-dark-icon-story-hover">
        Giới thiệu
      </h1>
      <div className="flex flex-col gap-y-2 p-4">
        <div className="">Không có nơi làm việc để hiển thị</div>
        <div className="">Không có trường học nào để hiển thị</div>
        <div className="">Sống tại Ha-Nam, Hà Nam, Vietnam</div>
        <div className="">Không có thông tin mối quan hệ nào để hiển thị</div>
        <div className="">Ngày sinh 09/09/2000</div>
        <div className="">Giới tính: Nam</div>
      </div>
    </div>
  )
}

export default Introduce
