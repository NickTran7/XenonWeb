import { useState, useEffect } from "react";

const Footer = () => {
  return (
    <div className="grid">
      <p className="copyright"> **GRID** !Copyright 2022 Science Junkie</p>
      <ul className="social">
        <li>
          <a href="#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icon_facebook.svg`}
              alt="Github"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icon_twitter.svg`}
              alt="Linknd"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
