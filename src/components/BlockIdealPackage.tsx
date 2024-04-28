import React, { useEffect, useRef, useState } from "react";
import { Box, HStack, SimpleGrid, Text, useColorModeValue, Link, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaRegCreditCard } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { SiShopify } from "react-icons/si";
import plan1 from "../assets/images/plans-04.jpeg";
import plan2 from "../assets/images/plans-05.jpeg";
import plan3 from "../assets/images/plans-03.jpg";

// interface BlockPlansProps {
//   data: {
//     src: string;
//     title: string;
//     description: string;
//   }[];
//   onClick: (index: number) => void;
// }

const variantsOne: { [key: string]: any } = {
    initial: {
        x: -100,
        y: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

const variantsTwo: { [key: string]: any } = {
    initial: {
        y: -100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

const variantsThree: { [key: string]: any } = {
    initial: {
        x: 100,
        y: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

const BlockIdealPackage: React.FC = () => {
    const { t } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const handleServiceClick = (serviceDescription: string) => {
        setSelectedService(serviceDescription);
        setModalOpen(true);
    };

    const [isLoading, setIsLoading] = useState(true);
    const [boxLoaded, setBoxLoaded] = useState(false);
    const handleBoxLoad = () => {
        setBoxLoaded(true);
    };

    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    const iconSize = useBreakpointValue({ base: "27px", md: "32px", lg: "40px" });

    useEffect(() => { }, [boxLoaded]);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(delay);
    }, []);


    return (
        <Box
            className="grid-outer-container"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="4rem 1rem 4rem 1rem"
            overflow="hidden"
        >
            <Box
                className="block"
                width="100%"
                padding="4rem 1rem 4rem 1rem"
                bg={useColorModeValue("white", "gray.800")}
                color="#7b858b"
                overflow="hidden"

            >
                <Box
                    className="block__header container"
                    textAlign="center"
                    maxWidth="1140px"
                    margin="0 auto"
                >
                    <Text
                        className="h2 block__heading"
                        fontSize={{ base: "2rem", lg: "3rem" }}
                        fontFamily="'Acme', sans-serif"
                        color={useColorModeValue("#FF3A2D", "#fff")}
                        marginBottom="1rem"
                        lineHeight="1.1"
                    >
                        {t("idealPackagePageTitle")}
                    </Text>
                    <Text
                        className="p"
                        fontSize={{ base: "1.2rem", lg: "1.7rem" }}
                        fontFamily="'Acme', sans-serif"
                        color={useColorModeValue("gray.800", "#FF3A2D")}
                        marginTop="1rem"
                    >
                        {t("idealPackagePageSubTitle")}
                    </Text>
                </Box>
            </Box>
            <Box
                className="grid-inner-container"
                width="100%"
                maxWidth={{ base: "420px", md: "420px", lg: "1000px" }}
                margin={{ base: "0.6rem", md: "2.5rem", lg: "2rem" }}
            >

                <SimpleGrid
                    className="card-grid"
                    columns={{ base: 1, md: 1, lg: 3 }}
                    row={{ base: 6, md: 6, lg: 2 }}
                    spacingX={16}
                    spacingY={16}
                >
                    {/* ********** SERVICE ONE (1) ********** */}
                    <motion.div
                        ref={ref}
                        variants={variantsOne}
                        initial="initial"
                        whileInView="animate"
                    >
                        <ServiceCard
                            eventPageHref={"/"}
                            eventImageHref={plan1}
                            titleText={"Package 1"}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Package 1")}

                        />
                    </motion.div>

                    {/* ********** SERVICE TWO (2) ********** */}
                    <motion.div
                        ref={ref}
                        variants={variantsTwo}
                        initial="initial"
                        whileInView="animate"
                    >
                        <ServiceCard
                            eventPageHref={"/"}
                            eventImageHref={plan2}
                            titleText={"Package 2"}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Package 2")}

                        />
                    </motion.div>

                    {/* ********** SERVICE THREE (3) ********** */}
                    <motion.div
                        ref={ref}
                        variants={variantsThree}
                        initial="initial"
                        whileInView="animate"
                    >
                        <ServiceCard
                            eventPageHref={"/"}
                            eventImageHref={plan3}
                            titleText={"Package 3"}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Package 3")}
                        />
                    </motion.div>


                </SimpleGrid>

                <ServiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} serviceDescription={selectedService} />

                <Box className="buttonContainer" display="flex" justifyContent="center" alignItems="center"
                >
                    <Link
                        position="relative"
                        className="button"
                        href="#"
                        // target="_blank"
                        width={{ base: "90%", lg: "23rem" }}
                        bg="#f04e2d"
                        color="#fff"
                        fontSize={{ base: "2rem", lg: "1.5rem" }}
                        fontFamily="'Acme', sans-serif"
                        padding="1rem"
                        marginY={{ base: "1rem", lg: "3rem" }}
                        marginTop="3rem"
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
                            <SiShopify size={iconSize} color={isHoveredButton ? "#f04e2d" : "white"} />
                            <Text
                                fontSize={{ base: "1rem", md: "1.5rem", lg: "" }}
                                textAlign="center"
                            >
                                Add to Your Card
                            </Text>
                        </HStack>
                    </Link>
                </Box>

            </Box>
        </Box>
    );
};

export default BlockIdealPackage;
