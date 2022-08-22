import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { NotFoundedInfo, NotFoundedWrapper } from "./styles";

const NotFounded: React.FC = () => {
  return (
    <section>
      <Header />
      <NotFoundedWrapper>
        <img src="./images/notfounded.png" alt="" />
        <NotFoundedInfo>
          <p>This page doesn't exist</p>
          <Link to="/" className="go-back">
            Go back
          </Link>
        </NotFoundedInfo>
      </NotFoundedWrapper>
    </section>
  );
};

export default NotFounded;
