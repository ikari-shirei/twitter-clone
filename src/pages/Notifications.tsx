import React, { useState } from 'react'
import NotificationCard from '../components/NotificationCard'
import PageHeader from '../components/PageHeader'

function Notifications() {
  const [activeNotiNav, setActiveNotiNav] = useState('all')

  function changeActiveNotiNav(state: string) {
    setActiveNotiNav(state)
  }

  return (
    <div className="middle px-4 lg:px-0">
      <PageHeader>
        <div>
          <p className="pageHeaderBold">Notifications</p>
        </div>
      </PageHeader>

      {/* Notifications nav */}
      <nav>
        <ul className="flex justify-between mx-32 my-4">
          <li
            className={
              activeNotiNav === 'all'
                ? 'font-bold cursor-pointer'
                : 'cursor-pointer'
            }
            onClick={() => changeActiveNotiNav('all')}
          >
            All
          </li>
          <li
            className={
              activeNotiNav === 'all'
                ? ' cursor-pointer'
                : 'font-bold  cursor-pointer'
            }
            onClick={() => changeActiveNotiNav('mentions')}
          >
            Mentions
          </li>
        </ul>
      </nav>

      {activeNotiNav === 'all' ? (
        <div>
          <NotificationCard notiType="follow" />
          <NotificationCard notiType="like" />
          <NotificationCard notiType="like" />
          <NotificationCard notiType="retweet" />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Notifications
