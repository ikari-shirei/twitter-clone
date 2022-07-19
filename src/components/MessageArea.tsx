import React from 'react'
import imageIcon from '../assets/image-icon.svg'
import PageHeader from './PageHeader'
import ProfilePicture from './ProfilePicture'
import sendIcon from '../assets/send-icon.svg'

function MessageArea() {
  return (
    <div className="grid grid-rows-6 h-full">
      {/* Header */}
      <PageHeader>
        <div className="flex items-center">
          <ProfilePicture className="w-6 h-6" />
          <div className="ml-2">
            <p className="font-bold text-xl">Username</p>
            <p className="text-sm text-twitter-dark-gray ">@username</p>
          </div>
        </div>
      </PageHeader>
      {/* Messages */}
      <div className=" relative bottom-0 row-start-2 row-end-6 h-full w-full overflow-y-scroll ">
        <div className="p-4 m-4 bg-twitter-blue text-white w-36">Message</div>
        <div className="p-4 m-4 bg-twitter-blue text-white w-36">Message</div>
        <div className="p-4 m-4 bg-twitter-blue text-white w-36">Message</div>
        <div className="p-4 m-4 bg-twitter-blue text-white w-36">Message</div>
        <div className="p-4 m-4 bg-twitter-blue text-white w-36">Message</div>
        <div className="p-4 m-4 bg-twitter-blue text-white w-36">Message</div>
        <div className="p-4 m-4 bg-twitter-blue text-white w-36">Message</div>
        <div className="p-4 m-4 bg-twitter-blue text-white w-36">Message</div>
      </div>
      {/* Add message section */}
      <div className="flex items-center pb-4 row-start-6 row-end-7 px-4">
        <img
          src={imageIcon}
          alt="Upload img"
          className="w-4 h-4 cursor-pointer"
        />
        <input
          className="w-full mx-4 text-sm py-1 pl-4 rounded-full focus:outline-twitter-blue h-8"
          placeholder="Start a new message"
        />
        <img src={sendIcon} alt="Send" className="w-4 h-4 cursor-pointer" />
      </div>
    </div>
  )
}

export default MessageArea
