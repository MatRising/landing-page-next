import React from "react";
import styled from "styled-components";
import { FaMedal, FaSuitcase, FaRegMoneyBillAlt } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GiBigWave } from "react-icons/gi";

const Gimmick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2rem 0;
`;
const Wrapper = styled.div`
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1160px;
  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 0;
  }
  .text {
    line-height: 1.6;
    font-size: 1.1rem;
  }
  .left {
    width: 40%;
    padding: 1rem;
    margin-right: 1rem;
    @media (max-width: 1023px) {
      width: 100%;
      margin: 0rem;
      padding: 0;
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
          font-size: 2rem;
        }
        @media (min-width: 1024px) {
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
    }

    .certificat {
      display: flex;
      justify-content: left;
      align-items: center;
      font-size: 6rem;
      color: crimson;
      p {
        font-size: 1.2rem;
        font-weight: bold;
        color: black;
      }
    }
  }
  .right {
    width: 60%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-columns: 50% 50%;
    grid-gap: 1rem;
    @media (max-width: 1023px) {
      width: 100%;
      grid-template-columns: 100%;
      grid-template-columns: 100%;
      margin-top: 2rem;
    }
    .card {
      padding: 5px;
      .icon {
        font-size: 3rem;
        display: flex;
        justify-content: left;
        align-items: center;
      }
      .title {
        margin: 1rem 0;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }
`;
const About = () => {
  return (
    <Gimmick>
      <Wrapper>
        <div className="left">
          <div className="heading">
            <p className="upper">
              <b>ABOUT</b> US
            </p>
            <p className="lower">
              <b>HISTORY</b>
            </p>
          </div>
          <p className="text">
            Etiam facilisis odio sit amet finibus sollicitudin. Nulla et augue
            eu ipsum efficitur venenatis. Nam vitae viverra turpis. Donec ipsum
            dolor, lacinia eget aliquam eget, ultricies a tortor. Cras ultrices,
            purus nec dignissim faucibus, enim erat sagittis felis, rutrum.
          </p>
          <div className="certificat">
            <FaMedal /> <p>Certified Company</p>
          </div>
        </div>
        <div className="right">
          <div className="card">
            <div className="icon" style={{ color: "#0099e5" }}>
              <BsPeopleFill></BsPeopleFill>
            </div>
            <div className="title">PROFESSIONALS</div>
            <div className="text">
              Etiam facilisis odio sit amet finibus sollicitudin. Nulla et augue
              eu ipsum efficitur venenatis.
            </div>
          </div>
          <div className="card">
            <div className="icon" style={{ color: "#2dde98" }}>
              <FaSuitcase></FaSuitcase>
            </div>
            <div className="title">BUSINESS OWNERS</div>
            <div className="text">
              Etiam facilisis odio sit amet finibus sollicitudin. Nulla et augue
              eu ipsum efficitur venenatis.
            </div>
          </div>
          <div className="card">
            <div className="icon" style={{ color: "crimson" }}>
              <GiBigWave></GiBigWave>
            </div>
            <div className="title">SUPERIOR SERVICE</div>
            <div className="text">
              Etiam facilisis odio sit amet finibus sollicitudin. Nulla et augue
              eu ipsum efficitur venenatis.
            </div>
          </div>
          <div className="card">
            <div className="icon" style={{ color: "orange" }}>
              <FaRegMoneyBillAlt></FaRegMoneyBillAlt>
            </div>
            <div className="title">CASH & CREDIT</div>
            <div className="text">
              Etiam facilisis odio sit amet finibus sollicitudin. Nulla et augue
              eu ipsum efficitur venenatis.
            </div>
          </div>
        </div>
      </Wrapper>
    </Gimmick>
  );
};

export default About;
