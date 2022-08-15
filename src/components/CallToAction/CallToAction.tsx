import React from "react";
import "./CallToAction.css";

const CallToAction: React.FC = () => {
  return (
    <div className="CallToAction container">
      <div className="CallToAction--info">
        <h2>Email</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit consequuntur
        </p>
      </div>
      <form className="CTL--email">
        <input type="email" name="email" placeholder="Enter Your mail"></input>
        <button type="submit">
          <img
            alt=""
            src="https://www.svgrepo.com/show/179364/send-paper.svg"
          ></img>
        </button>
      </form>
    </div>
  );
};

export default CallToAction;
