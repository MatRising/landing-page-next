import React from "react";
import styled from "styled-components";
import QualityServices from "../components/QualityServices";
import Reviews from "../components/Reviews";
import Team from "../components/Team";
import Newsletter from "../components/Newsletter";

const Wrapper = styled.div`
  padding: 0rem;
`;

const services = () => {
  return (
    <Wrapper>
      <QualityServices></QualityServices>
      <Reviews></Reviews>
      <Team></Team>
      <Newsletter></Newsletter>
    </Wrapper>
  );
};

export default services;
