import React from 'react'
import latestIcon from '../assets/latest-icon.svg'
import TweetCard from '../components/TweetCard'
import TweetShare from '../components/TweetShare'

function Home() {
  return (
    <div className="middle">
      {/* Sort type */}
      <div className="flex justify-between items-center sticky top-0 pb-4 pl-6 pr-4 bg-twitter-eel-gray z-20">
        <p className="text-xl font-bold cursor-pointer">Latest tweets</p>
        <img src={latestIcon} alt="Latest icon" className="cursor-pointer" />
      </div>

      {/* Sharing tweet section */}
      <TweetShare />
      {/* Tweets */}
      <div className="my-4">
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

export default Home
