import React from "react";

import {
  Box,
  Image,
  Text,
  Grid,
  IconButton,
  Stack,
  Icon,
  Flex,
  useColorModeValue,
  useMediaQuery,
  ResponsiveValue,
} from "@chakra-ui/react";
import {
  BsLinkedin,
  BsTwitter,
  BsTwitterX,
  BsInstagram,
  BsFillChatQuoteFill,
} from "react-icons/bs";

interface ProfileCardProps {
  isHovered: boolean;
  handleHover: () => void;
  handleUnhover: () => void;
  src: string;
  linkedinHref: string;
  twitterHref: string;
  instagramHref: string;
  author: string;
  organization: string;
  quoteText: string;
  borderColor: string;
  badgeText: string;
  badgeColor: string;
  badgeTextSize?: ResponsiveValue<string>;
  badgePaddingRight?: ResponsiveValue<string>;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  isHovered,
  handleHover,
  handleUnhover,
  src,
  linkedinHref,
  twitterHref,
  instagramHref,
  author,
  organization,
  quoteText,
  borderColor,
  badgeText,
  badgeColor,
  badgeTextSize,
  badgePaddingRight,
}) => {
  const [isLargerThanSm] = useMediaQuery("(min-width: 100rem)");
  return (
    <Box
      className="cardContainer"
      position="relative"
      width="100%"
      height="100%"
      //   bg={useColorModeValue("gray.300", "gray.800")}
      bg={useColorModeValue(
        // "#F0E2B6",
        "linear-gradient(to right bottom, #DDC887, #DDC887, #F0E2B6, #F0E2B6)",
        "linear-gradient(to right bottom, #0e0e29, #0e0e29, #272763, #272763)"
        // "linear-gradient(to right top, #FF00CC, #333399)",
      )}
      padding={{ base: "1rem 1rem 1rem 1rem", lg: "2.5rem 2rem 2rem 2rem" }}
      borderRadius="7px"
      borderWidth="1rem"
      borderColor="transparent"
      borderLeftColor={useColorModeValue("#DDC887", "#0E0E29")}
      borderBottomColor={useColorModeValue("#F0E2B6", "#24245C")}
      borderRightColor={useColorModeValue("#F0E2B6", "#272763")}
      borderTopColor={useColorModeValue("#DDC887", "#10102E")}
      boxShadow="0 0 30px 1px black"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      {/* ======= Rectangle ======= */}
      <Box
        position="absolute"
        top={{ base: "100", lg: "25" }}
        right={{ base: "auto", lg: "0" }}
        left={{ base: "-65px", md: "auto", lg: "auto" }}
        width={{ base: "170px", md: "200px", lg: "200px" }}
        height={{ base: "32px", md: "35px", lg: "35px" }}
        bg={badgeColor}
        textAlign="right"
        transform={{ base: "rotate(90deg)", lg: "rotate(0deg)" }}
        opacity={isHovered ? 1 : 0.6}
        transition="opacity 0.3s ease-in-out"
        justifyContent="center"
        alignItems="center"
        zIndex={0}
      >
        <Text
          paddingTop={{ base: "10", lg: "2" }}
          paddingBottom={{ base: "1.5", lg: "auto" }}
          paddingRight={{ base: "12px", lg: "10px" }}
          fontSize={{ base: "13px", md: "16px", lg: "16px" }}
          fontWeight="bold"
          textColor="white"
          transform={{ base: "rotate(180deg)", lg: "rotate(0deg)" }}
        >
          {badgeText}
        </Text>

        {/* ======= Triangle ======= */}
        <Box
          position="absolute"
          top={{ base: 0, lg: 0 }}
          left={{ base: "initial", lg: -1 }}
          right={{ base: -1, lg: "initial" }}
          //   width="10px"
          //   height="10px"
          backgroundColor="transparent"
          borderStyle="solid"
          borderLeftWidth="18px"
          borderRightWidth="18px"
          borderBottomWidth="36px"
          borderLeftColor="transparent"
          borderRightColor="transparent"
          borderBottomColor={useColorModeValue("#E0CC8E", "#111130")}
          transform={{ base: "rotate(270deg)", lg: "rotate(90deg)" }}
        />
      </Box>
      <Box
        className="cardTopBorder"
        position="absolute"
        top="-1rem"
        left="0"
        width="100%"
        height="1.2rem"
        style={{
          background: borderColor,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
      <Box
        className="cardBottomBorder"
        position="absolute"
        bottom="-1rem"
        left="0"
        width="100%"
        height="1.2rem"
        style={{
          background: borderColor,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />

      <Grid
        className="grid grid--1x2"
        display="grid"
        templateColumns={[
          "1fr",
          null,
          null,
          isLargerThanSm ? "repeat(2, 1fr)" : "1fr",
        ]}
        templateRows="auto 1fr"
        gap={4}
        marginTop={{ base: "5rem", md: "5rem", lg: "2.5rem", xl: "1rem" }}
      >
        {/* -------------------- First row with two columns -------------------- */}

        <Box
          //   className="testimonial__image"
          position="relative"
          gridColumn="1"
          display="flex"
          flexDirection="column"
          //   margin={{ base: "0 3rem", lg: "0" }}

          justifyContent="center"
          alignItems="center"
        >
          <Box
            className="imageContainer"
            position="relative"
            display="flex"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={src}
              width={{ base: "100%", md: "50%", lg: "100%" }}
              // width="20rem"
              // height="20rem"
              opacity={isHovered ? 1 : 0.9}
              alt="A happy smiling member"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s ease-out, opacity 0.3s ease-in-out"
              borderRadius="100%"
            />

            {/* <Box
              className="quoteIconContainer"
              display="inline-flex"
              position="absolute"
              top={{ base: "1rem", lg: "1rem" }}
              right={{ base: "0.5rem", md: "10rem", lg: "1rem" }}
              width="64px"
              height="64px"
              borderRadius="100%"
              backgroundColor="#FF3400"
              //   marginRight={{ md: "2rem" }}
              justifyContent="center"
              alignItems="center"
            >
              <Icon
                className="icon icon--white"
                as={BsFillChatQuoteFill}
                width="40px"
                height="40px"
                color="#fff"
              />
            </Box> */}
          </Box>
          <Stack
            display="flex"
            flexDirection="row"
            spacing={6}
            justifyContent={"center"}
            paddingTop="2rem"
            //   marginBottom="1rem"
          >
            <Box as="a" href={instagramHref} target="_blank">
              <IconButton
                aria-label="instageram"
                variant="ghost"
                size="xl"
                icon={<BsInstagram size="25px" />}
                _hover={{
                  bg: useColorModeValue("gray.800", "gray.200"),
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
                boxSize="3.5rem"
                borderWidth="1px"
                borderColor={useColorModeValue("gray.600", "gray.400")}
              />
            </Box>
            <Box as="a" href={twitterHref} target="_blank">
              <IconButton
                aria-label="twitter"
                variant="ghost"
                size="xl"
                icon={<BsTwitterX size="25px" />}
                _hover={{
                  bg: useColorModeValue("gray.800", "gray.200"),
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
                boxSize="3.5rem"
                borderWidth="1px"
                borderColor={useColorModeValue("gray.600", "gray.400")}
              />
            </Box>
            <Box as="a" href={linkedinHref} target="_blank">
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="xl"
                icon={<BsLinkedin size="25px" />}
                _hover={{
                  bg: useColorModeValue("gray.800", "gray.200"),
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
                boxSize="3.5rem"
                borderWidth="1px"
                borderColor={useColorModeValue("gray.600", "gray.400")}
              />
            </Box>
          </Stack>
        </Box>
        {isLargerThanSm ? (
          <Flex
            // className="testimonial__title"
            gridColumn="2"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            {/* <Flex
            // className="media"
            // marginBottom="4rem"
            > */}
            <Box margin={{ base: "0 2rem 0 0", lg: "0 0.5rem 0 1rem" }}>
              <Text
                fontSize={{ base: "3rem", lg: "1.6rem" }}
                fontWeight="bold"
                fontStyle="normal"
                marginBottom="1rem"
                color={useColorModeValue("gray.800", "gray.300")}
              >
                {author}
              </Text>
              <Text
                className="quote__organization"
                color={useColorModeValue("gray.700", "#48F380")}
                fontSize={{ base: "1.2rem", lg: "1.1rem" }}
                fontStyle="normal"
              >
                {organization}
              </Text>
            </Box>
            {/* </Flex> */}
          </Flex>
        ) : (
          <Box gridColumn="1">
            <Flex marginTop="1.5rem" flexDirection="column">
              <Text
                fontSize={{ base: "1.8rem", md: "1.8rem", lg: "1.5rem" }}
                fontWeight="bold"
                marginBottom="1rem"
                color={useColorModeValue("gray.800", "gray.400")}
              >
                {author}
              </Text>
              <Text
                color={useColorModeValue("#0aa13b", "#48F380")}
                fontSize={{
                  base: "1.1rem",
                  md: "1.3rem",
                  lg: "1.2rem",
                }}
                fontStyle="normal"
              >
                {organization}
              </Text>
            </Flex>
          </Box>
        )}
        {/* -------------------- Second row with one column -------------------- */}
        <Box
          className="quote"
          as="blockquote"
          fontSize={{ base: "1.2rem", lg: "1.3rem" }}
          fontStyle="italic"
          gridColumn={isLargerThanSm ? "span 2" : "span 1"}
          //   margin={{ base: "2rem 0", lg: "1.5rem 0 0 1rem" }}
        >
          <Text
            // className="quote__text"
            textAlign="left"
            _before={{ content: "open-quote" }}
            _after={{ content: "close-quote" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            {quoteText}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProfileCard;
