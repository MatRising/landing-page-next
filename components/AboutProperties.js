import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBath, FaBed, FaBuilding } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import Image from "next/image";

const Wrapper = styled.div`
  color: black;
  margin: 4rem 4rem 8rem 4rem;
  @media (max-width: 1023px) {
    margin: 2rem 1rem;
  }
  .heading {
    position: relative;
    height: 150px;
    margin: 2rem 0;
    @media (max-width: 1023px) {
      height: 100px;
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
  .carouselle {
    padding: 1rem;
    margin: 0 2rem;
    height: 50vh;
    position: relative;
    @media (max-width: 1023px) {
      height: 30vh;
    }
    #border-top {
      border-top: 4px solid ${({ theme }) => theme.colors.green};
      background-color: red;
      position: absolute;
      top: -20px;
      left: -20px;
      right: 50px;
    }
    #border-left {
      border-left: 4px solid ${({ theme }) => theme.colors.green};
      background-color: red;
      position: absolute;
      top: -20px;
      bottom: 50px;
      left: -20px;
    }
  }
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 80%;
    transform: translate(0, -50%);
    padding: 0.5rem 1rem;
    width: auto;
    color: white;
    font-weight: bold;
    font-size: 3rem;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .prev {
    left: 20px;
    border-radius: 3px 0 0 3px;
  }
  .next {
    right: 20px;
    border-radius: 3px 0 0 3px;
  }
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;
const InfoContainer = styled.div`
  margin: 0 3rem;
  @media (max-width: 1023px) {
    margin: 0 1rem;
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
const AboutProperties = () => {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const slider = setInterval(() => {
      setSlide((prevSlide) => (prevSlide >= 3 ? 1 : prevSlide + 1));
    }, 6000);
    return () => {
      clearInterval(slider);
    };
  }, []);

  return (
    <Wrapper>
      <div className="heading">
        <p className="upper">
          <b>ABOUT</b> OUR PROPERTIES
        </p>
        <p className="lower">
          <b>PROPERTIES</b>
        </p>
      </div>
      <div className="carouselle">
        <div id="border-top"></div>
        <div id="border-left"></div>

        {slide === 1 && (
          <Image
            className="fade"
            src="/building1.jpg"
            layout="fill"
            objectFit="cover"
          />
        )}
        {slide === 2 && (
          <Image
            className="fade"
            src="/building2.jpg"
            layout="fill"
            objectFit="cover"
          />
        )}
        {slide === 3 && (
          <Image
            className="fade"
            src="/building3.jpg"
            layout="fill"
            objectFit="cover"
          />
        )}

        <a
          className="prev"
          onClick={() => {
            slide <= 1 ? setSlide(3) : setSlide(slide - 1);
          }}
        >
          &#10094;
        </a>
        <a
          className="next"
          onClick={() => {
            slide >= 3 ? setSlide(1) : setSlide(slide + 1);
          }}
        >
          &#10095;
        </a>
      </div>
      <InfoContainer>
        <h2>Property Value - 215$</h2>
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
        <p style={{ color: "grey", lineHeight: "1.8", fontSize: "1.1rem" }}>
          Maecenas quis neque libero. Class aptent taciti. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Pellentesque convallis diam
          consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra
          pharetra sem, eget pulvinar neque pharetra ac.
        </p>
        <button>Read More</button>
      </InfoContainer>
    </Wrapper>
  );
};

export default AboutProperties;
