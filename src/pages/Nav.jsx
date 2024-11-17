import React, { useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [searchName, setSearchName] = useState();
  const navigate = useNavigate();

  return (
    <div className="nav__mainSection">
      <div className="nav__section">
        <section>
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/500px-TikTok_logo.svg.png"
          />
        </section>
        <section>
          <div className="nav__search">
            <input
              type="text"
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="Search"
              onKeyDown={(e) =>
                e.key === "Enter" && navigate(`/search?q=${searchName}`)
              }
            />
            <button className="nav__searchButton">
              <img src="https://icons.veryicon.com/png/o/miscellaneous/icon-pack-vol-1/magnifying-glass-16.png" />
            </button>
          </div>
        </section>
        <section className="buttonSection">
          <button className="uploadButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
            </svg>
            Upload
          </button>
          <button>Messages</button>
          <button>Inbox</button>
          <button>Profile</button>
        </section>
      </div>
    </div>
  );
}
