import ProfilePicture from './ProfilePicture'

function MessageCard() {
  return (
    <div className="flex cursor-pointer mb-6">
      <ProfilePicture className="w-12 h-12" />
      <div className="ml-2">
        <div className="flex">
          <p className="font-semibold">Username</p>
          <p className="text-twitter-dark-gray ml-2">@username</p>
          <p className="text-twitter-dark-gray ml-2"> 2h</p>
        </div>
        <p className="text-twitter-dark-gray">New message</p>
      </div>
    </div>
  )
}

export default MessageCard
