import React from "react";
import { ISlide } from "./slides";
import { ProjectWrapper, Thumbnail } from "./styles";

interface SlideProps {
  slide: ISlide;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  if (!slide) return null;

  const { title, url, thumbnail } = slide;

  return (
    <ProjectWrapper
      href={url}
      target="_blank"
      rel="noreferrer"
      className="keen-slider__slide"
    >
      <Thumbnail src={thumbnail} alt={title || ""} />
    </ProjectWrapper>
  );
};

export default Slide;
