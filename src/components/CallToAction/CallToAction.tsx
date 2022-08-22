import React from "react";
import { CallToActionInfo, CallToActionWrapper, CTLEmail } from "./styles";

const CallToAction: React.FC = () => {
  return (
    <CallToActionWrapper>
      <CallToActionInfo>
        <h2>Email</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit consequuntur
        </p>
      </CallToActionInfo>
      <CTLEmail>
        <input type="email" name="email" placeholder="Enter Your mail"></input>
        <button type="submit">
          <img
            alt=""
            src="https://www.svgrepo.com/show/179364/send-paper.svg"
          ></img>
        </button>
      </CTLEmail>
    </CallToActionWrapper>
  );
};

export default CallToAction;
