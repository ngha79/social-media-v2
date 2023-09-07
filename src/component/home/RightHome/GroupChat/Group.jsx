import React from 'react'

const Group = () => {
  return (
    <div className="flex items-center w-full cursor-pointer dark:hover:bg-item-hover hover:bg-dark-item-hover rounded-md justify-start gap-2 p-2">
      <div className="relative w-max">
        <img
          src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
          alt=""
          className="min-w-[40px] w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
        />
        <div className="absolute bg-white flex items-center justify-center w-[12px] h-[12px] z-[1] rounded-full bottom-0 right-0">
          <div className="bg-green-600 w-[8px] h-[8px] rounded-full"></div>
        </div>
      </div>
      <span className="font-semibold max-w-[200px] truncate">
        Hang u vcllllllll
      </span>
    </div>
  )
}

export default Group
