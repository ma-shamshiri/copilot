import React, { useEffect, useState } from "react";
import BlockPlans from "../components/BlockPlans";
// import NavigationBar from "../components/NavigationBar";
// import BlockHero from "../components/BlockHero";

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
      <BlockPlans />
      {/* <BlockHero />
      <NavigationBar /> */}
    </>
  );
};

export default HomePage;
