import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 0 1rem;
  }
  .plan {
    width: 50%;
    margin-right: 1rem;
    @media (max-width: 1023px) {
      width: 100%;
      margin: 1rem;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    width: 50%;
    margin: 2rem;
    @media (max-width: 1023px) {
      width: 100%;
      margin: 1rem;
    }
    #title {
      position: relative;
      @media (min-width: 425px) {
        &:after {
          content: "";
          color: black;
          position: absolute;
          left: 0%;
          top: 50px;
          border: 1px solid black;
          width: 100px;
        }
      }
    }
    p {
      color: grey;
      font-size: 1.1rem;
      line-height: 1.6;
    }
    button {
      background-color: transparent;
      position: relative;
      color: black;
      border: 1px solid black;
      padding: 0.8rem 1.4rem;
      font-size: 1.2rem;
      cursor: pointer;
      :hover {
        color: white;
        border-color: ${({ theme }) => theme.colors.green};
        background-color: ${({ theme }) => theme.colors.green};
        transition: 0.4s;
      }
    }
  }
  .numbers {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
      flex-direction: column;
    }
    .cell {
      margin: 0 1rem;
      h1 {
        text-align: center;
        font-size: 3rem;
        margin: 2rem 0px 0px 0px;
        color: ${({ theme }) => theme.colors.green};
      }
      p {
        text-align: center;
        margin: 0px;
      }
    }
  }
`;
const FloorPlans = () => {
  return (
    <Wrapper>
      <div className="plan">
        <img src="/plan.jpg"></img>
      </div>
      <div className="content">
        <h1 id="title">CERTIFIED FLOOR PLANS</h1>
        <p>
          Maecenas quis neque libero. Class aptent taciti. Lorem ipsum dolor sit
          amet, elit consectetur elit. Pellentesque convallis diam consequat
          magna vulputate malesuada. Cras a ornare elit. Nulla ipsum dolor sit.
        </p>
        <button>Learn More</button>
        <div className="numbers">
          <div className="cell">
            <h1>125</h1>
            <p>Locations</p>
          </div>
          <div className="cell">
            <h1>330</h1>
            <p>Properties</p>
          </div>
          <div className="cell">
            <h1>542</h1>
            <p>Constructions</p>
          </div>
          <div className="cell">
            <h1>222</h1>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FloorPlans;
