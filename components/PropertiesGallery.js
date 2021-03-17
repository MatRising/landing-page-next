import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4rem;
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
  transition: 0.5s;
  div {
    margin-top: 2rem;
    transition: 0.5s;
  }
  h2,
  p {
    color: white;
    margin: 0;
    text-align: center;
  }
`;
const Gallery = styled.div`
  padding: 0rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
`;

const Images = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:hover ${Shower} {
    opacity: 1;
    div {
      margin-top: 0rem;
      transition: 0.5s;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PropertiesGallery = () => {
  return (
    <Wrapper>
      <div className="heading">
        <p className="upper">
          <b>OUR</b> PROPERTIES
        </p>
        <p className="lower">
          <b>PROPERTIES</b>
        </p>
      </div>
      <Gallery>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building1.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building2.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building3.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building4.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building5.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building6.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building7.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building8.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building9.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building10.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building11.jpg"></img>
        </Images>
        <Images>
          <Shower>
            <div>
              <h2>ESTATE LAND </h2>
              <p>Property Value - 145$</p>
            </div>
          </Shower>
          <img src="building12.jpg"></img>
        </Images>
      </Gallery>
    </Wrapper>
  );
};

export default PropertiesGallery;
