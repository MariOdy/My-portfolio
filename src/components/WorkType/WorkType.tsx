import React from "react";
import { HiCode } from "react-icons/hi";
import { SiJavascript } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import { ParallaxBanner } from "react-scroll-parallax";
import { WorkTypeWrapper, Content, Cards, TypeCard } from "./styles";

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
  const { name, img, info } = type;

  return (
    <TypeCard>
      <div>{img}</div>
      <h3>{name}</h3>
      <p>{info}</p>
    </TypeCard>
  );
};

const layers = [{ image: "/images/parallax.png", speed: -25 }];

const WorkType: React.FC = () => (
  <WorkTypeWrapper id="skills">
    <ParallaxBanner layers={layers} className="parallax-banner">
      <Content>
        <h2>Things I love</h2>
        <Cards>
          {types.map((type) => (
            <WorkTypeCard type={type} key={type.id} />
          ))}
        </Cards>
      </Content>
    </ParallaxBanner>
  </WorkTypeWrapper>
);

export default WorkType;
