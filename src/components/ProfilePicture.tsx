import React from 'react'
import imageIcon from '../assets/cat.webp'

interface IProfilePicture {
  className: string
}

function ProfilePicture({ className }: IProfilePicture) {
  return (
    <img
      src={imageIcon}
      alt="Profile"
      className={`${className} cursor-pointer rounded-full`}
    />
  )
}

export default ProfilePicture
