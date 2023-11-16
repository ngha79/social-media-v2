import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

const LeftBar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search/top?search=${search}`)
  }

  return (
    <div className="flex items-center flex-1 justify-start gap-2 w-[20%] py-2 pl-4">
      <div className="rounded-full cursor-pointer w-max border  bg-blue-500 border-blue-500">
        <Link to="/">
          <BiLogoFacebook
            className="text-white"
            size={40}
          />
        </Link>
      </div>
      <form
        onSubmit={handleSearch}
        className="ml-2 relative rounded-2xl text-gray-600 dark:text-dark-item-hover flex items-center justify-start border-2 border-light-search bg-light-search dark:bg-dark-search dark:border-dark-search"
      >
        <label
          htmlFor="search"
          className="p-2"
        >
          <AiOutlineSearch />
        </label>
        <input
          className="text-sm focus:outline-none w-0 focus:p-2 md:w-[200px] focus:max-w-[300px] focus:min-w-[250px] z-10 rounded-2xl bg-light-search dark:bg-dark-search md:p-2"
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="search"
          placeholder="Search"
        />
      </form>
    </div>
  )
}

export default LeftBar
