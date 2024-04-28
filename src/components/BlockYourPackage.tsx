import React, { useEffect, useRef, useState } from "react";
import { Box, HStack, SimpleGrid, Text, useColorModeValue, Link, useBreakpointValue, IconButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaRegCreditCard, FaTrainSubway } from "react-icons/fa6";

import { MdApps } from "react-icons/md";
import {
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
import { PiDogFill, PiSimCardFill, PiTelevisionDuotone } from "react-icons/pi";
import { GiRotaryPhone } from "react-icons/gi";
import { SiShopify } from "react-icons/si";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";



// interface BlockPlansProps {
//   data: {
//     src: string;
//     title: string;
//     description: string;
//   }[];
//   onClick: (index: number) => void;
// }


const BlockYourPackage: React.FC = () => {
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


    const icon1 = FaPhoneVolume;
    const icon2 = FaMobileRetro;
    const icon3 = FaHome;
    const icon4 = FaWifi;
    const icon5 = FaCar;
    const icon6 = FaAddressCard;
    const icon7 = FaInternetExplorer;
    const icon8 = FaMapMarkedAlt;
    const icon9 = FaSuitcaseRolling;
    const icon10 = PiDogFill;
    const icon11 = PiSimCardFill;
    const icon12 = PiTelevisionDuotone;
    const icon13 = GiRotaryPhone;
    const icon14 = SiShopify;
    const icon15 = MdOutlineLocalGroceryStore;
    const icon16 = FaRegCreditCard;
    const icon17 = FaTrainSubway;
    const icon18 = FaInternetExplorer;

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
                justifyContent="center"
                alignItems="center"
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
                        {t("yourPackagePageTitle")}
                    </Text>
                    <Text
                        className="p"
                        fontSize={{ base: "1.2rem", lg: "1.7rem" }}
                        fontFamily="'Acme', sans-serif"
                        color={useColorModeValue("gray.800", "#FF3A2D")}
                        marginTop="1rem"
                    >
                        {t("yourPackagePageSubTitle")}
                    </Text>
                </Box>
            </Box>
            <Box
                className="grid-inner-container"
                width="100%"
                maxWidth={{ base: "420px", md: "420px", lg: "1200px" }}
                margin={{ base: "0.6rem", md: "2.5rem", lg: "2rem" }}
            >

                <SimpleGrid
                    className="card-grid"
                    columns={{ base: 3, md: 3, lg: 6 }}
                    row={{ base: 6, md: 6, lg: 3 }}
                    spacingX={{ base: "3.5rem", lg: "10rem" }}
                    spacingY="10rem"
                    justifyContent="center"
                    alignItems="center"
                >
                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon1 && icon1({ size: 35 })}
                        color={useColorModeValue("gray.700", "gray.800")}
                        bg={useColorModeValue("gold", "gold")}
                        // isRound
                        boxSize={{ base: "3rem", lg: "5rem" }}
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
                        icon={icon2 && icon2({ size: 35 })}
                        color={useColorModeValue("gray.700", "gray.800")}
                        bg={useColorModeValue("#16F8B6", "#16F8B6")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
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
                        icon={icon3 && icon3({ size: 35 })}
                        color={useColorModeValue("gray.700", "gray.800")}
                        bg={useColorModeValue("#f961c2", "#F926AE")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
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
                        icon={icon4 && icon4({ size: 35 })}
                        color={useColorModeValue("gray.900", "gray.900")}
                        bg={useColorModeValue("#3a9efc", "#3a9efc")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
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
                        icon={icon5 && icon5({ size: 35 })}
                        color={useColorModeValue("gray.900", "gray.900")}
                        bg={useColorModeValue("darkorange", "darkorange")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
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
                        icon={icon6 && icon6({ size: 35 })}
                        color={useColorModeValue("gray.100", "gray.100")}
                        bg={useColorModeValue("blue", "blue")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon7 && icon7({ size: 35 })}
                        color={useColorModeValue("gray.900", "gray.900")}
                        bg={useColorModeValue("#3a9efc", "#3a9efc")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon8 && icon8({ size: 35 })}
                        color={useColorModeValue("gray.900", "gray.900")}
                        bg={useColorModeValue("darkorange", "darkorange")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon9 && icon9({ size: 35 })}
                        color={useColorModeValue("gray.700", "gray.800")}
                        bg={useColorModeValue("gold", "gold")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon10 && icon10({ size: 35 })}
                        color={useColorModeValue("gray.100", "gray.100")}
                        bg={useColorModeValue("blue", "blue")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon11 && icon11({ size: 35 })}
                        color={useColorModeValue("gray.700", "gray.800")}
                        bg={useColorModeValue("#16F8B6", "#16F8B6")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon12 && icon12({ size: 35 })}
                        color={useColorModeValue("gray.700", "gray.800")}
                        bg={useColorModeValue("#f961c2", "#F926AE")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon13 && icon13({ size: 35 })}
                        color={useColorModeValue("gray.700", "gray.800")}
                        bg={useColorModeValue("#16F8B6", "#16F8B6")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon14 && icon14({ size: 35 })}
                        color={useColorModeValue("gray.700", "gray.800")}
                        bg={useColorModeValue("gold", "gold")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon15 && icon15({ size: 35 })}
                        color={useColorModeValue("gray.100", "gray.100")}
                        bg={useColorModeValue("blue", "blue")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon16 && icon16({ size: 35 })}
                        color={useColorModeValue("gray.900", "gray.900")}
                        bg={useColorModeValue("#3a9efc", "#3a9efc")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon17 && icon17({ size: 35 })}
                        color={useColorModeValue("gray.100", "gray.100")}
                        bg={useColorModeValue("blue", "blue")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />

                    <IconButton
                        aria-label="icon"
                        size="xl"
                        icon={icon18 && icon18({ size: 35 })}
                        color={useColorModeValue("gray.700", "gray.800")}
                        bg={useColorModeValue("#16F8B6", "#16F8B6")}
                        boxSize={{ base: "3rem", lg: "5rem" }}
                        _hover={{
                            color: useColorModeValue("gray.100", "gray.100"),
                            bg: useColorModeValue("blue", "blue"),
                            transform: "scale(1.2)",
                        }}
                        transition="transform 0.15s ease-out"
                    />
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
                                Add to Your Cart
                            </Text>
                        </HStack>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default BlockYourPackage;
