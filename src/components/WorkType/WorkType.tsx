import React from "react";
import { WorkTypeBlocks, WorkTypeLeftBlock, WorkTypeWrapper } from "./styles";

const WorkType: React.FC = () => {
  return (
    <WorkTypeWrapper>
      <WorkTypeLeftBlock>
        <h2>Work Types</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          obcaecati, ipsa voluptatibus voluptate reprehenderit excepturi,
          explicabo modi officiis quidem soluta nesciunt minima facilis
          inventore praesentium quas illo aliquam molestiae quibusdam?
        </h3>
        <WorkTypeBlocks>
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
        </WorkTypeBlocks>
      </WorkTypeLeftBlock>
      <img src="./images/chair-worker.png" alt=""></img>
    </WorkTypeWrapper>
  );
};

export default WorkType;
