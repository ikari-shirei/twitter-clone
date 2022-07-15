import React from 'react'
import PageHeader from '../components/PageHeader'
import TweetCard from '../components/TweetCard'

function Bookmarks() {
  return (
    <div className="middle">
      <PageHeader>
        <div className="flex flex-col ">
          <p className="text-xl font-bold cursor-pointer">Bookmarks</p>
          <p className="text-sm text-twitter-dark-gray ">@username</p>
        </div>
      </PageHeader>

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
