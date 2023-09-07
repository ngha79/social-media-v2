import React, { useRef, useState } from 'react'
import CreateStory from './CreateStory'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
const Stories = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [endPage, setEndPage] = useState(false)

  const ref = useRef(null)

  const scroll = (scrollOffset) => {
    let total = 668
    ref.current.scrollLeft += scrollOffset
    total += ref.current.scrollLeft + scrollOffset
    total > 1430 ? setEndPage(true) : setEndPage(false)
    ref.current.scrollLeft({ behavior: 'smooth' })
  }

  const handleSetCurrentPage = (type) => {
    if (type === 'inc') {
      setCurrentPage((currentPage) => currentPage + 1)
      scroll(510)
    } else {
      setCurrentPage((currentPage) => currentPage - 1)
      scroll(-510)
    }
  }

  return (
    <>
      {currentPage > 1 && (
        <button
          onClick={() => handleSetCurrentPage('dec')}
          className="absolute left-0 z-[1] bg-white p-4 rounded-full -translate-y-[50%] dark:bg-dark-icon-story hover:dark:bg-dark-icon-story-hover top-[50%] mx-auto"
        >
          <AiOutlineLeft />
        </button>
      )}
      <div
        className="w-full flex gap-2 text-sm font-semibold scroll relative overflow-x-scroll hidden-scrollbar"
        ref={ref}
      >
        <CreateStory />
        <div className="w-[150px] shrink-0 relative hover:opacity-90 overflow-hidden cursor-pointer transition duration-200 ease-in-out">
          <img
            src="https://picsum.photos/id/23/200/300"
            className="rounded-xl hover:scale-110 duration-200"
          />
          <div className="absolute flex flex-col justify-between h-full w-full top-0 left-0 py-4">
            <img
              src="https://picsum.photos/id/237/50/50"
              className="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
            />
            <div className="text-center text-white">John Doe</div>
          </div>
        </div>
        <div className="w-[150px] shrink-0 relative hover:opacity-90 overflow-hidden cursor-pointer transition duration-200 ease-in-out">
          <img
            src="https://picsum.photos/id/23/200/300"
            className="rounded-xl hover:scale-110 duration-200"
          />
          <div className="absolute flex flex-col justify-between h-full w-full top-0 left-0 py-4">
            <img
              src="https://picsum.photos/id/237/50/50"
              className="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
            />
            <div className="text-center text-white">John Doe</div>
          </div>
        </div>
        <div className="w-[150px] shrink-0 relative hover:opacity-90 overflow-hidden cursor-pointer transition duration-200 ease-in-out">
          <img
            src="https://picsum.photos/id/23/200/300"
            className="rounded-xl hover:scale-110 duration-200"
          />
          <div className="absolute flex flex-col justify-between h-full w-full top-0 left-0 py-4">
            <img
              src="https://picsum.photos/id/237/50/50"
              className="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
            />
            <div className="text-center text-white">John Doe3</div>
          </div>
        </div>
        <div className="w-[150px] shrink-0 relative hover:opacity-90 overflow-hidden cursor-pointer transition duration-200 ease-in-out">
          <img
            src="https://picsum.photos/id/23/200/300"
            className="rounded-xl hover:scale-110 duration-200"
          />
          <div className="absolute flex flex-col justify-between h-full w-full top-0 left-0 py-4">
            <img
              src="https://picsum.photos/id/237/50/50"
              className="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
            />
            <div className="text-center text-white">John Doe</div>
          </div>
        </div>
        <div className="w-[150px] shrink-0 relative hover:opacity-90 overflow-hidden cursor-pointer transition duration-200 ease-in-out">
          <img
            src="https://picsum.photos/id/23/200/300"
            className="rounded-xl hover:scale-110 duration-200"
          />
          <div className="absolute flex flex-col justify-between h-full w-full top-0 left-0 py-4">
            <img
              src="https://picsum.photos/id/237/50/50"
              className="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
            />
            <div className="text-center text-white">John Doe</div>
          </div>
        </div>
        <div className="w-[150px] shrink-0 relative hover:opacity-90 overflow-hidden cursor-pointer transition duration-200 ease-in-out">
          <img
            src="https://picsum.photos/id/29/200/300"
            className="rounded-xl hover:scale-110 duration-200"
          />
          <div className="absolute flex flex-col justify-between h-full w-full top-0 left-0 py-4">
            <img
              src="https://picsum.photos/id/237/50/50"
              className="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
            />
            <div className="text-center text-white">John Doe</div>
          </div>
        </div>
        <div className="w-[150px] shrink-0 relative hover:opacity-90 overflow-hidden cursor-pointer transition duration-200 ease-in-out">
          <img
            src="https://picsum.photos/id/230/200/300"
            className="rounded-xl hover:scale-110 duration-200"
          />
          <div className="absolute flex flex-col justify-between h-full w-full top-0 left-0 py-4">
            <img
              src="https://picsum.photos/id/237/50/50"
              className="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
            />
            <div className="text-center text-white">John Doe</div>
          </div>
        </div>
        <div className="w-[150px] shrink-0 relative hover:opacity-90 overflow-hidden cursor-pointer transition duration-200 ease-in-out">
          <img
            src="https://picsum.photos//id/63/200/300"
            className="rounded-xl hover:scale-110 duration-200"
          />
          <div className="absolute flex flex-col justify-between h-full w-full top-0 left-0 py-4">
            <img
              src="https://picsum.photos/id/237/50/50"
              className="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
            />
            <div className="text-center text-white">John Doe</div>
          </div>
        </div>
      </div>
      {!endPage && (
        <button
          onClick={() => handleSetCurrentPage('inc')}
          className="absolute right-0 z-[1] bg-white p-4 rounded-full -translate-y-[50%] dark:bg-dark-icon-story hover:dark:bg-dark-icon-story-hover top-[50%] mx-auto"
        >
          <AiOutlineRight />
        </button>
      )}
    </>
  )
}

export default Stories
