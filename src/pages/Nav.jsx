import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <div className="nav__section">
        <section>
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/500px-TikTok_logo.svg.png"
          />
        </section>
        <section>
          <div className="nav__search">
            <input type="text" placeholder="Search" />
            <button className="nav__searchButton">
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/icon-pack-vol-1/magnifying-glass-16.png"
                alt=""
              />
            </button>
          </div>
        </section>
        <section>
          <button>Upload</button>
          <button>Messages</button>
          <button>Inbox</button>
          <button>Profile</button>
        </section>
      </div>
    </div>
  );
}
