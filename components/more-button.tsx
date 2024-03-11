import type { NextPage } from "next";
import styles from "./more-button.module.css";

const MoreButton: NextPage = () => {
  return (
    <button className={styles.dots}>
      <div className={styles.dotsChild} />
      <div className={styles.dotsChild} />
      <div className={styles.dotsChild} />
    </button>
  );
};

export default MoreButton;
