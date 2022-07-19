import React from 'react'
import followerIcon from '../assets/follower-icon-blue.svg'
import heartIcon from '../assets/heart-icon-red.svg'
import retweetIcon from '../assets/retweet-icon-green.svg'

import ProfilePicture from './ProfilePicture'

function NotificationCard({ notiType }: any) {
  return (
    <div className="pr-8">
      {/* Follower */}
      <div className="flex items-start justify-start mb-4">
        <img src={followerIcon} alt="Follower" className="w-7 h-7" />
        <div className="ml-4">
          <ProfilePicture className="w-8 h-8" />
          <p className="mt-2">
            <span className="font-bold">User X</span> followed you
          </p>
        </div>
      </div>

      {/* Like */}
      <div className="flex items-start justify-start mb-4">
        <img src={heartIcon} alt="Like" className="w-7 h-7" />
        <div className="ml-4">
          <ProfilePicture className="w-8 h-8" />
          <p className="mt-2">
            <span className="font-bold">User X</span> liked your Tweet
          </p>
          {/* Tweet text */}
          <p className="text-sm text-twitter-dark-gray mt-2 cursor-pointer">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      {/* Retweet */}
      <div className="flex items-start justify-start mb-4">
        <img src={retweetIcon} alt="Retweet" className="w-7 h-7" />
        <div className="ml-4">
          <ProfilePicture className="w-8 h-8" />
          <p className="mt-2">
            <span className="font-bold">User X</span> Retweeted your Tweet
          </p>
          {/* Tweet text */}
          <p className="text-sm text-twitter-dark-gray mt-2 cursor-pointer">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotificationCard
