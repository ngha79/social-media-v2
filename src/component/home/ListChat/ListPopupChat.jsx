import React from 'react'
import PopupChat from './PopupChat'
import MenuListPopup from './MenuListPopup'
import BoxChat from './BoxChat/BoxChat'
import { useSelector } from 'react-redux'

export const ListPopupChat = () => {
  const { popupListChat, iconListPopup } = useSelector(
    (state) => state.conversation
  )
  return (
    <div className="fixed bottom-0 hidden min-[768px]:flex z-[1] right-0 bg-transparent flex-row-reverse gap-4">
      <div className="items-center m-4 flex flex-col-reverse gap-y-4">
        {iconListPopup?.map((popup) => (
          <PopupChat
            chat={popup}
            key={popup?._id}
          />
        ))}
        {iconListPopup?.length > 0 || popupListChat?.length > 0 ? (
          <MenuListPopup />
        ) : null}
      </div>
      <div className="absolute bottom-0 right-20 flex flex-row-reverse gap-4">
        {popupListChat?.map((popup) => (
          <BoxChat
            chat={popup}
            key={popup?._id}
          />
        ))}
      </div>
    </div>
  )
}
