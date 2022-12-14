import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SigmaZK</title>
        <meta
          name="description"
          content="Polygon ID integration with Collab.Land"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.polyGrad}>SigmaZK</span>
        </h1>

        <h1 className={styles.emoji}>❌</h1>

        <h1 className={styles.subtitle}>
          Offer Creation Unsucessful.{" "}
          <a className={styles.link} href="/schema">
            Try Again
          </a>
          .
        </h1>
      </main>
    </div>
  );
}
