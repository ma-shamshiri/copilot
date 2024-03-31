import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Image,
  useColorMode,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
// import logo from "../assets/images/logo.png";
// import tedxWhite from "../assets/images/tedxWhite.png";
// import tedxBlack from "../assets/images/tedxBlack.png";
import captainLight from "../assets/images/captainLight.png";
import captainDark from "../assets/images/captainDark.png";

import LanguageSwitcher from "./LanguageSwitcher";
// import Sidebar from "./Sidebar/Sidebar";

const NavigationBar1: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setIsNavVisible(currentPosition < scrollPosition);
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const { colorMode } = useColorMode();

  //   const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;
  const captainImg = colorMode === "dark" ? captainLight : captainDark;

  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Box
        width="100%"
        py={{ base: "1rem" }}
        px={{ base: "1rem" }}
        bg={useColorModeValue("rgb(241,241,241)", "black")}
        display={{ base: "block", md: "none" }}
        zIndex="999"
      >
        <Link as={RouterLink} to={"/"} cursor="pointer">
          <Flex justifyContent={"center"} alignItems={"center"}>
            <HStack>
              {/* <Image src={logo} boxSize={{ base: "16%", lg: "70px" }} /> */}
              <Image src={captainImg} width={{ base: "82%", lg: 300 }} />
            </HStack>
          </Flex>
        </Link>
      </Box>
      <Box
        bg={useColorModeValue("rgb(241,241,241)", "black")}
        py={{ base: "1.5rem" }}
        px={{ base: "1rem" }}
        position="sticky"
        zIndex="999"
        top={isNavVisible ? "0" : "-100px"}
        transition="top 0.3s"
      >
        <Flex
          justify={{ base: "space-between", lg: "space-between" }}
          align="center"
        >
          <Flex align="center">
            <Box
              zIndex="1000"
              marginTop="-10rem"
              marginLeft="-1.8rem"
              marginRight={{ base: "9rem", lg: "10rem" }}
            >
              {/* <Sidebar /> */}
            </Box>
            <Link
              display={{ base: "none", md: "block" }}
              as={RouterLink}
              to={"/"}
              cursor="pointer"
            >
              <Flex justifyContent={"center"} alignItems={"center"}>
                <HStack>
                  {/* <Image
                    src={logo}
                    boxSize={{ base: "35px", md: "60px", lg: "70px" }}
                  /> */}
                  <Image
                    src={captainImg}
                    width={{ base: 160, md: 280, lg: 300 }}
                  />
                </HStack>
              </Flex>
            </Link>
          </Flex>
          {isLargeScreen ? (
            <HStack spacing={5} zIndex={999}>
              <LanguageSwitcher />
              <ColorModeSwitch />
            </HStack>
          ) : (
            <>
              <LanguageSwitcher />
              <ColorModeSwitch />
            </>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default NavigationBar1;
