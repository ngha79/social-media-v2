import CenterHome from '../component/home/CenterHome/Index'
import LeftHome from '../component/home/LeftHome/Index'
import { ListPopupChat } from '../component/home/ListChat/ListPopupChat'
import RightHome from '../component/home/RightHome/Index'

const Home = () => {
  return (
    <div className="h-full relative flex items-start justify-between">
      <LeftHome />
      <CenterHome />
      <RightHome />
      {/* <ListPopupChat /> */}
    </div>
  )
}

export default Home
