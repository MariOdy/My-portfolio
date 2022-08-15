import React from "react";
import "./Banner.css";

import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

const Banner: React.FC = () => {
  return (
    <div className="Banner container">
      <div className="Banner--info">
        <h2>Social media</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error
          ab necessitatibus voluptatem
        </p>
      </div>
      <div className="Banner--action">
        <a href="/">
          <BsFacebook />
          <h3>Facebook</h3>
        </a>
        <a href="/">
          <BsInstagram />
          <h3>Instagram</h3>
        </a>
        <a href="/">
          <BsTwitter />
          <h3>Twitter</h3>
        </a>
        <a href="/">
          <BsPinterest />
          <h3>Pinterest</h3>
        </a>
      </div>
    </div>
  );
};

export default Banner;
