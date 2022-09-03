import React from "react";
import Instagram from "components/buttons/Instagram";
import Slider from "./Slider";
import { Wrapper, Content, Title, Description } from "./styles";

const InstaPromo: React.FC = () => {
  return (
    <Wrapper>
      <Slider />

      <Content>
        <Title>Checkout My Awesome 3d Works 🔥</Title>
        <Description>
          In free time I Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Proin aliquet turpis in leo pharetra, vel maximus nisl faucibus.
          Quisque eget elit a sapien tempor posuere eget eu ipsum. Donec
          tincidunt tellus nec efficitur aliquam. In vehicula lobortis rhoncus.
          Curabitur convallis arcu erat, eget maximus ante convallis ac
        </Description>
        <Instagram />
      </Content>
    </Wrapper>
  );
};

export default InstaPromo;
