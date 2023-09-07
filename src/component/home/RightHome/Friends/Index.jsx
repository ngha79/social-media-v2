import React from 'react'
import Friend from './Friend'

const Friends = () => {
  return (
    <div className="flex flex-col items-start">
      <h3 className="font-semibold text-[17px] text-[#65676b] p-2 dark:text-dark-item-hover">
        Người liên hệ
      </h3>
      {Array.from(Array(10)).map((item, i) => (
        <Friend
          friend={item}
          key={i}
        />
      ))}
    </div>
  )
}

export default Friends
