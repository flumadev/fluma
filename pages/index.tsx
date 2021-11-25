import type { NextPage } from "next";
import Contact from "../sections/Contact";


import Header from "../sections/Header";
import Services from "../sections/services";


const Home: NextPage = () => {
  return (
    <>
        <Header />
        <Services />
        <Contact />

    </>
  );
};

export default Home;
