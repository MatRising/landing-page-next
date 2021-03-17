import React from "react";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import PropertiesGallery from "../components/PropertiesGallery";

const Wrapper = styled.div`
  padding: 0rem;
`;
const properties = () => {
  return (
    <Wrapper>
      <PropertiesGallery></PropertiesGallery>
      <Newsletter></Newsletter>
    </Wrapper>
  );
};

export default properties;
