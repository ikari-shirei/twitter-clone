import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Search from './Search'

function RightSidebar() {
  const location = useLocation()

  const [isMessagesOn, setIsMessagesOn] = useState(false)

  useEffect(() => {
    if (location.pathname === '/messages') {
      setIsMessagesOn(true)
    } else {
      setIsMessagesOn(false)
    }
  }, [location])

  return (
    <div className={`${isMessagesOn ? 'hidden' : 'rightsidebar'}`}>
      <Search />
    </div>
  )
}

export default RightSidebar
