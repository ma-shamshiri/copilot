import { useColorMode, Button, useBreakpointValue } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { LuMoonStar } from "react-icons/lu";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ColorModeSwitch = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  const { toggleColorMode, colorMode } = useColorMode();

  const isLightMode = colorMode === "light";

  const iconSize = useBreakpointValue({ base: "1.3rem", lg: "1.5rem" });
  const iconContainerSize = useBreakpointValue({
    base: "3.1rem",
    lg: "3.5rem",
  });

  useEffect(() => {}, [boxLoaded]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={handleBoxLoad}
    >
      <Button
        onClick={toggleColorMode}
        borderRadius="full"
        p={1}
        transition="background 0.4s, color 0.3s"
        _hover={{
          bg: isLightMode ? "#2220ba" : "gold",
          color: isLightMode ? "white" : "black",
        }}
        bg={isLightMode ? "gray.300" : "gray.600"}
        color={isLightMode ? "black" : "white"}
        boxSize={iconContainerSize}
      >
        {isLightMode ? (
          <LuMoonStar size={iconSize} />
        ) : (
          <SunIcon boxSize={iconSize} />
        )}
      </Button>
    </motion.div>
  );
};

export default ColorModeSwitch;
