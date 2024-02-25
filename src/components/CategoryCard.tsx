import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Link,
  useColorModeValue,
  ResponsiveValue,
} from "@chakra-ui/react";

interface CategoryCardProps {
  isHovered: boolean;
  handleHover: () => void;
  handleUnhover: () => void;
  eventPageHref: string;
  eventImageHref: string;
  titleText: string;
  subtitleText: string;
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

const CategoryCard: React.FC<CategoryCardProps> = ({
  isHovered,
  handleHover,
  handleUnhover,
  eventPageHref,
  eventImageHref,
  titleText,
  subtitleText,
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
      >
        <Box
          boxShadow={`0px 2px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px 0.5px rgba(0, 0, 0, 0.8)`}
          className="plan"
          width={{
            sm: "15rem",
            base: "15rem",
            md: "26rem",
            lg: "32rem",
            xl: "35rem",
          }}
          height={{
            sm: "15rem",
            base: "15rem",
            md: "26rem",
            lg: "32rem",
            xl: "35rem",
          }}
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
            height={"60%"}
            paddingTop={"1rem"}
            paddingRight={"1rem"}
            paddingLeft={"1rem"}
            borderRadius="9px 9px 0 0"
          />
          <Box
            className="card__header"
            bg={useColorModeValue("gray.800", "gray.800")}
            p={{
              sm: "0.8rem",
              base: "0.8rem",
              md: "2.1rem",
              lg: "2.4rem",
              xl: "3.1rem",
            }}
            borderBottomRadius="9px"
            marginBottom={"1rem"}
            marginRight={"1rem"}
            marginLeft={"1rem"}
          >
            <Text
              className="plan__name"
              color={useColorModeValue("gray.200", "gray.200")}
              margin="0"
              fontSize={{
                sm: "1rem",
                base: "1rem",
                md: "1.6rem",
                lg: "2.1rem",
                xl: "2.1rem",
              }}
              fontWeight="bold"
              textAlign="center"
            >
              {titleText}
            </Text>
            <Box
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
              <Text>temp text</Text>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default CategoryCard;
