import React from 'react'
import TweetCard from '../components/TweetCard'

function Bookmarks() {
  return (
    <div className="middle">
      <div className="flex flex-col sticky top-0 pb-2 pl-6 lg:pl-0 pr-4 lg:pr-2 bg-twitter-eel-gray z-20">
        <p className="text-xl font-bold cursor-pointer">Bookmarks</p>
        <p className="text-sm text-twitter-dark-gray ">@username</p>
      </div>
      <div>
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </div>
    </div>
  )
}

export default Bookmarks
