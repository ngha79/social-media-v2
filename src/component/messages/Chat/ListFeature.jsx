import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { AiOutlinePushpin, AiOutlineSearch } from 'react-icons/ai'
import ListMemberChat from './ListMemberChat'

export default function ListFeature() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                <span>Thông tin về đoạn chat</span>
                <ChevronUpIcon
                  className={`${!open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <button className="w-full font-semibold text-start flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover text-sm py-2 px-4 rounded-md">
                  <AiOutlinePushpin size={20} />
                  Xem tin nhắn đã ghim
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure
          as="div"
          className="mt-2"
        >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                <span>Tùy chỉnh đoạn chat</span>
                <ChevronUpIcon
                  className={`${!open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <button className="w-full font-semibold text-start flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover text-sm py-2 px-4 rounded-md">
                  <AiOutlineSearch size={20} />
                  Tìm kiếm trong đoạn chat
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>{' '}
        <Disclosure
          as="div"
          className="mt-2"
        >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                <span>Thành viên trông đoạn chat</span>
                <ChevronUpIcon
                  className={`${!open ? 'rotate-180 transform' : ''} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={'overflow-y-scroll'}>
                <ListMemberChat />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
