import React from "react";
import styled from "styled-components";
import { BsStar, BsStarFill, BsStarHalf, BsBuilding } from "react-icons/bs";

const Wrapper = styled.div`
  margin: 2rem;
  @media (max-width: 1023px) {
    margin: 0;
  }
  .heading {
    margin: 2rem;
    position: relative;
    height: 150px;
    @media (max-width: 1023px) {
      height: 80px;
    }
    .upper {
      font-size: 2rem;
      position: absolute;
      top: 0px;
      @media (max-width: 1023px) {
        font-size: 1rem;
      }
    }
    .lower {
      font-size: 4rem;
      position: absolute;
      top: 0px;
      left: 60px;
      color: lightgrey;

      @media (max-width: 1023px) {
        font-size: 2rem;
      }
      &:before {
        content: "";
        color: black;
        position: absolute;
        left: -60px;
        top: 40%;
        border: 1px solid black;
        width: 50px;
      }
    }
  }
`;
const CardContainer = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;
const Card = styled.div`
  background-color: ${(props) => props.bgcColor || "crimson"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  transition: transform 0.3s ease-in-out;
  position: relative;
  @media (max-width: 1023px) {
    margin: 2rem 0;
  }
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
  p {
    color: white;
    text-align: center;
  }
  #price-tag {
    color: white;
    font-size: 4rem;
    margin: 0;
  }
  button {
    background-color: white;
    color: black;
    border: 1px solid white;
    padding: 0.8rem 1.4rem;
    font-size: 1.2rem;
    margin: 1rem;

    cursor: pointer;
  }
  .icon {
    position: absolute;
    top: 0;
    transform: translate(0, -50%);
    font-size: 2rem;
    background-color: ${({ theme }) => theme.colors.green};
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: 2px solid white;
  }
`;

const PricingPackages = () => {
  return (
    <Wrapper>
      <div className="heading">
        <p className="upper">
          <b>Pricing</b> Packages
        </p>
        <p className="lower">
          <b>PRICING</b>
        </p>
      </div>
      <CardContainer>
        <Card bgcColor={"#ff6c5f"}>
          <div className="icon">
            <BsBuilding></BsBuilding>
          </div>

          <h1>BASIC</h1>
          <p>Consectetur adipiscing elit. Vivamus ut lacus</p>
          <p id="price-tag">22$</p>

          <p>Localization Features, Adding Policy</p>
          <div className="stars">
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarHalf></BsStarHalf>
            <BsStar></BsStar>
          </div>
          <button>BUY NOW</button>
        </Card>
        <Card bgcColor={"#1cc7d0"}>
          <div className="icon">
            <BsBuilding></BsBuilding>
          </div>
          <h1>PRO</h1>
          <p>Consectetur adipiscing elit. Vivamus ut lacus</p>
          <p id="price-tag">22$</p>
          <p>Localization Features, Adding Policy</p>
          <div className="stars">
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStar></BsStar>
          </div>
          <button>BUY NOW</button>
        </Card>
        <Card bgcColor={"#ff9933"}>
          <div className="icon">
            <BsBuilding></BsBuilding>
          </div>
          <h1>HIGH</h1>
          <p>Consectetur adipiscing elit. Vivamus ut lacus</p>
          <p id="price-tag">22$</p>
          <p>Localization Features, Adding Policy</p>
          <div className="stars">
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
          </div>
          <button>BUY NOW</button>
        </Card>
      </CardContainer>
    </Wrapper>
  );
};

export default PricingPackages;
