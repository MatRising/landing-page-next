import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineWifi,
} from "react-icons/ai";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2rem;

  @media (max-width: 1023px) {
    padding: 0 1rem;
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
  justify-content: space-evenly;
  align-items: flex-end;
  opacity: 0;
  transition: 0.5s;
  .icon-wrap {
    cursor: pointer;
    border: 1px solid white;
    color: white;
    padding: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.5s;
  }
`;
const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
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

  .team-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
      flex-direction: column;
    }
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 1rem;
      &:hover ${Shower} {
        opacity: 1;
        transition: 0.5s;
        .icon-wrap {
          opacity: 1;
          margin-bottom: 3rem;
        }
      }

      .img-wrap {
        width: 100%;
        height: 300px;
        position: relative;
      }
    }
    h1 {
      font-size: 1.2rem;
      margin: 1rem 0 0 0;
    }
  }
`;

const Team = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <div className="heading">
          <p className="upper">
            <b>QUALITY</b> TEAM
          </p>
          <p className="lower">
            <b>TEAM</b>
          </p>
        </div>
        <div className="team-wrapper">
          <div className="card">
            <div className="img-wrap">
              <Shower>
                <div className="icon-wrap">
                  <AiFillFacebook></AiFillFacebook>
                </div>
                <div className="icon-wrap">
                  <AiOutlineTwitter></AiOutlineTwitter>
                </div>
                <div className="icon-wrap">
                  <AiOutlineWifi></AiOutlineWifi>
                </div>
              </Shower>
              <Image src="/team1.jpg" layout="fill" objectFit="cover"></Image>
            </div>
            <h1>NULLA</h1>
            <p>General Manager</p>
          </div>
          <div className="card">
            <div className="img-wrap">
              <Shower>
                <div className="icon-wrap">
                  <AiFillFacebook></AiFillFacebook>
                </div>
                <div className="icon-wrap">
                  <AiOutlineTwitter></AiOutlineTwitter>
                </div>
                <div className="icon-wrap">
                  <AiOutlineWifi></AiOutlineWifi>
                </div>
              </Shower>
              <Image
                src="/team2.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
              ></Image>
            </div>
            <h1>ETAUGUE</h1>
            <p>General Manager</p>
          </div>
          <div className="card">
            <div className="img-wrap">
              <Shower>
                <div className="icon-wrap">
                  <AiFillFacebook></AiFillFacebook>
                </div>
                <div className="icon-wrap">
                  <AiOutlineTwitter></AiOutlineTwitter>
                </div>
                <div className="icon-wrap">
                  <AiOutlineWifi></AiOutlineWifi>
                </div>
              </Shower>
              <Image
                src="/team3.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
              ></Image>
            </div>
            <h1>IPSUM</h1>
            <p>General Manager</p>
          </div>
          <div className="card">
            <div className="img-wrap">
              <Shower>
                <div className="icon-wrap">
                  <AiFillFacebook></AiFillFacebook>
                </div>
                <div className="icon-wrap">
                  <AiOutlineTwitter></AiOutlineTwitter>
                </div>
                <div className="icon-wrap">
                  <AiOutlineWifi></AiOutlineWifi>
                </div>
              </Shower>
              <Image
                src="/team4.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
              ></Image>
            </div>
            <h1>EFFICITUR</h1>
            <p>General Manager</p>
          </div>
        </div>
      </Wrapper>
    </MainWrapper>
  );
};

export default Team;
