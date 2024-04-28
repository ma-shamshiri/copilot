import React, { useState } from "react";
import { motion } from "framer-motion";
import NavigationBar from "../components/NavigationBar";
import BlockContactUs from "../components/BlockContactUs";
import BlockCopyright from "../components/BlockCopyright";
import BlockIdealPackage from "../components/BlockIdealPackage";

const IdealPackagePage: React.FC = () => {
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
                <BlockIdealPackage />
                <BlockContactUs />
                <BlockCopyright />
            </motion.div>
        </>
    );
};
export default IdealPackagePage;