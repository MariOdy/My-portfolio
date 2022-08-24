import React from "react";
import { Cards, TypeCard, WorkTypeWrapper } from "./styles";

import { HiCode } from "react-icons/hi";
import { SiJavascript } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";

interface WorkTypeData {
  id: number;
  name: string;
  img: React.ReactNode;
  info: string;
}

const types: WorkTypeData[] = [
  {
    id: 1,
    name: "Frontend",
    img: <HiCode />,
    info: "I'm more front end focused and love to work with React.js as well as pure HTML, CSS.",
  },
  {
    id: 2,
    name: "JavaScript",
    img: <SiJavascript />,
    info: "I just extremely love javascript, I can't even express how much I love javascript with just a few lines.",
  },
  {
    id: 3,
    name: "Creative Coding",
    img: <FaPaintBrush />,
    info: "I love creative coding, making beautiful art with code is very satisfying to me. ",
  },
];

interface WorkTypeCardProps {
  type: WorkTypeData;
}

const WorkTypeCard: React.FC<WorkTypeCardProps> = ({ type }) => {
  const { id, name, img, info } = type;

  return (
    <TypeCard>
      <div>{img}</div>
      <h3>{name}</h3>
      <p>{info}</p>
    </TypeCard>
  );
};

const WorkType: React.FC = () => {
  return (
    <WorkTypeWrapper>
      <h2>Things I love</h2>
      <Cards>
        {types.map((type) => (
          <WorkTypeCard type={type} key={type.id} />
        ))}
      </Cards>
    </WorkTypeWrapper>
  );
};

export default WorkType;
