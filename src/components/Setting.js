import React from "react";
import { useContext } from "react";
import mainContext from "../MainContext";

function Setting() {
  const { name, username, setName, setUsername } = useContext(mainContext);
  return (
    <div className="tweet-settings">
      <h3>Tweet Ayarları</h3>
      <ul>
        <li>
          <input
            type="text"
            className="input"
            placeholder="Ad Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
        <li>
          <input
            type="text"
            className="input"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </li>
      </ul>
    </div>
  );
}

export default Setting;
