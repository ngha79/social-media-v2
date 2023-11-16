import React, { Fragment, useState } from 'react'
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { BsPostcardHeartFill } from 'react-icons/bs'
import { FaBorderAll, FaUserFriends } from 'react-icons/fa'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SearchResult = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams({ search: '' })
  let [searchs] = useState({
    total: {
      icon: <FaBorderAll size={24} />,
      name: 'Tất cả',
      router: '/search/top',
    },
    post: {
      icon: <BsPostcardHeartFill size={24} />,
      name: 'Bài viết',
      router: '/search/post',
    },
    user: {
      icon: <FaUserFriends size={24} />,
      name: 'Mọi người',
      router: '/search/user',
    },
  })
  const handleNavigate = (router) => {
    let search = searchParams.get('search')
    navigate(`${router}?search=${search}`)
  }

  return (
    <div className="h-full">
      <div className="pt-[58px] flex h-full overflow-auto md:flex-row flex-col">
        <Tab.Group>
          <Tab.List className="md:max-w-[360px] md:sticky top-0 left-0 w-full shadow bg-gray-50 dark:bg-dark-nav">
            <div className="p-2">
              <h1 className="p-2 border-b-2 border-gray-300 font-bold text-2xl">
                Kết quả tìm kiếm
              </h1>
            </div>

            <div className="flex flex-col gap-y-1 p-2">
              {Object.values(searchs).map((search, i) => (
                <Tab
                  key={i}
                  onClick={() => handleNavigate(search.router)}
                  className={({ selected }) =>
                    classNames(
                      'flex items-center w-full justify-start gap-2 p-1 rounded-lg cursor-pointer outline-none group',
                      selected
                        ? 'bg-gray-200 dark:bg-dark-icon-story-hover shadow'
                        : 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                    )
                  }
                >
                  <div className={'p-2 rounded-full bg-blue-500 text-white'}>
                    {search.icon}
                  </div>
                  <span className="font-semibold">{search.name}</span>
                </Tab>
              ))}
            </div>
          </Tab.List>
          <Tab.Panels className={'w-full'}>
            <Outlet />
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default SearchResult
