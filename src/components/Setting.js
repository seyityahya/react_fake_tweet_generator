import React from "react";
import { useContext } from "react";
import mainContext from "../MainContext";

function Setting() {
  const {
    name,
    username,
    tweet,
    retweets,
    quoteTweets,
    likes,
    image,
    avatar,
    setRetweets,
    setQuoteTweets,
    setLikes,
    setName,
    setUsername,
    setTweet,
    setAvatar,
    getImage,
  } = useContext(mainContext);

  const avatarHandle = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setAvatar(this.result);
    });
    reader.readAsDataURL(file);
  };
  return (
    <div className="tweet-settings">
      <h3>Tweet Ayarları</h3>
      <ul>
        <li>
          <label>Ad Soyad</label>
          <input
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
        <li>
          <label>Kullanıcı Adı</label>
          <input
            type="text"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </li>
        <li>
          <label>Tweet</label>
          <textarea
            className="textarea"
            maxLength={290}
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </li>
        <li>
          <label>Avatar</label>
          <input
            type="text"
            className="input"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <input type="file" className="input" onChange={avatarHandle} />
        </li>
        <li>
          <label>Retweet</label>
          <input
            type="number"
            className="input"
            value={retweets}
            onChange={(e) => setRetweets(e.target.value)}
          />
        </li>
        <li>
          <label>Alıntı Tweetler</label>
          <input
            type="number"
            className="input"
            value={quoteTweets}
            onChange={(e) => setQuoteTweets(e.target.value)}
          />
        </li>
        <li>
          <label>Beğeni</label>
          <input
            type="number"
            className="input"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
          />
        </li>
        <button onClick={getImage}>Oluştur</button>
        <div className="download-url">
          {image && (
            <a href={image} download="tweet.png">
              Tweeti indir
            </a>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Setting;
