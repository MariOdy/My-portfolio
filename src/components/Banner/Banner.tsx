import React from "react";

import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { BannerAction, BannerInfo, BannerWrapper } from "./styles";

const Banner: React.FC = () => {
  return (
    <BannerWrapper>
      <BannerInfo>
        <h2>Social media</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error
          ab necessitatibus voluptatem
        </p>
      </BannerInfo>
      <BannerAction>
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
      </BannerAction>
    </BannerWrapper>
  );
};

export default Banner;
