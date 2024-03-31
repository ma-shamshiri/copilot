import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const BlockContactUs: React.FC = () => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box
        maxWidth="50rem"
        margin="0 auto"
        textAlign="left"
        padding={{ base: "2rem", md: "4rem" }}
        overflow="hidden"
      >
        <Text
          color={useColorModeValue("gray.800", "white")}
          fontSize={{ base: "4.5rem", lg: "5rem" }}
          fontWeight="bold"
          fontFamily="'Englebert', cursive"
          marginBottom="1rem"
        >
          About Us
        </Text>
        <AnimatePresence>
          {!expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text
                color={useColorModeValue("gray.600", "gray.300")}
                fontSize={{ base: "1.5rem", lg: "1.75rem" }}
                maxWidth="50rem"
                margin="0 auto"
                marginBottom="2rem"
                lineHeight="1.6"
                style={{ overflow: "hidden" }}
              >
                Welcome to Captain MERCI! Our mission is to make your journey to
                Montreal as smooth and enjoyable as possible. Whether you're a
                new immigrant or a visitor, let us be your guide to discovering
                the wonders of this beautiful city.
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text
                color={useColorModeValue("gray.600", "gray.300")}
                fontSize={{ base: "1.5rem", lg: "1.75rem" }}
                maxWidth="50rem"
                margin="0 auto"
                marginBottom="2rem"
                lineHeight="1.6"
                style={{ overflow: "hidden" }}
              >
                Our team is dedicated to providing you with valuable insights,
                tips, and assistance to help you settle in seamlessly. From
                finding the best places to eat to navigating local customs,
                we've got you covered every step of the way.
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text
                color={useColorModeValue("gray.600", "gray.300")}
                fontSize={{ base: "1.5rem", lg: "1.75rem" }}
                maxWidth="50rem"
                margin="0 auto"
                lineHeight="1.6"
                style={{ overflow: "hidden" }}
              >
                So sit back, relax, and let Captain MERCI be your trusted
                companion on your Montreal adventure!
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          onClick={toggleExpanded}
          variant="outline"
          colorScheme="blue"
          size="lg"
          mt="2rem"
        >
          {expanded ? "Read Less" : "Read More"}
        </Button>
      </Box>
    </>
  );
};

export default BlockContactUs;
