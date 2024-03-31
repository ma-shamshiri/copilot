import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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

  useEffect(() => {}, [boxLoaded]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const numElements = 3;

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
        marginTop={{ base: "30rem", lg: "18.5rem" }}
        padding="2rem 2rem"
        overflow="hidden"
        // bg={useColorModeValue("gray.400", "gray.800")}
      >
        <Box
          className="grid-inner-container"
          width="100%"
          maxWidth={{ base: "4000px", md: "450px", lg: "1200px" }}
          margin={{ base: "0.5rem", md: "2.5rem", lg: "2rem" }}
        >
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
              eventPageHref={"/"}
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
              eventPageHref={"/"}
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
              eventPageHref={"/"}
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
