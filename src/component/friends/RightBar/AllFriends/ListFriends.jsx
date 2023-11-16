import { useSelector } from 'react-redux'
import Friend from './Friend'

const ListFriends = ({ handleSetView }) => {
  const { friends } = useSelector((state) => state.friends)

  return (
    <div className="overflow-y-scroll h-full">
      {friends?.map((friend) => (
        <Friend
          handleSetView={handleSetView}
          key={friend._id}
          friend={friend}
        />
      ))}
    </div>
  )
}

export default ListFriends
