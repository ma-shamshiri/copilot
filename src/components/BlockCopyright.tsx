import {
  Flex,
  Image,
  Text,
  useColorModeValue,
  Link as ChakraLink,
  useColorMode,
  Box,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsTwitterX,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";

import captainLight from "../assets/images/captainLight.png";
import captainDark from "../assets/images/captainDark.png";

const BlockCopyright: React.FC = () => {
  const { t } = useTranslation();

  const { colorMode } = useColorMode();
  const captainImg = colorMode === "dark" ? captainLight : captainDark;

  const separatorColor = useColorModeValue(
    // "linear-gradient(to left, transparent, #7C42F3, transparent",
    "linear-gradient(to left, transparent, black, transparent",
    "linear-gradient(to left, transparent, orange, transparent"
  );

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {}, [boxLoaded]);

  const variants: { [key: string]: any } = {
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

  return (
    <Flex
      className="innerContainer"
      flexDir="column"
      textAlign="center"
      marginTop="-2rem"
      paddingBottom="4rem"
      bg={useColorModeValue("#ddc887", "#232323")}
      justifyContent={"center"}
      alignItems={"center"}
      overflow="hidden"
    >
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChakraLink>
          <Image
            className="logo"
            src={captainImg}
            width={{ base: "10rem", lg: "10rem" }}
            marginBottom="1rem"
          />
        </ChakraLink>
        <Text
          className="copyright"
          fontSize={{ base: "1.2rem", lg: "1.2rem" }}
          //   maxWidth="12rem"
          color={useColorModeValue("black", "#fff")}
          opacity="0.5"
          _dark={{ opacity: "0.3" }}
        >
          {t("copyright")} &copy; 2024 | Captain MERCI
        </Text>
        <Text
          className="allRightsReserved"
          fontSize={{ base: "1.2rem", lg: "1.2rem" }}
          color={useColorModeValue("black", "#fff")}
          opacity="0.5"
          _dark={{ opacity: "0.3" }}
        >
          {t("allRightsReserved")}
        </Text>
        <Box
          className="separator"
          marginY="1rem"
          width={{ base: "20rem", lg: "30rem" }}
          height="2px"
          style={{
            background: separatorColor,
          }}
        />
        <Stack
          className="iconsContainer"
          display="flex"
          flexDirection="row"
          spacing={3}
          justifyContent={"center"}
        >
          <Box
            as="a"
            // href="https://instagram.com/tedxavelorne?igshid=MzRIODBiNWFIZA=="
            href="/"
            // target="_blank"
          >
            <IconButton
              aria-label="instagram"
              variant="ghost"
              size="xl"
              icon={<BsInstagram size="22px" />}
              _hover={{
                bg: useColorModeValue("gray.700", "gray.200"),
                color: useColorModeValue("#F0E2B6", "gray.700"),
              }}
              isRound
              boxSize="2.5rem"
            />
          </Box>
          <Box
            as="a"
            // href="https://twitter.com/tedxavelorne?=gQ5JPPcDU0I54uaHmdPlew&s=35"
            href="/"
            // target="_blank"
          >
            <IconButton
              aria-label="twitter"
              variant="ghost"
              size="xl"
              icon={<BsTwitterX size="22px" />}
              _hover={{
                bg: useColorModeValue("gray.700", "gray.200"),
                color: useColorModeValue("#F0E2B6", "gray.700"),
              }}
              isRound
              boxSize="2.5rem"
            />
          </Box>
          <Box
            as="a"
            href="/"
            // target="_blank"
          >
            <IconButton
              aria-label="facebook"
              variant="ghost"
              size="xl"
              icon={<BsYoutube size="25px" />}
              _hover={{
                bg: useColorModeValue("gray.700", "gray.200"),
                color: useColorModeValue("#F0E2B6", "gray.700"),
              }}
              isRound
              boxSize="2.5rem"
            />
          </Box>
          <Box
            as="a"
            // href="https://www.linkedin.com/company/tedxavelorne/"
            href="/"
            // target="_blank"
          >
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              size="xl"
              icon={<BsLinkedin size="22px" />}
              _hover={{
                bg: useColorModeValue("gray.700", "gray.200"),
                color: useColorModeValue("#F0E2B6", "gray.700"),
              }}
              isRound
              boxSize="2.5rem"
            />
          </Box>

          <Box
            as="a"
            href="/"
            // target="_blank"
          >
            <IconButton
              aria-label="facebook"
              variant="ghost"
              size="xl"
              icon={<BsFacebook size="22px" />}
              _hover={{
                bg: useColorModeValue("gray.700", "gray.200"),
                color: useColorModeValue("#F0E2B6", "gray.700"),
              }}
              isRound
              boxSize="2.5rem"
            />
          </Box>
        </Stack>
      </motion.div>
    </Flex>
  );
};

export default BlockCopyright;
