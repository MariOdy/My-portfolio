import React from "react";
import { Wrapper, ThumbnailLink, Thumbnail, Content, Title } from "./styles";

const InstaPromo: React.FC = () => {
  return (
    <Wrapper>
      <ThumbnailLink
        href="https://www.instagram.com/just.tendril/"
        target="_blank"
        rel="noreferrer"
      >
        <Thumbnail src="/images/3d-render.jpeg" alt="" />
      </ThumbnailLink>

      <Content>
        <Title>Checkout My 3d Works</Title>
      </Content>
    </Wrapper>
  );
};

export default InstaPromo;
