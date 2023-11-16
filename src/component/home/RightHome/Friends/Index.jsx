import Friend from './Friend'
import { useSelector } from 'react-redux'

const Friends = () => {
  const { conversationFriend } = useSelector((state) => state.conversation)

  return (
    <div className="flex flex-col items-start">
      <h3 className="font-semibold text-[17px] text-[#65676b] p-2 dark:text-dark-item-hover">
        Người liên hệ
      </h3>
      {conversationFriend?.map((item, i) => (
        <Friend
          conversation={item}
          key={i}
        />
      ))}
    </div>
  )
}

export default Friends
