import React from "react";
import { Link } from "react-router-dom";
import Header from "components/Header/Header";
import { NotFoundedInfo, NotFoundedWrapper } from "./styles";

const DvdLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 210 107"
    fill="currentColor"
  >
    <path d="M119 20s-14 17-13 18c1-1-5-18-5-18L96 5H22l-2 11h23c13 0 20 5 18 14-2 10-13 14-24 14h-5l6-24H19l-9 35h28c20 0 40-11 44-25 0-3 0-9-2-13v-1h1v1l18 50 44-51h24c12 0 20 5 18 14-3 10-14 14-25 14h-5l6-24h-19l-8 35h27c21 0 40-11 44-25 3-14-12-25-32-25h-41l-13 15zM99 67C47 67 5 73 5 81s42 14 94 14c53 0 95-6 95-14s-42-14-95-14zm-3 19c-12 0-22-2-22-5 0-2 10-4 22-4s22 2 22 4c0 3-10 5-22 5z" />
  </svg>
);

const NotFounded: React.FC = () => (
  <section>
    <Header />
    <NotFoundedWrapper>
      <span className="bouncer">
        <DvdLogo />
      </span>
      <NotFoundedInfo>
        <p>
          Oops..
          <br />
          This page doesn&apos;t exist
        </p>
        <Link to="/" className="go-back">
          Go back
        </Link>
      </NotFoundedInfo>
    </NotFoundedWrapper>
  </section>
);

export default NotFounded;
