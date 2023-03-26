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
    setRetweets,
    setQuoteTweets,
    setLikes,
    setName,
    setUsername,
    setTweet,
  } = useContext(mainContext);
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
      </ul>
    </div>
  );
}

export default Setting;
