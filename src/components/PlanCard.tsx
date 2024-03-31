import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Link,
  useColorModeValue,
  ResponsiveValue,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import Badges from "./Badges";

interface PlanCardProps {
  isHovered: boolean;
  handleHover: () => void;
  handleUnhover: () => void;
  eventPageHref: string;
  eventImageHref: string;
  titleText: string;
  badgeText: string;
  badgeTextColor?: { light: string; dark: string };
  badgeBackgroundColor?: { light: string; dark: string };
  badgeBorderColor?: { light: string; dark: string };
  icon1?: IconType;
  icon2?: IconType;
  icon3?: IconType;
  icon4?: IconType;
  icon5?: IconType;
  icon6?: IconType;
  topBorderColor: string;
  bottomBorderColor: string;
  rightBorderColor: string;
  leftBorderColor: string;
  topBorderPosition: string;
  bottomBorderPosition: string;
  rightBorderPosition: string;
  leftBorderPosition: string;
  topBorderWidth: string;
  bottomBorderWidth: string;
  rightBorderWidth: string;
  leftBorderWidth: string;
  topBorderHeight: string;
  bottomBorderHeight: string;
  rightBorderHeight: string;
  leftBorderHeight: string;
  marginRight?: ResponsiveValue<string>;
}

const PlanCard: React.FC<PlanCardProps> = ({
  isHovered,
  handleHover,
  handleUnhover,
  eventPageHref,
  eventImageHref,
  titleText,
  badgeText,
  badgeTextColor,
  badgeBackgroundColor,
  badgeBorderColor,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  topBorderColor,
  bottomBorderColor,
  rightBorderColor,
  leftBorderColor,
  topBorderPosition,
  bottomBorderPosition,
  rightBorderPosition,
  leftBorderPosition,
  topBorderWidth,
  bottomBorderWidth,
  rightBorderWidth,
  leftBorderWidth,
  topBorderHeight,
  bottomBorderHeight,
  rightBorderHeight,
  leftBorderHeight,
  marginRight,
}) => {
  return (
    <>
      <Link
        className="event2024Link"
        as={RouterLink}
        to={eventPageHref}
        // target="_blank"
        cursor="pointer"
        style={{ textDecoration: "none" }}
        bg={useColorModeValue(
          "#F2FCF9",
          "linear-gradient(to right bottom, #0e0e29, #0e0e29, #272763, #272763)"
          // "linear-gradient(to right top, #FF00CC, #333399)",
        )}
      >
        <Box
          boxShadow={`0px 2px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px 0.5px rgba(0, 0, 0, 0.8)`}
          className="plan"
          width={{
            base: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          }}
          height={
            {
              // base: "19rem",
              // md: "26rem",
              // lg: "25rem",
            }
          }
          borderRadius="9px"
          overflow="hidden"
          position="relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
          marginRight={marginRight}
        >
          <Box
            className="topBorder"
            position="absolute"
            top={topBorderPosition}
            left={"0"}
            width={topBorderWidth}
            height={topBorderHeight}
            style={{
              background: topBorderColor,
              transform: `scaleX(${isHovered ? 1 : 0})`,
              transformOrigin: "left",
              transition: "transform 0.5s ease-in-out",
            }}
          ></Box>
          <Box
            className="bottomBorder"
            position="absolute"
            bottom={bottomBorderPosition}
            left={"0"}
            width={bottomBorderWidth}
            height={bottomBorderHeight}
            style={{
              background: bottomBorderColor,
              transform: `scaleX(${isHovered ? 1 : 0})`,
              transformOrigin: "right",
              transition: "transform 0.5s ease-in-out",
            }}
          ></Box>
          <Box
            className="leftBorder"
            position="absolute"
            left={leftBorderPosition}
            width={leftBorderWidth}
            height={leftBorderHeight}
            style={{
              background: leftBorderColor,
              transform: `scaleY(${isHovered ? 1 : 0})`,
              transformOrigin: "top",
              transition: "transform 0.5s ease-in-out",
            }}
          ></Box>
          <Box
            className="rightBorder"
            position="absolute"
            right={rightBorderPosition}
            width={rightBorderWidth}
            height={rightBorderHeight}
            style={{
              background: rightBorderColor,
              transform: `scaleY(${isHovered ? 1 : 0})`,
              transformOrigin: "bottom",
              transition: "transform 0.5s ease-in-out",
            }}
          ></Box>
          <Image
            src={eventImageHref}
            width="100%"
            height={{
              base: "65%",
              md: "60%",
              lg: "60%",
              xl: "60%",
            }}
            paddingTop="1rem"
            paddingBottom="1rem"
            paddingRight="1rem"
            paddingLeft="1rem"
            borderRadius="9px 9px 0 0"
          />
          <VStack display="flex">
            <Box
              className="badgeContainer"
              display="flex"
              width="100%"
              justifyContent="flex-start"
              alignItems="center"
              paddingLeft="1rem"
            >
              {badgeText && (
                <Badges
                  text={badgeText}
                  textColor={badgeTextColor}
                  backgroundColor={badgeBackgroundColor}
                  borderColor={badgeBorderColor}
                />
              )}
            </Box>
            <Box
              className="card__header"
              maxWidth="13rem"
              p={{
                base: "0.8rem",
                // md: "2.1rem",
                // lg: "2.4rem",
                // xl: "3.1rem",
              }}
              // marginBottom="1rem"
            >
              <Text
                className="plan__name"
                color={useColorModeValue("gray.800", "gray.200")}
                margin="0"
                fontSize={{
                  base: "1.5rem",
                  md: "1.8rem",
                  lg: "1.6rem",
                  xl: "1.6rem",
                }}
                // fontWeight="bold"
                textAlign="center"
                // fontFamily="'Englebert', cursive"
                fontFamily="'Acme', sans-serif"
              >
                {titleText}
              </Text>
            </Box>
            <Box
              className="iconContainer"
              display="flex"
              width="100%"
              paddingX="1rem"
              marginBottom="1rem"
              justifyContent="space-around"
              alignItems="center"
              // bg={"red"}
            >
              <IconButton
                aria-label="icon"
                size="xl"
                icon={icon1 && icon1({ size: 24 })}
                color={useColorModeValue("gray.700", "gray.800")}
                bg={useColorModeValue("gold", "gold")}
                // isRound
                boxSize={{ base: "2.2rem", lg: "2.2rem" }}
                _hover={{
                  color: useColorModeValue("gray.700", "gray.800"),
                  bg: useColorModeValue("gold", "gold"),
                  transform: "scale(1.2)",
                }}
                transition="transform 0.15s ease-out"
              />

              <IconButton
                aria-label="icon"
                size="xl"
                icon={icon2 && icon2({ size: 24 })}
                color={useColorModeValue("gray.700", "gray.800")}
                bg={useColorModeValue("#16F8B6", "#16F8B6")}
                boxSize={{ base: "2.2rem", lg: "2.2rem" }}
                _hover={{
                  color: useColorModeValue("gray.700", "gray.800"),
                  bg: useColorModeValue("#16F8B6", "#16F8B6"),
                  transform: "scale(1.2)",
                }}
                transition="transform 0.15s ease-out"
              />

              <IconButton
                aria-label="icon"
                size="xl"
                icon={icon3 && icon3({ size: 24 })}
                color={useColorModeValue("gray.700", "gray.800")}
                bg={useColorModeValue("#f961c2", "#F926AE")}
                boxSize={{ base: "2.2rem", lg: "2.2rem" }}
                _hover={{
                  color: useColorModeValue("gray.700", "gray.800"),
                  bg: useColorModeValue("#f961c2", "#F926AE"),
                  transform: "scale(1.2)",
                }}
                transition="transform 0.15s ease-out"
              />

              <IconButton
                aria-label="icon"
                size="xl"
                icon={icon4 && icon4({ size: 24 })}
                color={useColorModeValue("gray.900", "gray.900")}
                bg={useColorModeValue("#3a9efc", "#3a9efc")}
                boxSize={{ base: "2.2rem", lg: "2.2rem" }}
                _hover={{
                  color: useColorModeValue("gray.900", "gray.900"),
                  bg: useColorModeValue("#3a9efc", "#3a9efc"),
                  transform: "scale(1.2)",
                }}
                transition="transform 0.15s ease-out"
              />

              <IconButton
                aria-label="icon"
                size="xl"
                icon={icon5 && icon5({ size: 24 })}
                color={useColorModeValue("gray.900", "gray.900")}
                bg={useColorModeValue("darkorange", "darkorange")}
                boxSize={{ base: "2.2rem", lg: "2.2rem" }}
                _hover={{
                  color: useColorModeValue("gray.700", "gray.800"),
                  bg: useColorModeValue("darkorange", "darkorange"),
                  transform: "scale(1.2)",
                }}
                transition="transform 0.15s ease-out"
              />

              <IconButton
                aria-label="icon"
                size="xl"
                icon={icon6 && icon6({ size: 24 })}
                color={useColorModeValue("gray.100", "gray.100")}
                bg={useColorModeValue("blue", "blue")}
                boxSize={{ base: "2.2rem", lg: "2.2rem" }}
                _hover={{
                  color: useColorModeValue("gray.100", "gray.100"),
                  bg: useColorModeValue("blue", "blue"),
                  transform: "scale(1.2)",
                }}
                transition="transform 0.15s ease-out"
              />
            </Box>
          </VStack>
        </Box>
      </Link>
    </>
  );
};

export default PlanCard;
