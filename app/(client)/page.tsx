import React from "react";

import HomeAbout from "@/components/HomeAbout";
import HomeCta from "@/components/HomeCta";
import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import HomeStatistics from "@/components/HomeStatistics";
import Testimonials from "@/components/Testimonials";



const Home = async () => {
  // const categories = await getCategories(6);

  return (
    <div>
      <HomeHero />
      <HomeStatistics />
      <HomeServices />
      <HomeAbout />
      <Testimonials />
      <HomeCta />
    </div>
  );
};

export default Home;
