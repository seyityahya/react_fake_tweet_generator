import { useState, createRef } from "react";
import Setting from "./components/Setting";
import Tweet from "./components/Tweet";
import MainContext from "./MainContext";
import { useScreenshot } from "use-react-screenshot";
function App() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState(false);
  const [tweet, setTweet] = useState();
  const [avatar, setAvatar] = useState();
  const [retweets, setRetweets] = useState(0);
  const [quoteTweets, setQuoteTweets] = useState(0);
  const [likes, setLikes] = useState(0);
  const [image, takeScreenshot] = useScreenshot();

  const tweetRef = createRef(null);

  const getImage = () => takeScreenshot(tweetRef.current);

  const data = {
    name,
    username,
    isVerified,
    tweet,
    retweets,
    quoteTweets,
    likes,
    avatar,
    image,
    setName,
    setUsername,
    setTweet,
    setRetweets,
    setQuoteTweets,
    setLikes,
    setIsVerified,
    setAvatar,
    tweetRef,
    getImage,
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
