import React, { useEffect, useRef, useState } from "react";
import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaRegCreditCard } from "react-icons/fa6";

import groceries from "../assets/images/groceries.jpg";
import transportations from "../assets/images/transportations.jpg";
import rent from "../assets/images/rent.jpg";
import french from "../assets/images/french.jpg";
import french2 from "../assets/images/french2.jpeg";
import telecommunications from "../assets/images/telecommunications.jpg";
import captainLight from "../assets/images/captainLight.png";
import pet1 from "../assets/images/pet1.jpg";
import pet2 from "../assets/images/pet2.jpg";
import discounts from "../assets/images/discounts.jpg";
import applications from "../assets/images/applications.jpg";
import banking1 from "../assets/images/banking.jpeg";
import banking2 from "../assets/images/banking2.png";
import banking3 from "../assets/images/banking3.jpg";
import plan1 from "../assets/images/plans-04.jpeg";

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

const variantsFour: { [key: string]: any } = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

const variantsFive: { [key: string]: any } = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.5,
        },
    },
};

const variantsSix: { [key: string]: any } = {
    initial: {
        x: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

const variantsSeven: { [key: string]: any } = {
    initial: {
        x: -100,
        y: 100,
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

const variantsEight: { [key: string]: any } = {
    initial: {
        y: 100,
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

const variantsNine: { [key: string]: any } = {
    initial: {
        x: 100,
        y: 100,
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


const BlockServices: React.FC = () => {
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
                        {t("servicePageTitle")}
                    </Text>
                    <Text
                        className="p"
                        fontSize={{ base: "1.2rem", lg: "1.7rem" }}
                        fontFamily="'Acme', sans-serif"
                        color={useColorModeValue("gray.800", "#FF3A2D")}
                        marginTop="1rem"
                    >
                        {t("servicePageSubTitle")}
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
                            eventImageHref={transportations}
                            titleText={t("Travel Solutions")}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Travel Solutions")}

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
                            eventImageHref={telecommunications}
                            titleText={t("Telecommunications")}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Telecommunications")}

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
                            eventImageHref={banking3}
                            titleText={t("Banking Options")}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Banking Options")}
                        />
                    </motion.div>

                    {/* ********** SERVICE FOUR (4) ********** */}
                    <motion.div
                        ref={ref}
                        variants={variantsFour}
                        initial="initial"
                        whileInView="animate"
                    >
                        <ServiceCard
                            eventPageHref={"/"}
                            eventImageHref={french2}
                            titleText={t("French Learning")}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for French Learning")}
                        />
                    </motion.div>

                    {/* ********** SERVICE FIVE (5) ********** */}
                    <motion.div
                        ref={ref}
                        variants={variantsFive}
                        initial="initial"
                        whileInView="animate"
                    >
                        <ServiceCard
                            eventPageHref={"/"}
                            eventImageHref={applications}
                            titleText={t("Helpful Apps")}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Helpful Apps")}
                        />
                    </motion.div>

                    {/* ********** SERVICE SIX (6) ********** */}
                    <motion.div
                        ref={ref}
                        variants={variantsSix}
                        initial="initial"
                        whileInView="animate"
                    >
                        <ServiceCard
                            eventPageHref={"/"}
                            eventImageHref={rent}
                            titleText={t("Housing Assistance")}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Housing Assistance")}
                        />
                    </motion.div>

                    {/* ********** SERVICE SEVEN (7) ********** */}
                    <motion.div
                        ref={ref}
                        variants={variantsSeven}
                        initial="initial"
                        whileInView="animate"
                    >
                        <ServiceCard
                            eventPageHref={"/"}
                            eventImageHref={discounts}
                            titleText={t("Discounts & Offers")}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Discounts & Offers")}
                        />
                    </motion.div>

                    {/* ********** SERVICE EIGHT (8) ********** */}
                    <motion.div
                        ref={ref}
                        variants={variantsEight}
                        initial="initial"
                        whileInView="animate"
                    >
                        <ServiceCard
                            eventPageHref={"/"}
                            eventImageHref={groceries}
                            titleText={t("Groceries")}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Groceries")}
                        />
                    </motion.div>

                    {/* ********** SERVICE NINE (9) ********** */}
                    <motion.div
                        ref={ref}
                        variants={variantsNine}
                        initial="initial"
                        whileInView="animate"
                    >
                        <ServiceCard
                            eventPageHref={"/"}
                            eventImageHref={pet1}
                            titleText={t("Pet Relocation")}
                            icon1={FaRegCreditCard}
                            onClick={() => handleServiceClick("Description for Pet Relocation")}
                        />
                    </motion.div>
                </SimpleGrid>

                <ServiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} serviceDescription={selectedService} />
            </Box>
        </Box>
    );
};

export default BlockServices;
