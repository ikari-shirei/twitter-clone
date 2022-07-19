import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import './index.css'
import Bookmarks from './pages/Bookmarks'
import Home from './pages/Home'
import Messages from './pages/Messages'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import TweetDetails from './pages/TweetDetails'

function App() {
  const [user, setUser] = useState(true)

  return (
    <div>
      <BrowserRouter>
        {user ? (
          <div className="grid grid-cols-12 mx-0 lg:mx-24 pt-2 lg:pt-4 h-screen">
            <LeftSidebar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/:username/:tweetid" element={<TweetDetails />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>

            <RightSidebar />
          </div>
        ) : (
          ''
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
