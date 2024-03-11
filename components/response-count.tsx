import type { NextPage } from "next";
import styles from "./response-count.module.css";

const ResponseCount: NextPage = () => {
  return (
    <div className={styles.respostasECurtidas}>
      <div className={styles.respostas}>7 respostas</div>
      <div className={styles.respostasECurtidasChild} />
      <div className={styles.respostas}>59 curtidas</div>
    </div>
  );
};

export default ResponseCount;
