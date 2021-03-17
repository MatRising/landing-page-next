import React from "react";
import styled from "styled-components";
import GoogleMaps from "../components/GoogleMaps";
import Newsletter from "../components/Newsletter";

const OuterWrapper = styled.div`
  margin: 0 auto;
  max-width: 1160px;
`;
const Wrapper = styled.div`
  padding: 4rem 8rem;

  @media (max-width: 1023px) {
    padding: 3rem 1rem;
  }
  .heading {
    position: relative;
    height: 150px;
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
  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 1rem;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, 1fr);
    }
    input,
    textarea {
      background: transparent;
      text-decoration: none;
      padding: 1rem;
      font-size: 1.1rem;
      border: none;
      border-bottom: 1px solid grey;
    }
    textarea {
      grid-row: 3/6;
      grid-column: 1/3;
      resize: none;
      @media (max-width: 1023px) {
        grid-row: 5/9;
        grid-column: 1/2;
      }
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.green};
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.green};
    padding: 0.8rem 1.4rem;
    font-size: 1.2rem;
    margin: 1rem;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      border-color: black;
      color: black;
      transition: all 0.4s;
    }
  }
`;

const contact = () => {
  return (
    <>
      <OuterWrapper>
        <Wrapper>
          <div className="heading">
            <p className="upper">
              <b>Contact</b> Us
            </p>
            <p className="lower">
              <b>CONTACT</b>
            </p>
          </div>
          <div className="form">
            <input placeholder="First Name"></input>
            <input placeholder="Last Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Subject"></input>
            <textarea placeholder="Your Message" rows={4}></textarea>
          </div>
          <button>Send Message</button>
        </Wrapper>
      </OuterWrapper>
      <GoogleMaps></GoogleMaps>
      <Newsletter></Newsletter>
    </>
  );
};

export default contact;
