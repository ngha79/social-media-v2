import React from 'react'
import { useSelector } from 'react-redux'

const BackgroundImageUser = ({ background }) => {
  return (
    <div className="bg-white dark:bg-dark-nav overflow-hidden w-full flex items-start justify-center">
      <div className="max-w-[1200px] max-h-[400px] bg-gray-100 dark:bg-dark-icon-hover min-h-[300px] h-auto rounded-b-xl overflow-hidden transition-transform duration-200 w-full flex items-center justify-center">
        {background ? (
          <div
            style={{ backgroundImage: `url(${background})` }}
            alt=""
            className="bg-cover bg-no-repeat w-full h-full bg-center"
          >
            <div className="h-full w-full max-h-[400px] md:min-h-[400px] min-h-[300px]"></div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default BackgroundImageUser
