import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const variants: { [key: string]: any } = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const ContactUsInfo: React.FC = () => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <Box
          className="infoContainer"
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          // height="100%"
        >
          <Box
            className="textContainer"
            display="flex"
            flexDirection="column"
            gap={{ base: "0.5rem", lg: "1rem" }}
            textAlign={{ base: "center", lg: "center" }}
            alignItems={{ base: "center", lg: "initial" }}
            marginTop={{ base: "3rem", lg: "initial" }}
            width="75%"
          >
            <motion.div className="item" variants={variants}>
              <Text
                fontSize={{ base: "3.5rem", lg: "3.5rem" }}
                lineHeight="6rem"
                // marginBottom="2rem"
                fontFamily="'Englebert', cursive"
                fontWeight="bold"
              >
                {t("contactOurTeam")}
              </Text>
            </motion.div>

            {/* Email */}
            <motion.div className="item" variants={variants}>
              <Box
                className="mailContainer"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  className="phoneIconContainer"
                  // color={useColorModeValue("dodgerblue", "dodgerblue")}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <FaEnvelope size={32} />
                </Box>
                <Text
                  fontSize={{ base: "1.5rem", lg: "1.2rem" }}
                  letterSpacing="1px"
                  mt="0.5rem"
                >
                  mail@gmail.com
                </Text>
              </Box>
            </motion.div>

            {/* ---------- SEPARATOR ---------- */}
            <motion.div className="item" variants={variants}>
              <Box
                className="separatorContainer"
                display="flex"
                justifyContent="center"
              >
                <Box
                  className="separator"
                  marginY="0.5rem"
                  width="20rem"
                  height="1px"
                  style={{
                    background:
                      "linear-gradient(to left, transparent, gray, transparent)",
                  }}
                />
              </Box>
            </motion.div>
            {/* ---------- SEPARATOR ---------- */}

            {/* Address */}
            <motion.div className="item" variants={variants}>
              <Box
                className="addressContainer"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  className="phoneIconContainer"
                  // color={useColorModeValue("orange", "orange")}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <FaMapMarkerAlt size={32} />
                </Box>
                <Text
                  fontSize={{ base: "1.5rem", lg: "1.2rem" }}
                  letterSpacing="1px"
                  mt="0.5rem"
                >
                  {t("montreal")}, CA
                </Text>
              </Box>
            </motion.div>

            {/* ---------- SEPARATOR ---------- */}
            <motion.div className="item" variants={variants}>
              <Box
                className="separatorContainer"
                display="flex"
                justifyContent="center"
              >
                <Box
                  className="separator"
                  marginY="0.5rem"
                  width="20rem"
                  height="1px"
                  style={{
                    background:
                      "linear-gradient(to left, transparent, gray, transparent)",
                  }}
                />
              </Box>
            </motion.div>
            {/* ---------- SEPARATOR ---------- */}

            {/* Phone */}
            <motion.div className="item" variants={variants}>
              <Box
                className="phoneContainer"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  className="phoneIconContainer"
                  // color={useColorModeValue("#00bc84", "#16F8B6")}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <FaPhone size={32} />
                </Box>
                <Text
                  fontSize={{ base: "1.5rem", lg: "1.2rem" }}
                  letterSpacing="1px"
                  mt="0.5rem"
                >
                  +1 438 777 2233
                </Text>
                <Text
                  fontSize={{ base: "1.5rem", lg: "1.2rem" }}
                  letterSpacing="1px"
                >
                  +1 514 888 7766
                </Text>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default ContactUsInfo;
