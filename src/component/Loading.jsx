import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loading = () => {
  return (
    <div className="fixed z-[99999] flex items-center justify-center top-0 left-0 w-screen h-screen bg-white/10 dark:bg-dark-icon-story-hover/20">
      <FaSpinner
        className="animate-spin text-black/25"
        size={32}
      />
    </div>
  )
}

export default Loading
