import ProfilePicture from '../components/ProfilePicture'
import img from '../assets/cat.webp'
import dotsIcon from '../assets/dots.svg'
import commentIcon from '../assets/comment-icon.svg'
import heartIcon from '../assets/heart-icon.svg'
import retweetIcon from '../assets/retweet-icon.svg'
import shareIcon from '../assets/share-icon.svg'
import backIcon from '../assets/back-icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import TweetShare from '../components/TweetShare'
import Reply from '../components/Reply'
import PageHeader from '../components/PageHeader'

function TweetDetails() {
  let navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <div className="middle">
      {/* Topmost */}
      <PageHeader>
        <div className="flex items-center">
          <div onClick={goBack}>
            <img
              src={backIcon}
              alt="Back"
              className="cursor-pointer ml-4 w-4 h-4"
            />
          </div>
          <div className="px-6 pb-2">
            <p className="font-bold text-xl">Tweet</p>
          </div>
        </div>
      </PageHeader>

      <div className="flex flex-col w-full px-5 py-2 lg:py-6">
        {/* Username and pic */}
        <div className="flex">
          <ProfilePicture className="w-12 h-12" />
          {/* Username, date, options */}
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-between items-center  mb-2 ml-2">
              <div className="flex flex-col items-baseline">
                <p className="font-semibold text-sm lg:text-base">
                  Usernameverylong
                </p>
                <p className="text-twitter-dark-gray text-xs lg:text-sm">
                  @Usernamelong
                </p>
              </div>
            </div>
            <img
              src={dotsIcon}
              alt="More"
              className="cursor-pointer my-2 w-4 h-4"
            />
          </div>
        </div>
        <div>
          {/* Tweet body */}
          <p className="text-sm lg:text-lg lg:leading-7 tracking-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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

          {/* Time and date */}
          <div className="flex text-twitter-dark-gray my-4">
            <p>10:23</p>
            <p className="ml-2">Jul 15, 2022</p>
          </div>

          {/* Retweet, quote tweets, likes */}
          <div className="flex text-sm mb-4">
            <div className="flex items-center cursor-pointer ">
              <p className="font-bold ">100</p>
              <p className="ml-2 text-twitter-dark-gray hover:underline">
                Retweets
              </p>
            </div>
            <div className="flex items-center cursor-pointer ml-4">
              <p className="font-bold">100</p>
              <p className="ml-2 text-twitter-dark-gray hover:underline">
                Quote Tweets
              </p>
            </div>
            <div className="flex items-center cursor-pointer ml-4">
              <p className="font-bold">100</p>
              <p className="ml-2 text-twitter-dark-gray hover:underline">
                Likes
              </p>
            </div>
          </div>

          {/* Comment, retweet, like, share */}
          <div className="flex justify-between items-center text-twitter-dark-gray mx-12 lg:mx-20">
            <div className="flex items-center text-sm cursor-pointer hover:text-twitter-blue">
              <img
                src={commentIcon}
                alt="Comment"
                className="w-9 h-9 p-2 rounded-full mr-2 icon-bg-blue-hover"
              />
            </div>
            <div className="flex items-center text-sm cursor-pointer hover:text-twitter-blue">
              <img
                src={retweetIcon}
                alt="Retweet"
                className="w-9 h-9 p-2 rounded-full mr-2 icon-bg-blue-hover"
              />
            </div>
            <div className="flex items-center text-sm cursor-pointer hover:text-twitter-blue">
              <img
                src={heartIcon}
                alt="Like"
                className="w-9 h-9 p-2 rounded-full mr-2 icon-bg-blue-hover"
              />
            </div>
            <img
              src={shareIcon}
              alt="Share"
              className="w-9 h-9 p-2 rounded-full cursor-pointer icon-bg-blue-hover"
            />
          </div>
        </div>
      </div>

      {/* Reply tweet */}
      <div>
        <TweetShare />
      </div>

      {/* Replies */}
      <div className="mb-96 mx-2">
        <Reply />
        <Reply />
        <Reply />
        <Reply />
        <Reply />
        <Reply />
      </div>
    </div>
  )
}

export default TweetDetails
