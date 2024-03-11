import type { NextPage } from "next";
import styles from "./actions-button.module.css";

const ActionsButton: NextPage = () => {
  return (
    <div className={styles.actions}>
      <img className={styles.likeIcon} alt="" src="/like.svg" />
      <img className={styles.likeIcon} alt="" src="/comment.svg" />
      <img className={styles.likeIcon} alt="" src="/repost.svg" />
      <img className={styles.likeIcon} alt="" src="/send.svg" />
    </div>
  );
};

export default ActionsButton;
