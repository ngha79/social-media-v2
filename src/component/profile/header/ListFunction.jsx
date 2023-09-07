import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import PostProfile from './PostProfile'
import Introduce from './Introduce'
import FriendsProfile from './FriendsProfile'
import ImagesProfie from './ImagesProfie'
import { Link, Outlet } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ListFunction = () => {
  const [list] = useState({
    'Bài viết': <PostProfile />,
    'Giới thiệu': <Introduce />,
    'Bạn bè': <FriendsProfile />,
    Ảnh: <ImagesProfie />,
  })

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Tab.Group>
        <Tab.List
          className={
            'flex items-center p-4 gap-2 max-w-[1200px] w-full border-t border-gray-200 dark:border-dark-icon-story-hover'
          }
        >
          {Object.keys(list).map((item, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  'w-max p-4 relative border-b-2 py-2.5 text-sm font-medium leading-5 text-blue-500',
                  'ring-white ring-opacity-60 relative ring-offset-2 ring-offset-blue-400 outline-none',
                  selected
                    ? 'bg-white dark:bg-dark-nav  border-blue-500 rounded-b-none'
                    : 'text-dark-icon-story dark:text-light-search hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:hover:border-dark-icon-story-hover rounded-lg border-transparent'
                )
              }
            >
              {item}
              <div
                className={({ selected }) =>
                  classNames(
                    selected
                      ? 'absolute bottom-0 left-0 border-2 w-full border-blue-500'
                      : 'text-dark-icon-story hover:bg-gray-100'
                  )
                }
              ></div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels
          className={
            'bg-gray-100 w-full h-full flex justify-center dark:bg-dark-theme'
          }
        >
          <div className="max-w-[1200px] w-full p-4">
            {Object.values(list).map((item, index) => (
              <Tab.Panel key={index}>{item}</Tab.Panel>
            ))}
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default ListFunction
