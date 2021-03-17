import React from "react";
import styled from "styled-components";
import AboutProperties from "../components/AboutProperties";
import FloorPlans from "../components/FloorPlans";
import Newsletter from "../components/Newsletter";
import PricingPackages from "../components/PricingPackages";

const Wrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
`;

const about = () => {
  return (
    <>
      <Wrapper>
        <AboutProperties></AboutProperties>
        <FloorPlans></FloorPlans>
        <PricingPackages></PricingPackages>
      </Wrapper>
      <Newsletter></Newsletter>
    </>
  );
};

export default about;
