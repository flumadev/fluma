import type { NextPage } from "next";
import Contact from "../sections/Contact";


import Landing from "../sections/Landing";
import Services from "../sections/services";


const Home: NextPage = () => {
  return (
    <>
        <Landing />
        <Services />
        <Contact />

    </>
  );
};

export default Home;
