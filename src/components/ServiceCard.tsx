import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Image,
    Text,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import Badges from "./Badges";

interface ServiceCardProps {
    isHovered?: boolean;
    eventPageHref?: string;
    eventImageHref?: string;
    titleText?: string;
    modalHeaderText?: string;
    icon1?: IconType;
    onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    isHovered,
    eventPageHref,
    eventImageHref,
    titleText,
    modalHeaderText,
    icon1,
    onClick
}) => {

    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);

    return (
        <Box
            bg={useColorModeValue(
                "#F2FCF9",
                "linear-gradient(to right bottom, #0e0e29, #0e0e29, #272763, #272763)")}
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.15s ease-out"
        >
            <Link
                className="event2024Link"
                // as={RouterLink}
                // to={eventPageHref}
                width="20rem"
                cursor="pointer"
                style={{ textDecoration: "none" }}
                onClick={onClick}
            >
                <Box
                    className="plan"
                    borderRadius="9px"
                    boxShadow={`0px 2px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px 0.5px rgba(0, 0, 0, 0.8)`}
                    overflow="hidden"
                >
                    <Image
                        src={eventImageHref}
                        width="100%"
                        borderRadius="9px 9px 0 0"
                        objectFit="contain"
                    />
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Text
                            className="service_title"
                            color={useColorModeValue("gray.800", "gray.200")}
                            fontSize={{
                                base: "1.5rem",
                                lg: "1.6rem",
                            }}
                            textAlign="center"
                            fontFamily="'Acme', sans-serif"
                            maxWidth="16rem"
                            paddingY="1.5rem"
                        >
                            {titleText}
                        </Text>
                        {/* <Button className="explore_button"
                        width="12rem"
                        height="2rem"
                        bg={useColorModeValue("gray.800", "gray.800")}
                        marginBottom="1rem">
                        CHECK OUT
                    </Button> */}
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};

export default ServiceCard;
