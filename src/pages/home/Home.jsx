import React from "react";
import Header from "../../components/header/Header";
import Landing from "../../components/Landing/Landing";
import WhoIAm from "../../components/WhoIAm/WhoIAm";
import Skils from "../../components/Skils/Skils";
import WorkingVideos from "../../components/WorkingVideos/WorkingVideos";
import Prices from "../../components/Prices/Prices";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <Header />
        <Landing />
      </div>
      <WhoIAm />
      <Skils />
      <WorkingVideos />
      <Prices />
      <Footer />
    </div>
  );
};

export default Home;
