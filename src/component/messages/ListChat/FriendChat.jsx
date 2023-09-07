import React from 'react'

const FriendChat = ({ handleSetOpenChat }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-md w-full px-2 py-2"
        onClick={handleSetOpenChat}
      >
        <div className="relative">
          <img
            src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/353056562_915817816192346_4112625160337329471_n.jpg?stp=c0.48.160.160a_dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=fe8171&_nc_ohc=qwzobo5I_hgAX-bhEmI&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBdIyG-Hpw4xWh6CoLr1ExYpEGbLQwRRrNtSY7GFsKXDw&oe=64FB6E35"
            alt=""
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="absolute bottom-0 right-0 p-[1px] rounded-full bg-white">
            <div className="p-1 rounded-full bg-green-500"></div>
          </div>
        </div>
        <span className="text-[15px] font-semibold">ha ngsdfisdf</span>
      </button>
    </div>
  )
}

export default FriendChat
