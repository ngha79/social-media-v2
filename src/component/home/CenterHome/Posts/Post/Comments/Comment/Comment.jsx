import React from 'react'
import { Link } from 'react-router-dom'

const Comment = () => {
  return (
    <div className="flex items-start justify-start gap-2">
      <Link to={'/profile/1214'}>
        <img
          src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
          alt=""
          className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
        />
      </Link>
      <div className="bg-light-search relative  max-w-[70%] dark:bg-dark-search rounded-md p-2 text-sm text-gray-700 dark:text-dark-item-hover">
        <Link to={'/profile/1214'}>
          <h3 className="font-semibold cursor-pointer">Anime - My Heart</h3>
        </Link>
        <div className="flex flex-col text-[15px]">
          <span>Cute 😆 ❤</span>
          <span>
            Khổ thân hoàng thượngKhổ thân hoàng thượngKhổ thân hoàng thượng Khổ
            thân hoàng thượng Khổ thân hoàng thượng Khổ thân hoàng thượng Khổ
            thân hoàng thượng Khổ thân hoàng thượng Khổ thân hoàng thượng Khổ
            thân hoàng thượng Khổ thân hoàng thượng Khổ thân hoàng thượng Khổ
            thân hoàng thượng Khổ thân hoàng thượng Khổ thân hoàng thượng
          </span>
        </div>
        <div className="absolute -bottom-[20px] px-2 left-0 text-sm flex items-center gap-4">
          <span className="hover:underline cursor-pointer">Thích</span>
          <span className="hover:underline cursor-pointer">Phản hồi</span>
          <span className="hover:underline cursor-pointer">1 giờ</span>
        </div>
      </div>
    </div>
  )
}

export default Comment
