import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import BlockHomeHero from "../components/BlockHomeHero";
import BlockPlans from "../components/BlockPlans";
import BlockAboutUs from "../components/BlockAboutUs";
import BlockContactUs from "../components/BlockContactUs";
import BlockCopyright from "../components/BlockCopyright";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <Box position="relative">
        <NavigationBar />
        <BlockHomeHero />
        <BlockPlans />
        <BlockAboutUs />
        <BlockContactUs />
        <BlockCopyright />
      </Box>
    </>
  );
};

export default HomePage;
