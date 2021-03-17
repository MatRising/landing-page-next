import React from "react";
import styled from "styled-components";
import About from "../components/About";
import PropertyCards from "../components/PropertyCards";
import Team from "../components/Team";
import Newsletter from "../components/Newsletter";

const Wrapper = styled.div`
  padding: 2rem;
`;
const history = () => {
  return (
    <>
      <Wrapper>
        <About></About>
        <PropertyCards></PropertyCards>
        <Team></Team>
      </Wrapper>
      <Newsletter></Newsletter>
    </>
  );
};

export default history;
