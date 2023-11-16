import React from 'react'

const ReceiverCallVideo = ({
  handleAcceptVideoCall,
  handleRefuseVideoCall,
}) => {
  return (
    <div className="fixed m-auto flex z-10 items-center justify-center w-screen h-screen">
      <center className="bg-gray-50 dark:bg-dark-nav shadow-md rounded-md py-4 px-12">
        <header className="text-2xl font-semibold pb-4">Cuộc gọi tới</header>
        <center className="space-x-4">
          <button
            className="bg-blue-400 hover:bg-blue-500 py-2 px-8 rounded-md text-white"
            onClick={handleAcceptVideoCall}
          >
            Nghe
          </button>
          <button
            className="bg-red-300 hover:bg-red-500 py-2 px-8 rounded-md text-white"
            onClick={handleRefuseVideoCall}
          >
            Từ chối
          </button>
        </center>
      </center>
    </div>
  )
}

export default ReceiverCallVideo
