import Switcher from '../../utils/Switcher'
import Stories from './Story/Index'
import CreatePost from './CreatePost/Index'
import Posts from './Posts/Index'

const CenterHome = () => {
  return (
    <div className="md:max-w-[600px] lg:max-w-[700px] w-full py-4 px-2 md:px-4 pb-48 gap-y-4 relative min-h-screen flex flex-col items-center justify-start">
      <div className="relative w-full">
        <Stories />
      </div>
      <CreatePost />
      <Switcher />
      <Posts />
    </div>
  )
}

export default CenterHome
