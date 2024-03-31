import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ContactUsForm from "./ContactUsForm";
import ContactUsInfo from "./ContactUsInfo";

const BlockContactUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        className="footer"
        padding="4rem 2rem"
        bg={useColorModeValue("#ddc887", "#232323")}
        overflow="hidden"
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: "1rem", lg: "2rem" }}
        >
          <GridItem>
            <ContactUsInfo />
            {/* <Box height="4rem" /> */}
          </GridItem>
          <GridItem>
            <ContactUsForm />
            {/* <Box height="4rem" /> */}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default BlockContactUs;
