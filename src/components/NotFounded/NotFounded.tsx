import React from "react";
import { Link } from "react-router-dom";
import { NotFoundedInfo, NotFoundedWrapper } from "./styles";

import Header from "../../Header";

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
