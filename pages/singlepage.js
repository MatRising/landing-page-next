import React from "react";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import { FaBath, FaBed, FaBuilding } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { RiMapPin2Fill } from "react-icons/ri";
import Image from "next/image";

const Wrapper = styled.div`
  margin: 4rem;
  @media (min-width: 1921px) {
    max-width: 1920px;
    margin: 0 auto;
  }

  @media (max-width: 1023px) {
    margin: 1rem;
  }
  .heading {
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
        font-size: 1.9rem;
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
const ContentWrapper = styled.div`
  .img-wrapper {
    position: relative;
    width: 100%;
    height: 600px;
    @media (max-width: 1023px) {
      height: 400px;
    }
  }
`;
const InfoContainer = styled.div`
  margin: 1rem 0;
  #icon-pin {
    color: red;
  }
  .features {
    display: flex;
    justify-content: start;
    align-items: center;
    @media (max-width: 1023px) {
      flex-direction: column;
    }
    div {
      margin-right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: crimson;
      font-size: 1.2rem;
      @media (max-width: 1023px) {
        margin: 1rem 0;
      }
      p {
        margin: 0 1rem;
        color: black;
      }
    }
  }
  button {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    padding: 0.8rem 1.4rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    &:hover {
      border-color: ${({ theme }) => theme.colors.green};
      background-color: ${({ theme }) => theme.colors.green};
      color: white;
      transition: 0.4s;
      cursor: pointer;
    }
  }
`;
const singlepage = () => {
  return (
    <>
      <Wrapper>
        <div className="heading">
          <p className="upper">
            <b>PROPERTY</b> DESCRIPTION
          </p>
          <p className="lower">
            <b>DESCRIPTION</b>
          </p>
        </div>
        <ContentWrapper>
          <div className="img-wrapper">
            <Image src="/building6.jpg" objectFit="cover" layout="fill"></Image>
          </div>
          <InfoContainer>
            <div className="features">
              <div>
                <FaBuilding></FaBuilding> <p>2000m^2</p>
              </div>
              <div>
                <FaBed></FaBed>
                <p> 2 Bedrooms</p>
              </div>
              <div>
                <FaBath></FaBath> <p>2 Bathrooms</p>
              </div>
              <div>
                <AiFillCar></AiFillCar>
                <p>1 Car parking</p>
              </div>
            </div>
            <p>
              <span id="icon-pin">
                <RiMapPin2Fill></RiMapPin2Fill>{" "}
              </span>
              <b>Address: </b>Escada Apartments, San Diego, CA 92101
            </p>
            <p style={{ color: "grey", lineHeight: "1.8", fontSize: "1.1rem" }}>
              In consectetur, elit in scelerisque malesuada, tellus leo viverra
              massa, nec malesuada turpis lectus ac urna. Suspendisse ut neque
              orci. dapibus nibh convallis, semper augue.{" "}
              <span style={{ color: "#2dde98" }}>
                Nunc a urna turpis. Aenean vestibulum elementum nisi. Aenean
                aliquet nec mi et lacinia. Aliquam maximus iaculis mi elit in
                scelerisque malesuada, tellus leo viverra massa, sed efficitur
                orci efficitur nec.
              </span>
              In consectetur, elit in scelerisque malesuada, tellus leo viverra
              massa, nec malesuada turpis lectus ac urna. Suspendisse ut neque
              orci. Phasellus tellus diam, pulvinar sit amet elit sit amet,
              fermentum viverra eros. Praesent neque purus, rhoncus nec nibh
              non, mollis sodales odio.
            </p>
            <button>Contact Us</button>
          </InfoContainer>
        </ContentWrapper>
      </Wrapper>
      <Newsletter></Newsletter>
    </>
  );
};

export default singlepage;
