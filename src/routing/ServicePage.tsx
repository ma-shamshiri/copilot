import React, { useState } from "react";
import { motion } from "framer-motion";
import NavigationBar from "../components/NavigationBar";
import BlockContactUs from "../components/BlockContactUs";
import BlockCopyright from "../components/BlockCopyright";
import BlockServices from "../components/BlockServices";

const ServicePage: React.FC = () => {
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
                <BlockServices />
                <BlockContactUs />
                <BlockCopyright />
            </motion.div>
        </>
    );
};
export default ServicePage;