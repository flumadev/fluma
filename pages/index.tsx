import type { NextPage } from "next";
<<<<<<< HEAD
import Contact from "../sections/Contact";


import Landing from "../sections/Landing";
import Services from "../sections/services";

=======
import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";

import flumaLogo from "../public/logo.png";
import githubLogo from "../public/githubLogo.png";

const Navbar = styled.div`
  height: 100px;
  width: 100vw;

  display: flex;
  justify-content: center;
`;

const ContentHolder = styled.div`
  display: flex;
justify-content: flex-end;
  width: 100%;
  height: 100%;
  max-width: 1366px;
`;

const GithubLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    margin-right: 20px;

    a{
      margin-left: 5px;
    }

    
`;
>>>>>>> dafffcb0dadb37a16361cf4237c3ccb95fd39063

const Home: NextPage = () => {
  return (
    <>
        <Landing />
        <Services />
        <Contact />

<<<<<<< HEAD
=======
      <Navbar>
        <ContentHolder>
          <GithubLink>
            <Image src={githubLogo} alt="" height={20} width={20} />
            <a href="https://github.com/flumadev">/flumadev</a>
          </GithubLink>
          <Image src={flumaLogo} alt="" width={200} objectFit="contain"  />
        </ContentHolder>
      </Navbar>
>>>>>>> dafffcb0dadb37a16361cf4237c3ccb95fd39063
    </>
  );
};

export default Home;
