import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import './index.css'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="grid grid-cols-12 mx-24 pt-4 h-screen">
          <LeftSidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

          <RightSidebar />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
