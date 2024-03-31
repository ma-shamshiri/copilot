import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Image,
  useColorMode,
  Link,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import LanguageSwitcher from "./LanguageSwitcher";
import captainDark from "../assets/images/captainDark.png";
import captainLight from "../assets/images/captainLight.png";
// import Sidebar from "./Sidebar/Sidebar";

const NavigationBar: React.FC = () => {
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

  const captainImg = colorMode === "dark" ? captainLight : captainDark;

  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {/* <Box
        width="100%"
        py={{ base: "1rem" }}
        px={{ base: "1rem" }}
        bg={useColorModeValue("rgba(255,255,255,0.1)", "rgba(0,0,0,0.1)")}
        display={{ base: "block", md: "none" }}
        // zIndex="999"
        position="absolute"
        top={0}
      >
        <Link as={RouterLink} to={"/"} cursor="pointer">
          <Flex justifyContent={"center"} alignItems={"center"}>
            <HStack>
              <Image src={captainImg} width={{ base: "82%", lg: 300 }} />
            </HStack>
          </Flex>
        </Link>
      </Box> */}
      <Box
        bg={useColorModeValue("rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)")}
        py={{ base: "1rem" }}
        px={{ base: "1.2rem", lg: "18rem" }}
        position="sticky"
        zIndex="999"
        top={isNavVisible ? "0" : "-100px"}
        transition="top 0.3s"
        overflow="hidden"
      >
        <Flex
          justify={{ base: "space-between", lg: "space-between" }}
          align="center"
        >
          <Flex align="center">
            {/* <Box
              zIndex="1000"
              marginTop="-10rem"
              marginLeft="-1.8rem"
              marginRight={{ base: "9rem", lg: "10rem" }}
            >
              <Sidebar />
            </Box> */}
            <Link
              display={{ base: "block", md: "block" }}
              as={RouterLink}
              to={"/"}
              cursor="pointer"
            >
              {/* <Flex justifyContent={"center"} alignItems={"center"}> */}
              <Image src={captainImg} width={{ base: 140, md: 280, lg: 200 }} />
              {/* </Flex> */}
            </Link>
          </Flex>
          {isLargeScreen ? (
            <HStack spacing={5} zIndex={999}>
              <LanguageSwitcher />
              <ColorModeSwitch />
            </HStack>
          ) : (
            <HStack spacing={3} zIndex={999}>
              <LanguageSwitcher />
              <ColorModeSwitch />
            </HStack>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default NavigationBar;
