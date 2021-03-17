import React from "react";
import styled from "styled-components";
import { FaBath, FaBed, FaBuilding } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import Image from "next/image";

const Wrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
    margin: 0;
  }
`;
const Shower = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(0.5) rotateY(-180deg);
  transition: 0.5s;
  button {
    color: black;
    background: white;
    border: 1px solid white;
    padding: 1rem 2rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;
const Card = styled.div`
  margin: 1rem;
  width: 25%;

  @media (max-width: 1023px) {
    width: 100%;
    margin: 2rem 0;
  }

  .img-wrapper {
    position: relative;
    width: 100%;
    height: 300px;
    &:hover ${Shower} {
      opacity: 1;
      transform: scale(1) rotateY(0deg);
      transition: 0.5;
    }
  }
  .flexit {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    background-color: ${({ theme }) => theme.colors.green};
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin-left: 0.2rem;
      }
    }
  }
  .tag-wrap {
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .price-tag {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
const PropertyCards = () => {
  return (
    <Wrapper>
      <Card>
        <div className="img-wrapper">
          <Shower>
            <button>Know More</button>
          </Shower>
          <Image src="/building6.jpg" layout="fill" objectFit="cover"></Image>
        </div>
        <div className="flexit">
          <div>
            <FaBuilding></FaBuilding> <p>200m^2</p>
          </div>
          <div>
            <FaBed></FaBed>
            <p>2</p>
          </div>
          <div>
            <FaBath></FaBath> <p>2</p>
          </div>
          <div>
            <AiFillCar></AiFillCar>
            <p>1</p>
          </div>
        </div>
        <div className="tag-wrap">
          <p>
            <b>PROPERY VALUE</b>
          </p>
          <p className="price-tag">$960</p>
        </div>
      </Card>
      <Card>
        <div className="img-wrapper">
          <Shower>
            <button>Know More</button>
          </Shower>
          <Image src="/building7.jpg" layout="fill" objectFit="cover"></Image>
        </div>
        <div className="flexit">
          <div>
            <FaBuilding></FaBuilding> <p>200m^2</p>
          </div>
          <div>
            <FaBed></FaBed>
            <p>2</p>
          </div>
          <div>
            <FaBath></FaBath> <p>2</p>
          </div>
          <div>
            <AiFillCar></AiFillCar>
            <p>1</p>
          </div>
        </div>
        <div className="tag-wrap">
          <p>
            <b>PROPERY VALUE</b>
          </p>
          <p className="price-tag">$960</p>
        </div>
      </Card>
      <Card>
        <div className="img-wrapper">
          <Shower>
            <button>Know More</button>
          </Shower>
          <Image src="/building8.jpg" layout="fill" objectFit="cover"></Image>
        </div>
        <div className="flexit">
          <div>
            <FaBuilding></FaBuilding> <p>200m^2</p>
          </div>
          <div>
            <FaBed></FaBed>
            <p>2</p>
          </div>
          <div>
            <FaBath></FaBath> <p>2</p>
          </div>
          <div>
            <AiFillCar></AiFillCar>
            <p>1</p>
          </div>
        </div>
        <div className="tag-wrap">
          <p>
            <b>PROPERY VALUE</b>
          </p>
          <p className="price-tag">$960</p>
        </div>
      </Card>
      <Card>
        <div className="img-wrapper">
          <Shower>
            <button>Know More</button>
          </Shower>
          <Image src="/building9.jpg" layout="fill" objectFit="cover"></Image>
        </div>
        <div className="flexit">
          <div>
            <FaBuilding></FaBuilding> <p>200m^2</p>
          </div>
          <div>
            <FaBed></FaBed>
            <p>2</p>
          </div>
          <div>
            <FaBath></FaBath> <p>2</p>
          </div>
          <div>
            <AiFillCar></AiFillCar>
            <p>1</p>
          </div>
        </div>
        <div className="tag-wrap">
          <p>
            <b>PROPERY VALUE</b>
          </p>
          <p className="price-tag">$960</p>
        </div>
      </Card>
    </Wrapper>
  );
};

export default PropertyCards;
