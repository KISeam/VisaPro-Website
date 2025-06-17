import React, { useEffect } from "react";
import Hero from "./Home Components/Hero";
import MidDetails from "./Home Components/MidDetails";

const Home = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  return (
    <>
      <div>
        <Hero />
        <MidDetails />
      </div>
    </>
  );
};

export default Home;
