import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import "./NotFounded.css";

const NotFounded: React.FC = () => {
  return (
    <section>
      <Header />
      <div className="NotFounded container">
        <img src="./images/notfounded.png" alt="" />
        <div className="NotFounded-info">
          <p>This page doesn't exist</p>
          <Link to="/" className="go-back">
            Go back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFounded;
