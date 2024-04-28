import React, { useEffect, useState } from "react";
import { Box, HStack, Link, SimpleGrid, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MdApps } from "react-icons/md";
import {
  FaRegCreditCard,
  FaTrainSubway,
  FaPhoneVolume,
  FaMobileRetro,
} from "react-icons/fa6";
import {
  FaHome,
  FaWifi,
  FaCar,
  FaAddressCard,
  FaInternetExplorer,
  FaMapMarkedAlt,
  FaSuitcaseRolling,
} from "react-icons/fa";
import { MdOutlineLocalGroceryStore, MdLocalAirport } from "react-icons/md";
import { PiDogFill, PiSimCardFill, PiTelevisionDuotone } from "react-icons/pi";
import { SiShopify } from "react-icons/si";
import { GiRotaryPhone } from "react-icons/gi";

import PlanCard from "./PlanCard";
import plan1 from "../assets/images/plans-04.jpeg";
import plan2 from "../assets/images/plans-08.jpg";
import plan3 from "../assets/images/plans-09.jpg";

// interface BlockPlansProps {
//   data: {
//     src: string;
//     title: string;
//     description: string;
//   }[];
//   onClick: (index: number) => void;
// }

const BlockPlans: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => { }, [boxLoaded]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const numElements = 3;

  const [isHoveredButton, setIsHoveredButton] = useState(false);

  const handleHoverButton = () => {
    setIsHoveredButton(true);
  };

  const handleUnHoverButton = () => {
    setIsHoveredButton(false);
  };

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

  const { t } = useTranslation();

  const iconSize = useBreakpointValue({ base: "27px", md: "32px", lg: "40px" });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={handleBoxLoad}
    >
      <Box
        className="grid-outer-container"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={{ base: "30rem", lg: "18rem" }}
        padding="2rem 2rem"
        overflow="hidden"
      // bg={useColorModeValue("gray.400", "gray.800")}
      >
        <Box
          className="grid-inner-container"
          width="100%"
          maxWidth={{ base: "420px", md: "420px", lg: "1000px" }}
          margin={{ base: "0.5rem", md: "1rem", lg: "0rem" }}
        >

          <Box className="buttonContainer" display="flex" justifyContent="center" alignItems="center"
          >
            <Link
              position="relative"
              className="button"
              href="/services/"
              width={{ base: "90%", lg: "23rem" }}
              bg="#f04e2d"
              color="#fff"
              fontSize={{ base: "2rem", lg: "1.5rem" }}
              fontFamily="'Acme', sans-serif"
              padding="1rem"
              marginY={{ base: "1rem", lg: "3rem" }}
              marginBottom={{ base: "2.5rem", lg: "2rem" }}
              boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
              border="4px solid #F04E2D"
              borderRadius="15px"
              cursor="pointer"
              _hover={{
                bg: "gray.800",
                color: "#f04e2d",
              }}
              transition="background-color 0.2s ease-out"
              onMouseEnter={handleHoverButton}
              onMouseLeave={handleUnHoverButton}
            >
              <HStack justifyContent="center" alignItems="center">
                <MdApps size={iconSize} color={isHoveredButton ? "#f04e2d" : "white"} />
                <Text fontSize={{ base: "1rem", md: "1.5rem", lg: "" }} textAlign="center">{t("exploreServices")}</Text>
              </HStack>
            </Link>
          </Box>

          <SimpleGrid
            className="card-grid"
            columns={{ base: 1, md: 1, lg: 3 }}
            spacing={35}
            padding="10px"
          >
            <PlanCard
              isHovered={isHoveredArray[1]}
              handleHover={() => handleHover(1)}
              handleUnhover={() => handleUnhover(1)}
              eventPageHref={"/your-package/"}
              eventImageHref={plan1}
              titleText={t("packageYourOwn")}
              badgeText={t("customizeYours")}
              badgeTextColor={{ light: "white", dark: "white" }}
              badgeBackgroundColor={{ light: "dodgerblue", dark: "dodgerblue" }}
              badgeBorderColor={{ light: "blue", dark: "blue" }}
              icon1={FaRegCreditCard}
              icon2={FaTrainSubway}
              icon3={MdOutlineLocalGroceryStore}
              icon4={FaHome}
              icon5={FaWifi}
              icon6={FaPhoneVolume}
              topBorderColor={useColorModeValue(
                "linear-gradient(to left, transparent, #4747a3, #272763)",
                "linear-gradient(to left, transparent, #7560F9 ,#4BFD85)"
              )}
              bottomBorderColor={useColorModeValue(
                "linear-gradient(to left, #272763, #4747a3, transparent)",
                "linear-gradient(to left, #4BFD85 ,#7560F9, transparent)"
              )}
              rightBorderColor={useColorModeValue(
                "linear-gradient(to bottom, transparent, #4747a3, #272763)",
                "linear-gradient(to bottom, transparent, #7560F9, #4BFD85)"
              )}
              leftBorderColor={useColorModeValue(
                "linear-gradient(to bottom, #272763, #4747a3, transparent)",
                "linear-gradient(to bottom, #4BFD85, #7560F9, transparent)"
              )}
              topBorderPosition={"-0.9rem"}
              bottomBorderPosition={"-0.9rem"}
              rightBorderPosition={"-0.9rem"}
              leftBorderPosition={"-0.9rem"}
              topBorderWidth={"100%"}
              bottomBorderWidth={"100%"}
              rightBorderWidth={"1.2rem"}
              leftBorderWidth={"1.2rem"}
              topBorderHeight={"1.2rem"}
              bottomBorderHeight={"1.2rem"}
              rightBorderHeight={"100%"}
              leftBorderHeight={"100%"}
              marginRight={{
                sm: "",
                base: "3rem",
                md: "7rem",
                lg: "",
                xl: "",
              }}
            />

            <PlanCard
              isHovered={isHoveredArray[2]}
              handleHover={() => handleHover(2)}
              handleUnhover={() => handleUnhover(2)}
              eventPageHref={"/ideal-package/"}
              eventImageHref={plan2}
              titleText={t("packageIdeal")}
              badgeText={t("popular")}
              badgeTextColor={{ light: "white", dark: "white" }}
              badgeBackgroundColor={{ light: "tomato", dark: "tomato" }}
              badgeBorderColor={{ light: "red", dark: "red" }}
              icon1={FaCar}
              icon2={FaAddressCard}
              icon3={FaMobileRetro}
              icon4={MdLocalAirport}
              icon5={GiRotaryPhone}
              icon6={FaSuitcaseRolling}
              topBorderColor={
                "linear-gradient(to left, transparent, #6322BF, #F226AA)"
              }
              bottomBorderColor={
                "linear-gradient(to left, #F226AA, #6322BF, transparent)"
              }
              rightBorderColor={
                "linear-gradient(to bottom, transparent, #6322BF, #F226AA)"
              }
              leftBorderColor={
                "linear-gradient(to bottom, #F226AA, #6322BF, transparent)"
              }
              topBorderPosition={"-0.9rem"}
              bottomBorderPosition={"-0.9rem"}
              rightBorderPosition={"-0.9rem"}
              leftBorderPosition={"-0.9rem"}
              topBorderWidth={"100%"}
              bottomBorderWidth={"100%"}
              rightBorderWidth={"1.2rem"}
              leftBorderWidth={"1.2rem"}
              topBorderHeight={"1.2rem"}
              bottomBorderHeight={"1.2rem"}
              rightBorderHeight={"100%"}
              leftBorderHeight={"100%"}
              marginRight={{
                sm: "",
                base: "3rem",
                md: "7rem",
                lg: "",
                xl: "",
              }}
            />

            <PlanCard
              isHovered={isHoveredArray[3]}
              handleHover={() => handleHover(3)}
              handleUnhover={() => handleUnhover(3)}
              eventPageHref={"/all-packages/"}
              eventImageHref={plan3}
              titleText={t("packageAll")}
              badgeText={t("budgetFriendly")}
              badgeTextColor={{ light: "black", dark: "black" }}
              badgeBackgroundColor={{ light: "gold", dark: "gold" }}
              badgeBorderColor={{ light: "orange", dark: "orange" }}
              icon1={PiDogFill}
              icon2={FaMapMarkedAlt}
              icon3={FaInternetExplorer}
              icon4={SiShopify}
              icon5={PiTelevisionDuotone}
              icon6={PiSimCardFill}
              topBorderColor={useColorModeValue(
                "linear-gradient(to left, transparent, #4747a3, #272763)",
                "linear-gradient(to left, transparent, #7560F9 ,#4BFD85)"
              )}
              bottomBorderColor={useColorModeValue(
                "linear-gradient(to left, #272763, #4747a3, transparent)",
                "linear-gradient(to left, #4BFD85 ,#7560F9, transparent)"
              )}
              rightBorderColor={useColorModeValue(
                "linear-gradient(to bottom, transparent, #4747a3, #272763)",
                "linear-gradient(to bottom, transparent, #7560F9, #4BFD85)"
              )}
              leftBorderColor={useColorModeValue(
                "linear-gradient(to bottom, #272763, #4747a3, transparent)",
                "linear-gradient(to bottom, #4BFD85, #7560F9, transparent)"
              )}
              topBorderPosition={"-0.9rem"}
              bottomBorderPosition={"-0.9rem"}
              rightBorderPosition={"-0.9rem"}
              leftBorderPosition={"-0.9rem"}
              topBorderWidth={"100%"}
              bottomBorderWidth={"100%"}
              rightBorderWidth={"1.2rem"}
              leftBorderWidth={"1.2rem"}
              topBorderHeight={"1.2rem"}
              bottomBorderHeight={"1.2rem"}
              rightBorderHeight={"100%"}
              leftBorderHeight={"100%"}
              marginRight={{
                sm: "",
                base: "3rem",
                md: "7rem",
                lg: "",
                xl: "",
              }}
            />
          </SimpleGrid>
        </Box>
      </Box>
    </motion.div>
  );
};

export default BlockPlans;
