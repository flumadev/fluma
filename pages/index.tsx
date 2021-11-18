import type { NextPage } from "next";
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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Em breve</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/fluma.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar>
        <ContentHolder>
          <GithubLink>
            <Image src={githubLogo} alt="" height={20} width={20} />
            <a href="https://github.com/flumadev">/flumadev</a>
          </GithubLink>
          <Image src={flumaLogo} alt="" width={200} objectFit="contain"  />
        </ContentHolder>
      </Navbar>
    </>
  );
};

export default Home;
