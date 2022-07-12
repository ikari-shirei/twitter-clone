import React from 'react'
import latestIcon from '../assets/latest-icon.svg'
import TweetCard from '../components/TweetCard'
import TweetShare from '../components/TweetShare'

function Home() {
  return (
    <div className="w-full col-span-6 col-start-4 col-end-10">
      {/* Sort type */}
      <div className="flex justify-between items-center sticky bg-twitter-eel-gray">
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
