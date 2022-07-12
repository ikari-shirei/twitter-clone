import React, { useEffect, useState } from 'react'
import dots from '../assets/dots.svg'
import ProfilePicture from './ProfilePicture'

function Logout() {
  const [logoutOptions, setLogoutOptions] = useState(false)

  // Close logout window on document click
  useEffect(() => {
    if (logoutOptions) {
    }
  })

  return (
    <div
      className={`logout  ${
        logoutOptions ? '' : 'hover:bg-twitter-el-gray cursor-pointer'
      }`}
    >
      <div className="flex justify-center items-center">
        <ProfilePicture size="10" />
        <div className="pl-3">
          <p className="font-semibold">Name</p>
          <p className="text-sm text-twitter-dark-gray">@Username</p>
        </div>
      </div>
      <img
        src={dots}
        alt="More"
        className="py-3"
        onClick={() => setLogoutOptions((prev) => !prev)}
      />

      {logoutOptions ? (
        <div className="absolute bottom-16 w-full shadow-md">
          <p className="text-md text-twitter-black p-4 cursor-pointer">
            Log out @Username
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Logout
