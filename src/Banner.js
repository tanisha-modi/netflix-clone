import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https:/i.imgur.com/e1hLQ2m.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          { truncate(`This is a test banner_description This is a test
          banner_descriptionThis is a test banner_descriptionThis is a test
          banner_descriptionThis is a test banner_descriptionThis is a test
          banner_descriptionThis is a test banner_description This is a test
          banner_descriptionThis is a test banner_descriptionThis is a test
          banner_descriptionThis is a test banner_description`, 150)}
        </h1>
      </div>

      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
