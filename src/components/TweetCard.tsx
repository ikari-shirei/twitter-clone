import ProfilePicture from './ProfilePicture'
import img from '../assets/cat.webp'
import dotsIcon from '../assets/dots.svg'
import commentIcon from '../assets/comment-icon.svg'
import heartIcon from '../assets/heart-icon.svg'
import retweetIcon from '../assets/retweet-icon.svg'
import shareIcon from '../assets/share-icon.svg'

function TweetCard() {
  return (
    <div className="flex pr-5 pl-5 relative right-5 py-6 border hover:bg-twitter-card-hover-bg transition-all cursor-pointer">
      <ProfilePicture size="12" />
      <div className="ml-4">
        {/* Username, date, options */}
        <div className="flex justify-between items-center">
          <div className="flex items-baseline">
            <p className="font-semibold">Usernameverylong</p>
            <p className="text-twitter-dark-gray ml-2">@Usernamelong</p>
            <p className="text-twitter-dark-gray ml-2">5m</p>
          </div>
          <img src={dotsIcon} alt="More" className="cursor-pointer py-2" />
        </div>

        {/* Tweet body */}
        <p className="text-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* Tweet image */}
        {img && (
          <div className="w-full my-4">
            <img
              src={img}
              alt="Img"
              className="w-full rounded-3xl cursor-pointer"
            />
          </div>
        )}

        {/* Comment, retweet, like, share */}
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

export default TweetCard
