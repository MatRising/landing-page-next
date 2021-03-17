import React from "react";
import Link from "next/link";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #131313;
  padding: 2rem;

  @media (max-width: 1023px) {
    padding: 1rem;
  }
`;
const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;
const MyLink = styled.a`
  text-decoration: none;
  color: lightgrey;
  margin: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    color: white;
    transition: all 0.5s;
  }
`;
const LinksWrapper = styled.div`
  margin: 2rem;
`;
const Links = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
  .linkerino {
    width: 20%;
    margin: 1rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 1023px) {
      width: 100%;
      margin: 0rem;
      &:nth-child(1) {
        grid-column: 1 / 3;
        grid-row: 1/2;
      }
    }
    h1 {
      font-size: 1.4rem;
      color: white;
      @media (max-width: 375px) {
        font-size: 1.1rem;
      }
    }
    p {
      line-height: 1.4;
      color: grey;
    }
    a {
      color: grey;
      line-height: 2;
      cursor: pointer;
      &:hover {
        color: lightgrey;
        transition: all 0.5s;
      }
    }
  }
`;
const Stopper = styled.div`
  height: 1px;
  background-color: grey;
  margin: 0 auto;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Navbar>
        <Link href="/">
          <MyLink>Home</MyLink>
        </Link>
        <Link href="/about">
          <MyLink>About</MyLink>
        </Link>
        <Link href="/services">
          <MyLink>Services</MyLink>
        </Link>
        <Link href="/properties">
          <MyLink>Properties</MyLink>
        </Link>
        <Link href="/singlepage">
          <MyLink>Pages</MyLink>
        </Link>
        <Link href="/contact">
          <MyLink>Contact</MyLink>
        </Link>
      </Navbar>
      <LinksWrapper>
        <Stopper></Stopper>
        <Links>
          <div className="linkerino">
            <h1 style={{ fontSize: "1.7rem", marginBottom: "0px" }}>
              ESTATE LAND
            </h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              atus error sit volupt unde.
            </p>
          </div>
          <div className="linkerino">
            <h1>PARTNERS</h1>
            <a>Estete Group</a>
            <a>Developers</a>
            <a>Builders</a>
            <a> Constructors</a>
          </div>
          <div className="linkerino">
            <h1>ABOPUT US</h1>
            <a>History</a>
            <a>Term Of Use</a>
            <a>Privacy Policy</a>
            <a> Blog</a>
          </div>
          <div className="linkerino">
            <h1>SUPPORT</h1>
            <a>24/7 Service</a>
            <a>FAQ</a>
            <a>Media</a>
          </div>
          <div className="linkerino">
            <h1>NEED HELP?</h1>
            <a>Contact Us</a>
            <a>Knowledge Base</a>
            <a>Pdf Document</a>
          </div>
        </Links>
        <Stopper></Stopper>
      </LinksWrapper>
      <p style={{ color: "white", display: "flex", justifyContent: "center" }}>
        Design by W3layouts
      </p>
    </FooterWrapper>
  );
};

export default Footer;
