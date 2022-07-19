import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import backIcon from '../assets/back-icon.svg'
import ProfilePicture from '../components/ProfilePicture'
import MessageCard from '../components/MessageCard'
import MessageArea from '../components/MessageArea'

function Messages() {
  const [isMessagesEmpty, setIsMessagesEmpty] = useState(false)

  return (
    <div className="messages">
      {/* Messages */}
      <div className="col-start-1 col-end-5 border-r border-twitter-el-gray h-screen overflow-hidden">
        {/* When empty */}
        {isMessagesEmpty && (
          <div>
            {/* Header */}
            <PageHeader>
              <p className="pageHeaderBold">Messages</p>
            </PageHeader>
            <div className="h-fit pt-12 px-4">
              <h1 className="text-4xl font-bold">Welcome to your inbox!</h1>
              <p className="text-twitter-dark-gray mt-2">
                Drop a line, share Tweets and more with private conversations
                between you and others on Twitter.
              </p>
              <div className="w-52">
                <button className="button-blue mt-8">Write a message</button>
              </div>
            </div>
          </div>
        )}

        {/* If messages exist */}
        {!isMessagesEmpty && (
          <div className="h-screen border-r border-twitter-el-gray overflow-y-scroll">
            {/* Header */}
            <PageHeader>
              <p className="pageHeaderBold">Messages</p>
            </PageHeader>

            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
          </div>
        )}
      </div>
      {/* Direct messages */}
      <div className="col-start-5 col-end-13 h-full">
        {/* When empty */}
        {isMessagesEmpty && (
          <PageHeader>
            <div className="flex items-center">
              <div>
                <img
                  src={backIcon}
                  alt="Back"
                  className="cursor-pointer ml-4 w-4 h-4"
                />
              </div>
              <div className="px-6">
                <p className="pageHeaderBold">Direct messages</p>
              </div>
            </div>
          </PageHeader>
        )}

        {/* Message Selected */}
        {!isMessagesEmpty && (
          <div className="col-start-5 col-end-13 mx-4 h-screen overflow-y-scroll">
            <MessageArea />
          </div>
        )}
      </div>
    </div>
  )
}

export default Messages
