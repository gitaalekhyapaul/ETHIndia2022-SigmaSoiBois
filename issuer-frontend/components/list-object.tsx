import Head from "next/head";
import styles from "../styles/Home.module.css";

interface ComponentProps {
  schema: string;
  schemaId: string;
  [x: string]: any;
}

export default function Home({ schema, schemaId, ...props }: ComponentProps) {
  const link = `/claim/${schemaId}`;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <a href={link}>
          <div className={styles.cardDiv}>
            <h1 className={styles.cardTitle}>Schema ID:</h1>
            <h1 className={styles.cardEntry}>{schemaId}</h1>
            <h1 className={styles.cardTitle}>Schema:</h1>
            <h1 className={styles.cardEntry}>{schema}</h1>
          </div>
        </a>
      </main>
    </div>
  );
}
