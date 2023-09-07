import React from 'react'
import LeftBar from '../component/friends/LeftBar/Index'
import RightBar from '../component/friends/RightBar/Index'

const Friends = () => {
  return (
    <div className="flex items-start flex-col md:flex-row">
      <LeftBar />
      <RightBar />
    </div>
  )
}

export default Friends
