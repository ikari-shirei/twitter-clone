import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeftSidebar from './components/LeftSidebar'
import './index.css'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex mx-24 pt-4 h-screen">
          <LeftSidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
