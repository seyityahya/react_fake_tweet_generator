import { useContext } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import mainContext from "../MainContext";

function Tweet() {
  const { name, username, isVerified, tweet, retweets, quoteTweets, likes } =
    useContext(mainContext);
  return (
    <div className="tweet-container">
      <div className="tweet">
        <div className="tweet-author">
          <img
            alt="seyityahya"
            src="https://pbs.twimg.com/profile_images/1586885263204257800/GbgLBTGx_bigger.jpg"
          />
          <div>
            <div className="name">
              {name || "Ad Soyad"}{" "}
              {isVerified && <MdVerified color="#fff" size={18} />}
            </div>
            <div className="username">@{username || "kullaniciadi"}</div>
          </div>
        </div>
        <div className="tweet-content">
          <p>{tweet || "Bu alana örnek tweet gelecek"}</p>
        </div>
        <div className="tweet-stats">
          <span>
            <b>{retweets}</b> Retweet
          </span>
          <span>
            <b>{quoteTweets}</b> Alıntı Tweetler
          </span>
          <span>
            <b>{likes}</b> Beğeni
          </span>
        </div>
        <div className="tweet-actions">
          <span>
            <BiMessageRounded color="#6e767d" size={24} />
          </span>
          <span>
            <AiOutlineRetweet color="#6e767d" size={24} />
          </span>
          <span>
            <AiOutlineHeart color="#6e767d" size={24} />
          </span>
          <span>
            <IoShareOutline color="#6e767d" size={24} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
