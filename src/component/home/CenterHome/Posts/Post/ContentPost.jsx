import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import PopupUser from '../../../../user/PopupUser'

const ContentPost = ({ type }) => {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-start text-black dark:text-dark-item-hover">
      <div className="flex items-center justify-between gap-2 relative  px-4 pt-4 w-full">
        {/* <div className="flex items-start justify-start gap-2">
          <Link to={'/123'}>
            <img
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
              alt=""
              className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
            />
          </Link>
          <span className="font-semibold max-w-[150px] truncate line-clamp-1 text-ellipsis overflow-hidden hover:underline cursor-pointer">
            Hang u vcl
          </span>
        </div> */}
        <PopupUser />
        {/* <div className="absolute top-[30px] left-0 bg-white rounded-lg shadow-lg min-w-[200px]">
          123123
        </div> */}
        <div className="flex gap-2 items-center mr-2">
          <div className="p-2 rounded-full cursor-pointer dark:hover:bg-dark-icon-story-hover hover:bg-gray-200">
            <BsThreeDots size={20} />
          </div>
          {type && (
            <div className="p-2 rounded-full cursor-pointer dark:hover:bg-dark-icon-story-hover hover:bg-gray-200">
              <AiOutlineClose size={20} />
            </div>
          )}
        </div>
      </div>
      <span className="w-full break-words  px-4 py-2">
        Trước đó, McTominay nằm trong danh sách chiêu mộ của West Ham, cùng với
        Maguire. Nhưng cả hai cầu thủ này không gia nhập đại diện thành London.
        Được biết, mức giá ban đầu được Man Utd đưa ra ở thương vụ McTominay là
        rất lớn. Cụ thể, The Telegraph cho biết Man Utd từng kỳ vọng thu về
        khoảng £40-45m từ việc bán đi McTominay. Con số này bị cho là quá cao so
        với một tiền vệ với trình độ của McTominay. Lẽ đó, không có đội bóng nào
        chấp nhận mức giá mà Man Utd đưa ra.
      </span>
      <div className="max-h-[600px] relative overflow-hidden flex items-center justify-center w-full">
        <div
          className="blur absolute top-0 left-0 w-full h-full z-0 bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3)',
          }}
        ></div>
        <img
          src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
          alt=""
          className="z-[1] w-max max-h-[600px] object-cover shadow-sm"
        />
      </div>
    </div>
  )
}

export default ContentPost
