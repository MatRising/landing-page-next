import React from "react";
import styled from "styled-components";
import { FaMedal } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  height: 45vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.green};
  @media (max-width: 1023px) {
    height: 100%;
  }
`;
const ContactInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 2rem;
  height: 100%;
  width: 65vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.5rem;
  @media (max-width: 1023px) {
    background-color: #5c5c5c;
    position: static;
    padding: 0;
    min-height: 500px;
    width: 100vw;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding-bottom: 2rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 20% 1fr 20%;
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 2rem;
    grid-gap: 0;
  }

  @media (max-width: 420px) {
    grid-template-columns: 5% 1fr 5%;
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 2rem;
  }
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    @media (max-width: 1023px) {
      padding: 0 2rem;
    }
    @media (max-width: 600px) {
      padding: 1rem 0;
      grid-column: 2/3;
    }
    h2 {
      margin: 0;
      color: white;
      display: flex;
      justify-content: left;
      align-items: center;
      span {
        margin-left: 0.5rem;
      }
    }
    p {
      margin: 0;
      color: lightgrey;
    }
  }
`;
const Maps = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  @media (max-width: 1023px) {
    width: 100%;
    height: 400px;
  }
`;

const GoogleMaps = () => {
  return (
    <Wrapper>
      <ContactInfo>
        <div>
          <h2>
            <FaMedal></FaMedal>
            <span>Head Quarters</span>
          </h2>
          <p> 234H Berlin street.</p>
          <p> Caldin Merid, HC 0096</p>
          <p> info@example.com</p>
        </div>
        <div>
          <h2>
            <FaMedal></FaMedal>
            <span>Sales</span>
          </h2>
          <p>Hitachi estate group </p>
          <p>BH Developers </p>
          <p>info@example.com </p>
        </div>
        <div>
          <h2>
            <FaMedal></FaMedal>
            <span>Social</span>
          </h2>
          <p> Facebook</p>
          <p> Twitter</p>
          <p> Linked-in</p>
        </div>
        <div>
          <h2>
            <FaMedal></FaMedal>
            <span>Careers</span>
          </h2>
          <p> Sales executive</p>
          <p>Marketing manager </p>
          <p>Senior executive </p>
        </div>
        <div>
          <h2>
            <FaMedal></FaMedal>
            <span> Contact Numbers</span>
          </h2>
          <p> +12 782 868 2234</p>
          <p>+12 782 868 2234 </p>
          <p> +12 782 868 2234</p>
        </div>
      </ContactInfo>
      <Maps src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d100872.27109690181!2d-122.24919009469352!3d37.80741437691251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1615476054000!5m2!1spl!2spl"></Maps>
    </Wrapper>
  );
};

export default GoogleMaps;
