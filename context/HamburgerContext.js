import React, { createContext, useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
export const HamburgerContext = createContext();

export const HamburgerContextProvider = ({ children }) => {
  const [isMobile, setisMobile] = useState(true);
  const [isOpen, setisOpen] = useState(false);
  const value = { isMobile, isOpen, setisOpen };
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 1024) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  }, [width]);
  return (
    <HamburgerContext.Provider value={value}>
      {children}
    </HamburgerContext.Provider>
  );
};
export default HamburgerContextProvider;
