import { Link } from 'react-router-dom'
import moment from 'moment/min/moment-with-locales'

const Index = ({ noti }) => {
  return (
    <Link
      to={noti?.noti_url}
      title={noti?.createdAt}
    >
      <div className="flex items-start p-4 hover:bg-slate-100 dark:hover:bg-dark-icon-story-hover cursor-pointer rounded-md dark:text-dark-item-hover gap-2">
        <div className="w-max">
          <img
            src={noti?.noti_senderId?.avatar}
            alt=""
            className="w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
          />
        </div>
        <div className="w-[80%] flex flex-col line-clamp-3 text-ellipsis overflow-hidden">
          <p className="text-sm text-gray-700 dark:text-gray-200">
            <b>{noti?.noti_senderId?.name}</b> {noti?.noti_content}
          </p>
          <p className="text-[13px]">{moment(noti?.createdAt).fromNow()}</p>
        </div>
      </div>
    </Link>
  )
}

export default Index
