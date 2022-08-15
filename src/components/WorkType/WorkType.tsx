import React from "react";
import "./WorkType.css";

const WorkType: React.FC = () => {
  return (
    <div className="WorkType container">
      <div className="WorkType-leftblock">
        <h2>Work Types</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          obcaecati, ipsa voluptatibus voluptate reprehenderit excepturi,
          explicabo modi officiis quidem soluta nesciunt minima facilis
          inventore praesentium quas illo aliquam molestiae quibusdam?
        </h3>
        <div className="WorkType--blocks">
          <div>
            <img src="https://www.svgrepo.com/show/373669/html.svg" alt="" />
          </div>
          <div>
            <img src="https://www.svgrepo.com/show/349330/css3.svg" alt="" />
          </div>
          <div>
            <img
              src="https://www.svgrepo.com/show/303206/javascript-logo.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.svgrepo.com/show/303600/typescript-logo.svg"
              alt=""
            />
          </div>
          <div>
            <img src="https://www.svgrepo.com/show/354259/react.svg" alt="" />
          </div>
          <div>
            <img src="https://www.svgrepo.com/show/341847/github.svg" alt="" />
          </div>
          <div>
            <img src="https://www.svgrepo.com/show/374171/vscode.svg" alt="" />
          </div>
          <div>
            <img src="https://www.svgrepo.com/show/354987/figma.svg" alt="" />
          </div>
        </div>
      </div>
      <img src="./images/chair-worker.png" alt=""></img>
    </div>
  );
};

export default WorkType;
