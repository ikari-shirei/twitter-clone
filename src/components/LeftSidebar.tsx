import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import Logout from './Logout'

import logo from '../assets/twitter-logo.svg'
import homeIcon from '../assets/home-icon.svg'
import homeActiveIcon from '../assets/home-icon-active.svg'
import notificationsIcon from '../assets/notifications-icon.svg'
import notificationsActiveIcon from '../assets/notifications-icon-active.svg'
import bookmarksIcon from '../assets/bookmark-icon.svg'
import bookmarksActiveIcon from '../assets/bookmark-icon-active.svg'
import profileIcon from '../assets/profile-icon.svg'
import profileActiveIcon from '../assets/profile-icon-active.svg'
import moreIcon from '../assets/more-icon.svg'

function LeftSidebar() {
  const [homeIconState, setHomeIconState] = useState(homeIcon)
  const [notificationsIconState, setNotificationsIconState] =
    useState(notificationsIcon)
  const [bookmarkIconState, setBookmarkIconState] = useState(bookmarksIcon)
  const [profileIconState, setProfileIconState] = useState(profileIcon)

  const location = useLocation()

  // Changes nav icons' style, based on location
  // NavLink isn't suitable for setting states
  useEffect(() => {
    // Home
    location.pathname === '/'
      ? setHomeIconState(homeActiveIcon)
      : setHomeIconState(homeIcon)

    // Notifications
    location.pathname === '/notifications'
      ? setNotificationsIconState(notificationsActiveIcon)
      : setNotificationsIconState(notificationsIcon)

    // Bookmarks
    location.pathname === '/bookmarks'
      ? setBookmarkIconState(bookmarksActiveIcon)
      : setBookmarkIconState(bookmarksIcon)

    // Profile
    location.pathname === '/profile'
      ? setProfileIconState(profileActiveIcon)
      : setProfileIconState(profileIcon)
  }, [location])

  return (
    <div className="leftsidebar">
      {/* Upper sidebar */}
      <div>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Twitter logo" className="h-7 w-7 ml-2" />
        </Link>

        {/* Navigation */}
        <nav className="mt-4">
          <NavLink to="/">
            <div className="nav-group">
              <img src={homeIconState} alt="Home" className="nav-icon " />
              <h1
                className={`text-xl ${
                  location.pathname === '/'
                    ? 'icon-header-active'
                    : 'icon-header'
                }`}
              >
                Home
              </h1>
            </div>
          </NavLink>
          <NavLink to="/notifications">
            <div className="nav-group">
              <img
                src={notificationsIconState}
                alt="Notifications"
                className="nav-icon "
              />
              <h1
                className={`text-xl ${
                  location.pathname === '/notifications'
                    ? 'icon-header-active'
                    : 'icon-header'
                }`}
              >
                Notifications
              </h1>
            </div>
          </NavLink>
          <NavLink to="/bookmarks">
            <div className="nav-group">
              <img
                src={bookmarkIconState}
                alt="Bookmarks"
                className="nav-icon "
              />
              <h1
                className={`text-xl ${
                  location.pathname === '/bookmarks'
                    ? 'icon-header-active'
                    : 'icon-header'
                }`}
              >
                Bookmarks
              </h1>
            </div>
          </NavLink>
          <NavLink to="/profile">
            <div className="nav-group">
              <img src={profileIconState} alt="Profile" className="nav-icon " />
              <h1
                className={`text-xl ${
                  location.pathname === '/profile'
                    ? 'icon-header-active'
                    : 'icon-header'
                }`}
              >
                Profile
              </h1>
            </div>
          </NavLink>

          {/* 
        <div className="nav-group cursor-pointer">
          <img src={moreIcon} alt="More" className="nav-icon" />
          <h1 className="icon-header text-xl">More</h1>
        </div>
        */}
        </nav>

        {/* Tweet button */}
        <button className="font-bold text-lg bg-twitter-blue text-twitter-eel-gray rounded-3xl px-4 py-3 mt-4 w-full">
          Tweet
        </button>
      </div>
      {/* Lower navigation */}
      <div>
        <Logout />
      </div>
    </div>
  )
}

export default LeftSidebar
