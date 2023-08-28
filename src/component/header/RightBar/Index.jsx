import React from 'react'
import Account from './Account/Index'
import Message from './Message/Index'
import Notifications from './Notifications/Index'

const Index = () => {
  return (
    <div className="flex items-center gap-2 justify-end w-[20%] h-full py-2 pr-4">
      <Message />

      <Notifications />

      <Account />
    </div>
  )
}

export default Index