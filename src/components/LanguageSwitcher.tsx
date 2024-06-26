import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Flex,
  Button,
  Spinner,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {}, [boxLoaded]);

  const changeLanguage = (lng: string) => {
    localStorage.setItem("selectedLanguage", lng);
    setLoading(true);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage") || "en";
    i18n.changeLanguage(storedLanguage);
  }, [i18n]); // Run this effect only when i18n changes

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={handleBoxLoad}
    >
      <Flex align="center" justify="center" gap="1">
        {loading && (
          <Box
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgba(255, 255, 255, 0.8)"
            zIndex="999"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color={useColorModeValue("#5E4ECB", "teal.400")}
              size="xl"
            />
          </Box>
        )}
        <Button
          variant={i18n.language === "en" ? "solid" : "outline"}
          onClick={() => changeLanguage("en")}
          transition="background 0.3s"
          width={{ base: "40px", lg: "40px" }}
          height={{ base: "40px", lg: "40px" }}
          borderRadius="lg"
          colorScheme={useColorModeValue("blue", "teal")}
          _hover={{
            background: useColorModeValue("blue.400", "teal.400"),
            color: "white",
          }}
          fontSize={{ base: 14, lg: 14 }}
          fontWeight="bold"
        >
          EN
        </Button>
        <Button
          variant={i18n.language === "fr" ? "solid" : "outline"}
          onClick={() => changeLanguage("fr")}
          transition="background 0.3s"
          width={{ base: "10px", lg: "40px" }}
          height={{ base: "40px", lg: "40px" }}
          borderRadius="lg"
          colorScheme={useColorModeValue("blue", "teal")}
          _hover={{
            background: useColorModeValue("blue.400", "teal.400"),
            color: "white",
          }}
          fontSize={{ base: 14, lg: 14 }}
          fontWeight="bold"
        >
          FR
        </Button>
      </Flex>
    </motion.div>
  );
};

export default LanguageSwitcher;
