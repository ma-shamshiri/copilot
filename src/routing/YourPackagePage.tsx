import React, { useState } from "react";
import { motion } from "framer-motion";
import NavigationBar from "../components/NavigationBar";
import BlockContactUs from "../components/BlockContactUs";
import BlockCopyright from "../components/BlockCopyright";
import BlockYourPackage from "../components/BlockYourPackage";

const YourPackagePage: React.FC = () => {
    const [boxLoaded, setBoxLoaded] = useState(false);

    const handleBoxLoad = () => {
        setBoxLoaded(true);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onAnimationComplete={handleBoxLoad}
            >
                <NavigationBar />
                <BlockYourPackage />
                <BlockContactUs />
                <BlockCopyright />
            </motion.div>
        </>
    );
};
export default YourPackagePage;