import React from "react";
import Instagram from "components/buttons/Instagram";
import Slider from "./Slider";
import { Wrapper, Content, Title, Description, SliderColumn } from "./styles";

const InstaPromo: React.FC = () => (
  <Wrapper>
    <SliderColumn>
      <Slider />
    </SliderColumn>

    <Content>
      <Title>Checkout My Awesome 3d Works 🔥</Title>
      <Description>
        In my free time I like to learn something new and improve my skills in
        what I already know. 3D designs are a great way for me to relax and
        create something beautiful. The play of colors, light and details allows
        me to portray an idea as I see it, even if it turns out to be more
        complicated than I thought.
      </Description>
      <Instagram />
    </Content>
  </Wrapper>
);

export default InstaPromo;
