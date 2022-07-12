import searchIcon from '../assets/search-icon.svg'

function Search() {
  return (
    <div className="flex w-full py-2 px-6 rounded-3xl items-center bg-twitter-el-gray">
      <img src={searchIcon} alt="Search" className="w-4 h-4" />
      <input
        type="text"
        placeholder="Search twitter"
        className="bg-transparent focus:outline-none pl-4 text-sm"
      />
    </div>
  )
}

export default Search
