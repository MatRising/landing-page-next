import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { GiLighthouse } from "react-icons/gi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useRouter } from "next/router";
import { HamburgerContext } from "../context/HamburgerContext";

const MainWrapper = styled.div`
  background: url(${(props) => props.background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  transition: background-image 0.5s;
  padding: 2rem 0 5rem 0;
`;
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 3rem 2rem 3rem;
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.colors.green};
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  @media (min-width: 1024px) {
    border: 2px solid ${({ theme }) => theme.colors.green};
    &:after {
      content: "Real ipsum";
      color: ${({ theme }) => theme.colors.green};
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      top: 55px;
      width: 100px;
      font-size: 1.2rem;
    }
  }
`;
const Navbar = styled.div`
  color: white;
`;
const MyLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 10px;
  padding: 10px;
  font-size: 1.2rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    border: 1px solid white;
    transition: 0.4s;
  }
`;
const HomeContent = styled.div`
  height: 400px;
  padding: 2rem 5rem;
  @media (max-width: 1024px) {
    padding: 2rem 1rem;
  }
`;
const Title = styled.h1`
  font-size: 4rem;
  color: white;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
`;
const Button = styled.button`
  background-color: transparent;
  position: relative;
  color: white;
  border: 1px solid white;
  padding: 0.8rem 1.4rem;
  font-size: 1.2rem;
  &:hover {
    border-color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.green};
    transition: 0.4s;
    cursor: pointer;
  }
  &:after {
    content: "";
    color: white;
    position: absolute;
    left: 110%;
    top: calc(50% - 2px);
    border: 1px solid white;
    width: 100px;
  }
`;
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer;
`;
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover ${DropdownContent} {
    display: block;
    cursor: pointer;
  }
  .dropdown-btn {
    text-decoration: none;
    color: white;
    margin: 10px;
    padding: 8px 10px;
    border: 1px solid transparent;
    font-size: 1.2rem;
    transition: 0.4s;
    &:hover {
      border: 1px solid white;
      transition: 0.4s;
    }
  }
`;
const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: lightgrey;
  }
`;
const Hamburger = styled.div`
  border: 2px solid transparent;
  padding: 0.2rem 0.4rem;
  display: ${(props) => (props.display ? "none" : "block")};
  &:hover {
    border: 2px solid white;
    cursor: pointer;
  }
  div {
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
  }
`;
const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CloseMenu = styled.div`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  margin-bottom: 1rem;
`;
const Nav = () => {
  const { isMobile, isOpen, setisOpen } = useContext(HamburgerContext);
  const [slide, setSlide] = useState(1);
  useEffect(() => {
    const slider = setInterval(() => {
      setSlide((prevSlide) => (prevSlide >= 3 ? 1 : prevSlide + 1));
    }, 6000);
    return () => {
      clearInterval(slider);
    };
  }, []);
  const router = useRouter();
  if (router.pathname == "/") {
    return (
      <MainWrapper background={`house${slide}.jpg`}>
        <NavbarWrapper>
          {isMobile ? (
            <>
              <Logo>
                <GiLighthouse />
              </Logo>
              <Backdrop display={isOpen}>
                <CloseMenu onClick={() => setisOpen(false)}>X</CloseMenu>
                <Link href="/">
                  <MyLink
                    onClick={() => setisOpen(false)}
                    style={{
                      border: router.pathname == "/" ? "1px solid white" : "",
                    }}
                  >
                    Home
                  </MyLink>
                </Link>
                <Link href="/about">
                  <MyLink onClick={() => setisOpen(false)}>About</MyLink>
                </Link>
                <Link href="/services">
                  <MyLink onClick={() => setisOpen(false)}>Services</MyLink>
                </Link>
                <Link href="/properties">
                  <MyLink onClick={() => setisOpen(false)}>Properties</MyLink>
                </Link>
                <Dropdown>
                  <div className="dropdown-btn">
                    Pages <AiOutlineArrowDown></AiOutlineArrowDown>
                  </div>
                  <DropdownContent>
                    <Link href="/singlepage">
                      <DropdownLink onClick={() => setisOpen(false)}>
                        Single Page
                      </DropdownLink>
                    </Link>
                    <Link href="/history">
                      <DropdownLink onClick={() => setisOpen(false)}>
                        History
                      </DropdownLink>
                    </Link>
                  </DropdownContent>
                </Dropdown>
                <Link href="/contact">
                  <MyLink onClick={() => setisOpen(false)}>Contact</MyLink>
                </Link>
              </Backdrop>
              <Hamburger onClick={() => setisOpen(true)} display={isOpen}>
                <div></div>
                <div></div>
                <div></div>
              </Hamburger>
            </>
          ) : (
            <>
              <Logo>
                <div style={{ marginRight: "15px" }}>LOGO IPS</div>
                <GiLighthouse />
              </Logo>
              <Navbar>
                <Link href="/">
                  <MyLink
                    style={{
                      border: router.pathname == "/" ? "1px solid white" : "",
                    }}
                  >
                    Home
                  </MyLink>
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
                <Dropdown>
                  <div className="dropdown-btn">
                    Pages <AiOutlineArrowDown></AiOutlineArrowDown>
                  </div>
                  <DropdownContent>
                    <Link href="/singlepage">
                      <DropdownLink>Single Page</DropdownLink>
                    </Link>
                    <Link href="/history">
                      <DropdownLink>History</DropdownLink>
                    </Link>
                  </DropdownContent>
                </Dropdown>
                <Link href="/contact">
                  <MyLink>Contact</MyLink>
                </Link>
              </Navbar>
            </>
          )}
        </NavbarWrapper>
        <HomeContent>
          <Title>
            Lorem ipsum
            <br /> dolor sit
          </Title>
          <Button>Read More</Button>
        </HomeContent>
      </MainWrapper>
    );
  } else {
    return (
      <MainWrapper background={"house1.jpg"}>
        <NavbarWrapper>
          {isMobile ? (
            <>
              <Logo>
                <GiLighthouse />
              </Logo>
              <Backdrop display={isOpen}>
                <CloseMenu onClick={() => setisOpen(false)}>X</CloseMenu>
                <Link href="/">
                  <MyLink
                    onClick={() => setisOpen(false)}
                    style={{
                      border: router.pathname == "/" ? "1px solid white" : "",
                    }}
                  >
                    Home
                  </MyLink>
                </Link>
                <Link href="/about">
                  <MyLink
                    style={{
                      border:
                        router.pathname == "/about" ? "1px solid white" : "",
                    }}
                    onClick={() => setisOpen(false)}
                  >
                    About
                  </MyLink>
                </Link>
                <Link href="/services">
                  <MyLink
                    style={{
                      border:
                        router.pathname == "/services" ? "1px solid white" : "",
                    }}
                    onClick={() => setisOpen(false)}
                  >
                    Services
                  </MyLink>
                </Link>
                <Link href="/properties">
                  <MyLink
                    style={{
                      border:
                        router.pathname == "/properties"
                          ? "1px solid white"
                          : "",
                    }}
                    onClick={() => setisOpen(false)}
                  >
                    Properties
                  </MyLink>
                </Link>
                <Dropdown>
                  <div
                    className="dropdown-btn"
                    style={{
                      border:
                        router.pathname == "/singlepage"
                          ? "1px solid white"
                          : router.pathname == "/history"
                          ? "1px solid white"
                          : "",
                    }}
                  >
                    Pages <AiOutlineArrowDown></AiOutlineArrowDown>
                  </div>
                  <DropdownContent>
                    <Link href="/singlepage">
                      <DropdownLink onClick={() => setisOpen(false)}>
                        Single Page
                      </DropdownLink>
                    </Link>
                    <Link href="/history">
                      <DropdownLink onClick={() => setisOpen(false)}>
                        History
                      </DropdownLink>
                    </Link>
                  </DropdownContent>
                </Dropdown>
                <Link href="/contact">
                  <MyLink
                    style={{
                      border:
                        router.pathname == "/contact" ? "1px solid white" : "",
                    }}
                    onClick={() => setisOpen(false)}
                  >
                    Contact
                  </MyLink>
                </Link>
              </Backdrop>
              <Hamburger onClick={() => setisOpen(true)} display={isOpen}>
                <div></div>
                <div></div>
                <div></div>
              </Hamburger>
            </>
          ) : (
            <>
              <Logo>
                <div style={{ marginRight: "15px" }}>LOGO IPS</div>
                <GiLighthouse />
              </Logo>
              <Navbar>
                <Link href="/">
                  <MyLink>Home</MyLink>
                </Link>
                <Link href="/about">
                  <MyLink
                    style={{
                      border:
                        router.pathname == "/about" ? "1px solid white" : "",
                    }}
                  >
                    About
                  </MyLink>
                </Link>
                <Link href="/services">
                  <MyLink
                    style={{
                      border:
                        router.pathname == "/services" ? "1px solid white" : "",
                    }}
                  >
                    Services
                  </MyLink>
                </Link>
                <Link href="/properties">
                  <MyLink
                    style={{
                      border:
                        router.pathname == "/properties"
                          ? "1px solid white"
                          : "",
                    }}
                  >
                    Properties
                  </MyLink>
                </Link>
                <Dropdown>
                  <div
                    className="dropdown-btn"
                    style={{
                      border:
                        router.pathname == "/singlepage"
                          ? "1px solid white"
                          : router.pathname == "/history"
                          ? "1px solid white"
                          : "",
                    }}
                  >
                    Pages <AiOutlineArrowDown></AiOutlineArrowDown>
                  </div>
                  <DropdownContent>
                    <Link href="/singlepage">
                      <DropdownLink>Single Page</DropdownLink>
                    </Link>
                    <Link href="/history">
                      <DropdownLink>History</DropdownLink>
                    </Link>
                  </DropdownContent>
                </Dropdown>
                <Link href="/contact">
                  <MyLink
                    style={{
                      border:
                        router.pathname == "/contact" ? "1px solid white" : "",
                    }}
                  >
                    Contact
                  </MyLink>
                </Link>
              </Navbar>
            </>
          )}
        </NavbarWrapper>
      </MainWrapper>
    );
  }
};

export default Nav;
