import { useState } from "react";
import Setting from "./components/Setting";
import Tweet from "./components/Tweet";
import MainContext from "./MainContext";
function App() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState(false);
  const [tweet, setTweet] = useState();
  const [avatar, setAvatar] = useState();
  const [retweets, setRetweets] = useState(0);
  const [quoteTweets, setQuoteTweets] = useState(0);
  const [likes, setLikes] = useState(0);

  const data = {
    name,
    username,
    isVerified,
    tweet,
    retweets,
    quoteTweets,
    likes,
    avatar,
    setName,
    setUsername,
    setTweet,
    setRetweets,
    setQuoteTweets,
    setLikes,
    setAvatar,
    setIsVerified,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        <Setting />
        <Tweet />
      </MainContext.Provider>
    </>
  );
}

export default App;
