import Switcher from '../../../utils/Switcher'
import Stories from './Story/Index'
import CreatePost from './CreatePost/Index'
import Posts from './Posts/Index'
import { useSelector } from 'react-redux'

const CenterHome = () => {
  const { user } = useSelector((state) => state.auth)
  const { posts } = useSelector((state) => state.posts)

  return (
    <div className="md:flex-[3] w-full flex justify-center">
      <div className="md:max-w-[550px] xl:max-w-[700px] transition-all duration-200 ease-in w-full py-4 px-2 md:px-4 gap-y-4  flex flex-col items-center justify-start">
        <div className="relative w-full">
          <Stories />
        </div>
        <CreatePost />
        <Switcher />
        <Posts
          posts={posts}
          userId={user?._id}
        />
      </div>
    </div>
  )
}

export default CenterHome
