import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import logo from "../public/logo.png";
import githubLogo from "../public/githubLogo.png";

const gitlink = "https://github.com/flumadev"

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

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Image src={logo} />
          <h1>em breve...</h1>
          <a className={styles.gitText} href={gitlink} target="_blank" rel="noreferrer">
            <Image src={githubLogo} width={34} height={34} />
            <h1>/flumadev</h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
