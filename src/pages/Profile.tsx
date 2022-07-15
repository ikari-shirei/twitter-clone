import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import backIcon from '../assets/back-icon.svg'
import cat from '../assets/cat.webp'
import dateIcon from '../assets/date-icon.svg'
import PageHeader from '../components/PageHeader'
import TweetCard from '../components/TweetCard'

function Profile() {
  const [activeProfileNav, setActiveProfileNav] = useState<profileNav>(1)

  enum profileNav {
    tweets = 1,
    tweetsReplies = 2,
    media = 3,
    likes = 4,
  }

  function changeProfileNavActive(num: number) {
    setActiveProfileNav(num)
  }

  let navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <div className="middle">
      {/* Topmost */}
      <PageHeader>
        <div className="flex items-center">
          <div onClick={goBack}>
            <img
              src={backIcon}
              alt="Back"
              className="cursor-pointer ml-4 w-4 h-4"
            />
          </div>
          <div className="px-6 pb-2">
            <p className="font-bold text-xl">Username</p>
            <p className="text-xs text-twitter-dark-gray">44 tweets</p>
          </div>
        </div>
      </PageHeader>

      {/* Background image */}
      <div className="h-64">
        <div className="h-48 overflow-hidden">
          <img src={cat} alt="cat" className="w-full cursor-pointer" />
        </div>

        {/* Profile image and edit button */}
        <div className="flex justify-between relative bottom-16 px-8">
          <img
            src={cat}
            alt="cat"
            className="cursor-pointer w-32 h-32 rounded-full border border-twitter-eel-gray"
          />
          <button className="mt-20 px-4 h-10 rounded-full font-semibold border border-twitter-el-gray">
            Edit profile
          </button>
        </div>
      </div>

      {/* Profile details */}
      <div className="flex flex-col px-4 mt-3">
        <p className="text-xl font-bold">Username</p>
        <p className="text-sm text-twitter-dark-gray">@username</p>

        <div className="pt-3">
          <p>Description</p>
          <div className="flex items-center mt-1">
            <img src={dateIcon} alt="Date" className="w-4 h-4" />
            <p className="text-twitter-dark-gray ml-2">Joined July 2021</p>
          </div>
        </div>

        <div className="flex text-sm mt-2">
          <p className="text-twitter-dark-gray cursor-pointer">
            <span className="font-semibold text-twitter-black text-md">33</span>{' '}
            Following
          </p>
          <p className="ml-4 text-twitter-dark-gray cursor-pointer">
            <span className="font-semibold text-twitter-black text-md">33</span>{' '}
            Followers
          </p>
        </div>
      </div>

      {/* Profile navigation  */}
      <div>
        <nav>
          <ul className="flex justify-between mt-4 px-12 text-twitter-dark-gray font-medium">
            <div className="py-4" onClick={() => changeProfileNavActive(1)}>
              <li
                className={`cursor-pointer ${
                  activeProfileNav === 1 ? 'profile-nav-active' : ''
                }`}
              >
                Tweets
              </li>
            </div>
            <div className="py-4" onClick={() => changeProfileNavActive(2)}>
              <li
                className={`cursor-pointer ${
                  activeProfileNav === 2 ? 'profile-nav-active' : ''
                }`}
              >
                Tweets & replies
              </li>
            </div>
            <div className="py-4" onClick={() => changeProfileNavActive(3)}>
              <li
                className={`cursor-pointer ${
                  activeProfileNav === 3 ? 'profile-nav-active' : ''
                }`}
              >
                Media
              </li>
            </div>
            <div className="py-4" onClick={() => changeProfileNavActive(4)}>
              <li
                className={`cursor-pointer ${
                  activeProfileNav === 4 ? 'profile-nav-active' : ''
                }`}
              >
                Likes
              </li>
            </div>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div>
        {activeProfileNav === 1 && (
          <div>
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
        )}
      </div>
    </div>
  )
}

export default Profile
