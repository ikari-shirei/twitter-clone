import React from 'react'
import { Link } from 'react-router-dom'
import latestIcon from '../assets/latest-icon.svg'
import PageHeader from '../components/PageHeader'
import TweetCard from '../components/TweetCard'
import TweetShare from '../components/TweetShare'

function Home() {
  return (
    <div className="middle">
      {/* Sort type */}
      <PageHeader>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold cursor-pointer">Latest tweets</p>
          <img src={latestIcon} alt="Latest icon" className="cursor-pointer" />
        </div>
      </PageHeader>

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
        <Link to="/username/3">
          <TweetCard />
        </Link>
        <Link to="/username/4">
          <TweetCard />
        </Link>
        <Link to="/username/5">
          <TweetCard />
        </Link>
        <Link to="/username/6">
          <TweetCard />
        </Link>
      </div>
    </div>
  )
}

export default Home
