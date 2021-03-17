import React from "react";
import styled from "styled-components";

const NewsletterWrapper = styled.div`
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
  }
  h1 {
    color: white;
  }
  input {
    border: 1px solid white;
    width: 350px;
    padding: 1rem;
    font-size: 1rem;
    background: transparent;
    color: white;

    @media (max-width: 1023px) {
      width: 200px;
      margin: 1rem 0;
    }
    &::placeholder {
      color: white;
      font-size: 1rem;
    }
  }
  button {
    color: ${({ theme }) => theme.colors.green};
    background: white;
    border: 1px solid white;
    padding: 1rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    :hover {
      color: white;
      border-color: black;
      background-color: black;
      transition: 0.4s;
    }
  }
`;
const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <h1>Sing up for Newsletter!</h1>
      <div>
        <input placeholder="Enter your email..."></input>
        <button>SUBMIT</button>
      </div>
    </NewsletterWrapper>
  );
};

export default Newsletter;
