import React from "react";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";

const OuterWrapper = styled.div`
  background-color: #ff9d3b;
`;
const Wrapper = styled.div`
  padding: 2rem 4rem;
  max-width: 1160px;
  margin: 0 auto;

  @media (max-width: 1023px) {
    padding: 1rem;
  }
  .heading {
    position: relative;
    height: 150px;
    color: white;
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
      color: #ccc;

      @media (max-width: 1023px) {
        font-size: 2rem;
      }
      &:before {
        content: "";
        color: white;
        position: absolute;
        left: -60px;
        top: 40%;
        border: 1px solid white;
        width: 50px;
      }
    }
  }
`;
const ReviewsContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    padding: 0rem;
    flex-direction: column;
  }
  .card {
    margin: 2rem;
    padding: 1rem;
    color: white;

    @media (max-width: 1023px) {
      margin: 1rem 0;
    }

    .text {
      line-height: 2;
      font-size: 1.1rem;
    }
    .who {
      display: flex;
      justify-items: center;
      align-items: center;
      img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        object-position: 50% 0%;
        border-radius: 50%;
        margin-right: 1rem;
      }
      div {
        h1,
        p {
          margin: 0;
        }
      }
    }
  }
`;
const Reviews = () => {
  return (
    <OuterWrapper>
      <Wrapper>
        <div className="heading">
          <p className="upper">
            <b>CLIENT</b> REVIEWS
          </p>
          <p className="lower">
            <b>REVIEWS</b>
          </p>
        </div>
        <ReviewsContainer>
          <div className="card">
            <div id="icon">
              <FaQuoteRight></FaQuoteRight>
            </div>
            <p className="text">
              Polite sadipscing elitr, sed diam is nonumy is eirmod tempor
              invidunt ut labore et dolore magna aliquyam
            </p>
            <div className="who">
              <img src="team1.jpg" alt="img"></img>
              <div>
                <h1>Polite</h1>
                <p>labore</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div id="icon">
              <FaQuoteRight></FaQuoteRight>
            </div>
            <p className="text">
              Polite sadipscing elitr, sed diam is nonumy is eirmod tempor
              invidunt ut labore et dolore magna aliquyam
            </p>
            <div className="who">
              <img src="team2.jpg" alt="img"></img>
              <div>
                <h1>Dolore</h1>
                <p>magna</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div id="icon">
              <FaQuoteRight></FaQuoteRight>
            </div>
            <p className="text">
              Polite sadipscing elitr, sed diam is nonumy is eirmod tempor
              invidunt ut labore et dolore magna aliquyam
            </p>
            <div className="who">
              <img src="team3.jpg" alt="img"></img>
              <div>
                <h1>Tempor</h1>
                <p>elitr</p>
              </div>
            </div>
          </div>
        </ReviewsContainer>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Reviews;
