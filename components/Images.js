import React from "react";
import Image from "next/image";
import styled from "styled-components";

const OuterWrapper = styled.div`
  margin: 0 auto;
  max-width: 1160px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 1rem;
  }
  .card {
    width: 100%;
    margin: 1rem;
    .img-wrapper {
      width: 100%;
      height: 450px;
      position: relative;
    }
  }
  p {
    font-weight: bold;
  }
`;
const Images = () => {
  return (
    <OuterWrapper>
      <Wrapper>
        <div className="card">
          <div className="img-wrapper">
            <Image src="/building1.jpg" layout="fill" objectFit="cover"></Image>
          </div>
          <p>NULLA ETAUGUE EU IPSUM UT ELITL EFFICITUR.</p>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <Image src="/building2.jpg" layout="fill" objectFit="cover"></Image>
          </div>
          <p>NULLA ETAUGUE EU IPSUM UT ELITL EFFICITUR.</p>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <Image src="/building3.jpg" layout="fill" objectFit="cover"></Image>
          </div>
          <p>NULLA ETAUGUE EU IPSUM UT ELITL EFFICITUR.</p>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <Image src="/building4.jpg" layout="fill" objectFit="cover"></Image>
          </div>
          <p>NULLA ETAUGUE EU IPSUM UT ELITL EFFICITUR.</p>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Images;
