import { Tab } from '@headlessui/react'
import React from 'react'
import ListMessageChat from '../../header/RightBar/Message/ListMessageChat/Index'
import ListFriendsChat from './ListFriendsChat'
import ListGroupsChat from './ListGroupsChat'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TypeChatList = ({ handleSetOpenChat }) => {
  return (
    <Tab.Group>
      <Tab.List className={'flex space-x-2 p-4'}>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-max font-semibold py-2 px-4 rounded-2xl',

              selected
                ? ' bg-[#e6ecf4] hover:bg-[#dbe7f6] dark:bg-[#3c4d63] hover:dark:bg-[#465365] text-blue-500 outline-blue-500'
                : 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
            )
          }
        >
          Hộp thư
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-max font-semibold py-2 px-4 rounded-2xl',

              selected
                ? 'dark:bg-[#3c4d63] hover:dark:bg-[#465365] bg-[#e6ecf4] hover:bg-[#dbe7f6] text-blue-500 outline-blue-500'
                : 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
            )
          }
        >
          Cộng đồng
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-max font-semibold py-2 px-4 rounded-2xl',
              selected
                ? 'dark:bg-[#3c4d63] hover:dark:bg-[#465365] bg-[#e6ecf4] hover:bg-[#dbe7f6] text-blue-500 outline-blue-500'
                : 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
            )
          }
        >
          Bạn bè
        </Tab>
      </Tab.List>
      <Tab.Panels
        className={'border-t border-gray-200 dark:border-dark-icon-story-hover'}
      >
        <Tab.Panel>
          <ListMessageChat handleSetOpenChat={handleSetOpenChat} />
        </Tab.Panel>

        <Tab.Panel>
          <ListGroupsChat handleSetOpenChat={handleSetOpenChat} />
        </Tab.Panel>

        <Tab.Panel>
          <ListFriendsChat handleSetOpenChat={handleSetOpenChat} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default TypeChatList
