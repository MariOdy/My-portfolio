import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Slide from "./Slide";
import Arrow from "./Arrow";
import { SliderWrapper, Dots, Dot } from "./styles";

import { slides } from "./slides";
import autoSlideMod from "./utils";

import "keen-slider/keen-slider.min.css";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
      created: () => setLoaded(true),
      loop: true,
    },
    [autoSlideMod]
  );

  return (
    <SliderWrapper>
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide) => (
          <Slide slide={slide} key={slide.title} />
        ))}
      </div>

      {/* Arrows */}
      {loaded && instanceRef.current && (
        <>
          <Arrow type="left" onClick={instanceRef.current?.prev} />
          <Arrow type="right" onClick={instanceRef.current?.next} />
        </>
      )}

      {/* Dots */}
      {loaded && instanceRef.current && (
        <Dots>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((i) => (
            <Dot
              key={i}
              onClick={() => instanceRef.current?.moveToIdx(i)}
              data-active={currentSlide === i}
            />
          ))}
        </Dots>
      )}
    </SliderWrapper>
  );
};

export default Slider;
