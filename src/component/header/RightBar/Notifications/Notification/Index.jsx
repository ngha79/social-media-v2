const Index = () => {
  return (
    <div className="flex items-start p-4 hover:bg-slate-100 dark:hover:bg-dark-icon-hover cursor-pointer rounded-md dark:text-white gap-2">
      <div className="w-max">
        <img
          src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
          alt=""
          className="w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
        />
      </div>
      <div className="w-[80%] line-clamp-3 text-ellipsis overflow-hidden">
        <p className="text-sm text-gray-700 dark:text-gray-200">
          Sau khi dừng bước lại đầy tiếc nuối tại Rap Việt mùa 3, mới đây
          Hurryrng đã rất bất ngờ chia sẻ lại khoảng khắc khi được Đen Vâu chú ý
          đến và nhấn theo dõi trên IG
        </p>
      </div>
    </div>
  )
}

export default Index
