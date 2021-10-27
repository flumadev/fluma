import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fluma</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.imageHolder}>
        <img  src="/fluma.svg" alt="Fluma Dev" width={250} />
        <h1>Em breve</h1>
        <a href="https://github.com/flumadev" className={styles.github}>
          <img src="/github.png" alt="Github" width={50} />
          <code>/flumadev</code>
        </a>
      </div>
    </>
  );
};

export default Home;
