import React from 'react'
import HeaderBoxChat from './HeaderBoxChat'
import ListMessagesChat from './ListMessagesChat'
import FormCreateMessage from './FormCreateMessage'

const BoxChat = () => {
  return (
    <div className="bg-white dark:bg-dark-nav shadow-lg rounded-md w-80 h-[450px] flex flex-col">
      <HeaderBoxChat />
      <ListMessagesChat />
      <FormCreateMessage />
    </div>
  )
}

export default BoxChat
