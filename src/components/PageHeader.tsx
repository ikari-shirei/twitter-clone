import React from 'react'
import latestIcon from '../assets/latest-icon.svg'

function PageHeader({ children }: any) {
  return (
    <div className="sticky top-0 pb-4 pl-6 lg:pl-0 pr-4 lg:pr-2 bg-twitter-eel-gray z-20">
      <div>{children}</div>
    </div>
  )
}

export default PageHeader
