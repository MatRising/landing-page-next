import React from "react";
import styled from "styled-components";
import {
  FaCloudDownloadAlt,
  FaRegCreditCard,
  FaRecordVinyl,
} from "react-icons/fa";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2rem;
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
    width: 400px;
    .upper {
      font-size: 2rem;
      position: absolute;
      top: 0px;
    }
    .lower {
      font-size: 4rem;
      position: absolute;
      top: 0px;
      left: 60px;
      color: lightgrey;
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
  @media (max-width: 1023px) {
    .heading {
      display: none;
      position: relative;
      height: 150px;
      width: 300px;
      .upper {
        font-size: 2rem;
        position: absolute;
        top: 0px;
      }
      .lower {
        font-size: 4rem;
        position: absolute;
        top: 0px;
        left: 60px;
        color: lightgrey;
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
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  .card {
    width: 30%;
    padding: 1rem;
    @media (max-width: 1023px) {
      width: 100%;
    }
    .logo {
      font-size: 4rem;
      color: ${({ theme }) => theme.colors.green};
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: left;
      align-items: center;
      position: relative;
      &:after {
        content: "";
        color: black;
        position: absolute;
        left: 80px;
        top: calc(50% - 4px);
        border: 1px solid black;
        width: 60px;
      }
    }
    .heading2 {
      font-size: 1rem;
      color: black;
      font-weight: bold;
      margin: 1rem 0;
    }
    .text {
      font-size: 1rem;
      color: black;
    }
    button {
      color: black;
      background: transparent;
      border: 1px solid black;
      padding: 1rem 2rem;
      margin: 1rem 0;

      cursor: pointer;
      :hover {
        color: white;
        border-color: ${({ theme }) => theme.colors.green};
        background-color: ${({ theme }) => theme.colors.green};
        transition: 0.4s;
      }
    }
  }
`;

const QualityServices = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <div className="heading">
          <p className="upper">
            <b>QUALITY</b> SERVICE
          </p>
          <p className="lower">
            <b>SERVICES</b>
          </p>
        </div>
        <CardWrapper>
          <div className="card">
            <div className="logo">
              <FaCloudDownloadAlt></FaCloudDownloadAlt>
            </div>
            <div className="heading2">
              NULLA ETAUGUE EU IPSUM ELIT <br />
              EFFICITUR.
            </div>
            <div className="text">
              Etiam facilisis odio sit amet finibus sollicitudin. Nulla et augue
              eu ipsum efficitur venenatis. Nam vitae viverra turpis. Donec
              ipsum dolor, lacinia eget aliquam eget, ultricies a tortor. Cras
              ultrices, purus nec dignissim faucibus, enim erat sagittis felis,
              rutrum.
            </div>
            <button>Read More</button>
          </div>
          <div className="card">
            <div className="logo">
              <FaRegCreditCard></FaRegCreditCard>
            </div>
            <div className="heading2">
              NULLA ETAUGUE EU IPSUM ELIT <br />
              EFFICITUR.
            </div>
            <div className="text">
              Etiam facilisis odio sit amet finibus sollicitudin. Nulla et augue
              eu ipsum efficitur venenatis. Nam vitae viverra turpis. Donec
              ipsum dolor, lacinia eget aliquam eget, ultricies a tortor. Cras
              ultrices, purus nec dignissim faucibus, enim erat sagittis felis,
              rutrum.
            </div>
            <button>Read More</button>
          </div>
          <div className="card">
            <div className="logo">
              <FaRecordVinyl></FaRecordVinyl>
            </div>
            <div className="heading2">
              NULLA ETAUGUE EU IPSUM ELIT <br />
              EFFICITUR.
            </div>
            <div className="text">
              Etiam facilisis odio sit amet finibus sollicitudin. Nulla et augue
              eu ipsum efficitur venenatis. Nam vitae viverra turpis. Donec
              ipsum dolor, lacinia eget aliquam eget, ultricies a tortor. Cras
              ultrices, purus nec dignissim faucibus, enim erat sagittis felis,
              rutrum.
            </div>
            <button>Read More</button>
          </div>
        </CardWrapper>
      </Wrapper>
    </MainWrapper>
  );
};

export default QualityServices;
