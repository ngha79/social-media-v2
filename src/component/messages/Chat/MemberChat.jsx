import React from 'react'
import SettingMemberChat from './SettingMemberChat'

const MemberChat = () => {
  return (
    <div className="flex items-center justify-between relative">
      <div className="flex items-center gap-2 w-full">
        <img
          src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/353056562_915817816192346_4112625160337329471_n.jpg?stp=c0.48.160.160a_dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=fe8171&_nc_ohc=qwzobo5I_hgAX-bhEmI&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBdIyG-Hpw4xWh6CoLr1ExYpEGbLQwRRrNtSY7GFsKXDw&oe=64FB6E35"
          alt=""
          className="w-[40px] h-[40px] rounded-full"
        />
        <span className="font-semibold">ha nngu vcllvk</span>
      </div>
      <SettingMemberChat />
    </div>
  )
}

export default MemberChat
