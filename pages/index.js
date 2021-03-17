import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Images from "../components/Images";
import Newsletter from "../components/Newsletter";
import QualityServices from "../components/QualityServices";
import Team from "../components/Team";

const Wrapper = styled.div`
  background-color: white;
`;
const GetStarted = styled.div`
  padding: 1rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: lightgrey;
    font-size: 2rem;
    text-align: center;
  }
  button {
    color: ${({ theme }) => theme.colors.green};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.green};
    padding: 1rem 2rem;
    margin: 1rem;
    cursor: pointer;
    &:hover {
      color: white;
      border-color: ${({ theme }) => theme.colors.green};
      background-color: ${({ theme }) => theme.colors.green};
      transition: 0.4s;
    }
  }
`;

const index = () => {
  return (
    <Wrapper>
      <About>a</About>
      <GetStarted>
        <p>
          OUR ESTATE LAND BUSINESS HAS INTRODUCED<br></br>
          NEW TECHNOLOGY TO REAL ESTATE
        </p>
        <button>Get Started</button>
      </GetStarted>
      <QualityServices></QualityServices>
      <Images></Images>
      <Team></Team>
      <Newsletter></Newsletter>
    </Wrapper>
  );
};

export default index;
