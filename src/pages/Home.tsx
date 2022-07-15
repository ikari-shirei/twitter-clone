import React from 'react'
import { Link } from 'react-router-dom'
import latestIcon from '../assets/latest-icon.svg'
import TweetCard from '../components/TweetCard'
import TweetShare from '../components/TweetShare'

function Home() {
  return (
    <div className="middle">
      {/* Sort type */}
      <div className="flex justify-between items-center sticky top-0 pb-4 pl-6 lg:pl-0 pr-4 lg:pr-2 bg-twitter-eel-gray z-20">
        <p className="text-xl font-bold cursor-pointer">Latest tweets</p>
        <img src={latestIcon} alt="Latest icon" className="cursor-pointer" />
      </div>

      {/* Sharing tweet section */}
      <TweetShare />
      {/* Tweets */}
      <div className="my-4">
        <Link to="/username/1">
          <TweetCard />
        </Link>
        <Link to="/username/2">
          <TweetCard />
        </Link>
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </div>
    </div>
  )
}

export default Home
