import type { NextPage } from "next";
import styles from "./creae-new-post.module.css";

const CreaeNewPost: NextPage = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.actions1}>
        <img className={styles.paperclipIcon} alt="" src="/paperclip.svg" />
      </div>
      <input
        className={styles.shareSomethingCool}
        placeholder="Share something cool today"
        type="text"
      />
      <button className={styles.actions2}>
        <img className={styles.sendIcon} alt="" src="/send.svg" />
      </button>
    </div>
  );
};

export default CreaeNewPost;
