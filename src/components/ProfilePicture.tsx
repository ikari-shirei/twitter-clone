import React from 'react'
import imageIcon from '../assets/cat.webp'

interface IProfilePicture {
  size: string
}

function ProfilePicture({ size }: IProfilePicture) {
  return (
    <img
      src={imageIcon}
      alt="Profile"
      className={`${
        size === '12' ? 'w-12 h-12' : 'w-10 h-10'
      } cursor-pointer rounded-full`}
    />
  )
}

export default ProfilePicture
