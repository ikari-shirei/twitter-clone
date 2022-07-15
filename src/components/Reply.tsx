import React from 'react'
import ProfilePicture from './ProfilePicture'
import commentIcon from '../assets/comment-icon.svg'
import heartIcon from '../assets/heart-icon.svg'
import retweetIcon from '../assets/retweet-icon.svg'
import shareIcon from '../assets/share-icon.svg'

function Reply() {
  return (
    <div className="flex py-4 border border-y-twitter-el-gray border-x-0">
      <ProfilePicture className="w-12 h-12" />
      <div className="ml-2">
        <div className="flex items-baseline">
          <p className="font-semibold cursor-pointer">Username</p>
          <p className="text-twitter-dark-gray text-sm ml-2 cursor-pointer">
            @username
          </p>
          <p className="text-twitter-dark-gray text-sm ml-2">15 min</p>
        </div>
        <div className="flex">
          <p className="text-twitter-dark-gray">Replying to</p>
          <p className="text-twitter-blue hover:underline ml-2 cursor-pointer">
            @username
          </p>
        </div>
        <p className="text-sm mt-1 mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        {/* Reply, tweet, like, share */}
        <div className="flex justify-between items-center text-twitter-dark-gray mr-12">
          <div className="flex items-center text-sm cursor-pointer hover:text-twitter-blue">
            <img
              src={commentIcon}
              alt="Comment"
              className="w-8 h-8 p-2 rounded-full mr-2 icon-bg-blue-hover"
            />
            <p>0</p>
          </div>
          <div className="flex items-center text-sm cursor-pointer hover:text-twitter-blue">
            <img
              src={retweetIcon}
              alt="Retweet"
              className="w-8 h-8 p-2 rounded-full mr-2 icon-bg-blue-hover"
            />
            <p>0</p>
          </div>
          <div className="flex items-center text-sm cursor-pointer hover:text-twitter-blue">
            <img
              src={heartIcon}
              alt="Like"
              className="w-8 h-8 p-2 rounded-full mr-2 icon-bg-blue-hover"
            />
            <p>0</p>
          </div>
          <img
            src={shareIcon}
            alt="Share"
            className="w-8 h-8 p-2 rounded-full cursor-pointer icon-bg-blue-hover"
          />
        </div>
      </div>
    </div>
  )
}

export default Reply
