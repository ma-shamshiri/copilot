import React, { useRef, useState } from "react";
import {
  Box,
  Text,
  useColorModeValue,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

import ProfileCard from "./ProfileCard";
import Amin from "../assets/images/Amin.webp";
import Samin from "../assets/images/Samin.webp";

const firstVariants: { [key: string]: any } = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const secondVariants: { [key: string]: any } = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const thirdVariants: { [key: string]: any } = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const forthVariants: { [key: string]: any } = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const BlockAboutUs: React.FC = () => {
  const { t } = useTranslation();

  const numElements = 2;

  const ref = useRef<HTMLDivElement>(null);

  const separatorColor = useColorModeValue(
    // "linear-gradient(to left, transparent, #7C42F3, transparent",
    "linear-gradient(to left, transparent, black, transparent",
    "linear-gradient(to left, transparent, orange, transparent"
  );

  const [isHoveredArray, setIsHoveredArray] = useState(
    Array(numElements).fill(false)
  );

  const handleHover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = true;
      return newArray;
    });
  };

  const handleUnhover = (index: number) => {
    setIsHoveredArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = false;
      return newArray;
    });
  };

  // const isInView = useInView(ref, { margin: "-100px" });

  // const [boxLoaded, setBoxLoaded] = useState(false);

  // const handleBoxLoad = () => {
  //   setBoxLoaded(true);
  // };

  //   const [expanded, setExpanded] = useState(false);

  //   const toggleExpanded = () => {
  //     setExpanded(!expanded);
  //   };

  return (
    <motion.div
      ref={ref}
      variants={firstVariants}
      initial="initial"
      whileInView="animate"
    >
      <Box
        className="blockContainer"
        padding={{ base: "6rem 2rem", lg: "6rem 4rem" }}
        bg={useColorModeValue(
          "linear-gradient(to bottom, #bccde0, white)",
          "linear-gradient(to bottom, black, #0E0E29)"
        )}
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Box
          className="headerContainer"
          maxWidth="50rem"
          margin="0 auto"
          textAlign={{ base: "initial", lg: "justify" }}
        >
          <motion.div
            ref={ref}
            variants={secondVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.div className="item" variants={secondVariants}>
              <Text
                className="headerTitle"
                color={useColorModeValue("gray.800", "white")}
                fontSize={{ base: "4.0rem", lg: "5rem" }}
                fontWeight="bold"
                maxWidth="50rem"
                fontFamily="'Englebert', cursive"
              >
                {t("aboutUs")}
              </Text>
            </motion.div>

            <motion.div className="item" variants={secondVariants}>
              {/* ---------- SEPARATOR ---------- */}
              <Flex justifyContent="center">
                <Box
                  className="topSeparator"
                  marginBottom="2rem"
                  width="50rem"
                  height="1px"
                  style={{
                    background: separatorColor,
                  }}
                />
              </Flex>
              {/* ---------- SEPARATOR ---------- */}
            </motion.div>

            <motion.div className="item" variants={secondVariants}>
              <Text
                className="aboutUsP1"
                fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                // fontFamily="'Englebert', cursive"
                paddingY="0.5rem"
                //   fontFamily="'Concert One', sans-serif"
              >
                {t("aboutUsP1")}
              </Text>
            </motion.div>

            <motion.div className="item" variants={secondVariants}>
              <Text
                className="aboutUsP2"
                fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                // fontFamily="'Englebert', cursive"
                paddingY="0.5rem"
              >
                {t("aboutUsP2")}
              </Text>
            </motion.div>

            <motion.div className="item" variants={secondVariants}>
              <Text
                className="aboutUsP3"
                fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                // fontFamily="'Englebert', cursive"
                paddingY="0.5rem"
                textAlign="center"
              >
                {t("aboutUsP3")}
              </Text>
            </motion.div>

            {/* <motion.div className="item" variants={secondVariants}>
              <Text
                fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                fontFamily="'Englebert', cursive"
                paddingY="0.5rem"
                textAlign="center"
              >
                {t("aboutUsP4")}
              </Text>
            </motion.div> */}

            {/* ---------- SEPARATOR ---------- */}
            <Flex justifyContent="center">
              <Box
                className="bottomSeparator"
                marginY="2rem"
                width="50rem"
                height="1px"
                style={{
                  background: separatorColor,
                }}
              />
            </Flex>
            {/* ---------- SEPARATOR ---------- */}
          </motion.div>
        </Box>

        <Box
          className="profilesContainer"
          maxWidth="90rem"
          // maxWidth="100%"
          margin="0 auto"
          paddingTop={{ base: "10rem", lg: "5rem" }}
        >
          {/* <Text
          color={useColorModeValue("gray.800", "white")}
          fontSize={{ base: "4.0rem", lg: "5rem" }}
          fontWeight="bold"
          maxWidth="50rem"
          fontFamily="'Englebert', cursive"
          textAlign="center"
        >
          Founders
        </Text> */}

          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2 }}
            spacing={{ base: 20, lg: 20 }}
          >
            <motion.div
              ref={ref}
              variants={thirdVariants}
              initial="initial"
              whileInView="animate"
            >
              {/* ======================== Samin Majidi ======================== */}
              <ProfileCard
                isHovered={isHoveredArray[1]}
                handleHover={() => handleHover(1)}
                handleUnhover={() => handleUnhover(1)}
                src={Samin}
                linkedinHref="https://ca.linkedin.com/in/samin-majidi-05b77a250"
                twitterHref="https://twitter.com/"
                instagramHref="https://www.instagram.com/"
                author="Samin Majidi"
                organization={t("phdStudentInPhysics") + " | McGill"}
                quoteText="Stay tuned for a biography coming soon"
                borderColor="linear-gradient(to left, transparent, #F226AA, #6322BF, transparent)"
                badgeText="Co-Founder & CEO"
                badgeColor="linear-gradient(to left, #6322BF, #6322BF, #F226AA, #F226AA)"
              />
            </motion.div>

            <motion.div
              ref={ref}
              variants={forthVariants}
              initial="initial"
              whileInView="animate"
            >
              {/* ======================== Mohammad Amin Shamshiri ======================== */}
              <ProfileCard
                isHovered={isHoveredArray[2]}
                handleHover={() => handleHover(2)}
                handleUnhover={() => handleUnhover(2)}
                src={Amin}
                linkedinHref="https://ca.linkedin.com/in/ma-shamshiri"
                twitterHref="https://twitter.com/"
                instagramHref="https://www.instagram.com/"
                author="Amin Shamshiri"
                organization={t("softwareEngineer") + " | EnerZam Inc."}
                quoteText="I am Amin Shamshiri, a Machine Learning and Software Engineer with a master's degree 
                           in Computer Science from Concordia University. My internship experience as a full-stack 
                           developer adds depth to my expertise. At Captain, we aim to leverage technology to aid 
                           individuals settling in Montreal, ensuring a seamless transition for newcomers and 
                           unforgettable experiences for visitors."
                borderColor="linear-gradient(to left, transparent, #7560F9, #4BFD85, transparent)"
                badgeText="Co-Founder & CTO"
                // badgeColor="linear-gradient(to left, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
                badgeColor="linear-gradient(to left,  #22D45C, #22D45C, #7560F9,  #7560F9)"
              />
            </motion.div>
          </SimpleGrid>
        </Box>
      </Box>
    </motion.div>
  );
};

export default BlockAboutUs;
