import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";

import v3 from "../assets/videos/3.mp4";

// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/captions.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

const BlockHomeHero: React.FC = () => {
  const { t } = useTranslation();

  const [boxLoaded, setBoxLoaded] = useState(false);

  // const [bgColor, setBgColor] = useState(
  //   "linear-gradient(to left bottom, #009FFF, #ec2F4B)"
  // );

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const captainFontSize = useBreakpointValue({
    base: "4rem",
    md: "5rem",
    lg: "5rem",
  });

  useEffect(() => {}, [boxLoaded]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const newBgColor = `linear-gradient(to left bottom, ${getRandomColor()}, ${getRandomColor()})`;
  //     setBgColor(newBgColor);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // const getRandomColor = () => {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Box
          className="block block--dark box-transition"
          position="absolute"
          top="0"
          width="100%"
          height={{ base: "35rem", lg: "25rem" }}
          bg="linear-gradient(to right, #009FFF, #ec2F4B)"
          // bg="linear-gradient(to right, #12C2E9, #F64F59)"
          // padding="6rem 2rem 6rem 2rem"
          // bgImage={plan1}
          // objectFit="contain"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          overflow="hidden"
        >
          <video
            autoPlay
            loop
            muted
            style={{
              opacity: "0.4",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={v3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <Box
            width="100%"
            height="100%"
            bg="linear-gradient(to right, #009FFF, #ec2F4B)"
            opacity="0.5"
          ></Box> */}
          <Box
            className="block__header container"
            position="absolute"
            width="100%"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            maxWidth="1140px"
            margin="0 auto"
            marginTop="3rem"
            paddingX="2rem"
            // textAlign="left"
            // justifyContent="center"
            // alignItems="center"
          >
            <Text
              className="h2 block__heading"
              color={useColorModeValue("#000", "#000")}
              marginBottom="1rem"
              marginTop="0"
              fontSize={{ base: "1.9rem", lg: "2.5rem" }}
              fontWeight="bold"
              lineHeight="1.1"
              fontFamily="'Acme', sans-serif"
              letterSpacing={2}
            >
              {t("homeHeroTitle")}
            </Text>
            <Text
              className="h2 block__heading"
              color={useColorModeValue("#fff", "#fff")}
              marginBottom="1rem"
              marginTop="0"
              fontSize={{ base: "2.1rem", lg: "2.5rem" }}
              // fontWeight="bold"
              lineHeight="1.1"
              fontFamily="'Acme', sans-serif"
              letterSpacing={3}
            >
              <span
                style={{
                  fontSize: captainFontSize,
                  fontFamily: "'Chicle', serif",
                  fontWeight: "normal",
                }}
              >
                Captain
              </span>
              {t("homeHeroSubTitle")}
            </Text>
            <Box
              // color={useColorModeValue("black", "#FF3A2D")}
              color={useColorModeValue("#FF3A2D", "#FF3A2D")}
              margin="0"
              fontSize={{
                sm: "1.3rem",
                base: "1.3rem",
                md: "2rem",
                lg: "2.6rem",
                xl: "2.4rem",
              }}
              fontWeight="bold"
              textAlign="center"
            >
              {/* <Typed
                strings={["Dddd"]}
                typeSpeed={50}
                backSpeed={20}
                loop
                backDelay={3000}
              /> */}
            </Box>
            {/* <Text
              className="p"
              marginTop={10}
              color={useColorModeValue("gray.800", "#FF3A2D")}
            >
              {t("heroSubTitle")}
            </Text> */}
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default BlockHomeHero;
