import profilePicture from '../assets/cat.webp'
import imageIcon from '../assets/image-icon.svg'
import ProfilePicture from './ProfilePicture'

function TweetShare() {
  return (
    <div className="flex my-4">
      {/* Profile pic */}

      <ProfilePicture className="w-12 h-12 ml-2" />

      {/* Input, tweet button and image adding */}
      <div className="w-full px-4 ">
        <textarea
          placeholder="What's happening?"
          className="w-full h-fit bg-twitter-eel-gray text-xl text-twitter-black placeholder:text-twitter-dark-gray focus:outline-none"
        ></textarea>

        <hr className="text-twitter-black w-full h-1" />

        <div className="flex justify-between items-center mt-6">
          <img
            src={imageIcon}
            alt="Add img"
            className="w-4 h-4 cursor-pointer"
          />
          <button className="font-bold text-md bg-twitter-blue text-twitter-eel-gray rounded-3xl px-5 py-2 w-32">
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
}

export default TweetShare
