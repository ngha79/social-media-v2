import React from 'react'
import PopupChat from './PopupChat'
import MenuListPopup from './MenuListPopup'
import BoxChat from './BoxChat/BoxChat'

export const ListPopupChat = () => {
  return (
    <div className="fixed bottom-0 z-[1] right-0 bg-transparent flex flex-row-reverse gap-4">
      <div className="items-center p-4  flex flex-col-reverse gap-y-4">
        <PopupChat />
        <PopupChat />
        <PopupChat />
        <MenuListPopup />
      </div>
      <div className="absolute bottom-0 right-20 flex flex-row-reverse gap-4">
        <BoxChat />
        <BoxChat />
      </div>
    </div>
  )
}
