import { useContext } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import mainContext from "../MainContext";
import { AvatarLoader } from "./Loader";

function Tweet() {
  const {
    name,
    username,
    isVerified,
    tweet,
    retweets,
    quoteTweets,
    likes,
    avatar,
    tweetRef,
  } = useContext(mainContext);

  const tweetFormat = (tweet) => {
    tweet = tweet
      .replace(/@([\w]+)/g, "<span>@$1</span>")
      .replace(/#([\wşçöğüıİ]+)/gi, "<span>#$1</span>")
      .replace(/(https?:\/\/[\w./?=]+)/, "<span>$1</span>");
    return tweet;
  };
  const formatTweet = (number) => {
    if (!number) {
      number = 0;
    }
    if (number < 1000) {
      return number;
    }
    number /= 1000;
    number = String(number).split(".");
    return (
      number[0] + (number[1] > 100 ? "," + number[1].slice(0, 1) + " B" : " B")
    );
  };

  return (
    <div className="tweet-container">
      {/* <div className="fetch-info">
        <input
          type="text"
          value={username}
          placeholder="Twitter kullanıcı adını yazın"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Bilgileri Çek</button>
      </div> */}
      <div className="tweet" ref={tweetRef}>
        <div className="tweet-author">
          {(avatar && <img alt="" src={avatar} />) || <AvatarLoader />}
          <div>
            <div className="name">
              {name || "Ad Soyad"}{" "}
              {isVerified && <MdVerified color="#fff" size={18} />}
            </div>
            <div className="username">@{username || "kullaniciadi"}</div>
          </div>
        </div>
        <div className="tweet-content">
          <p
            dangerouslySetInnerHTML={{
              __html:
                (tweet && tweetFormat(tweet)) || "Bu alana örnek tweet gelecek",
            }}
          />
        </div>
        <div className="tweet-stats">
          <span>
            <b>{formatTweet(retweets)}</b> Retweet
          </span>
          <span>
            <b>{formatTweet(quoteTweets)}</b> Alıntı Tweetler
          </span>
          <span>
            <b>{formatTweet(likes)}</b> Beğeni
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
