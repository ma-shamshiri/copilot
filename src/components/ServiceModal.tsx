import React from 'react';
import { Box, Text, Button, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter, ModalCloseButton } from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { useTranslation } from 'react-i18next';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    headerText?: string;
    serviceDescription: string;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, headerText, serviceDescription }) => {
    const { t } = useTranslation();

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="">
            <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
            <ModalContent
                border="2px solid"
                borderColor={useColorModeValue("gray.800", "white")}
                borderRadius="20px"
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="lg"
                padding="2rem"
                textAlign="center"
                width={{ base: "90%", lg: "50vw" }}
                height="70vh"
            >
                <ModalHeader fontSize="1.3rem" fontFamily="'Acme', sans-serif">Modal Header</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text
                        fontSize="1.5rem"
                        fontFamily="'Acme', sans-serif"
                        padding={{ base: "intial", lg: "4rem" }}
                    >
                        {serviceDescription}
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        borderRadius="7px"
                        _hover={{
                            bg: useColorModeValue('gray.600', 'gray.600'),
                            color: useColorModeValue("gray.200", "white")
                        }}
                        onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ServiceModal;
