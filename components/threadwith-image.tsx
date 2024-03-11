import type { NextPage } from "next";
import PostedImage from "./posted-image";
import ActionsButton from "./actions-button";
import ResponseCount from "./response-count";
import styles from "./threadwith-image.module.css";

const ThreadwithImage: NextPage = () => {
  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
        <img className={styles.threadChild} alt="" src="/vector-1.svg" />
        <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
      </div>
      <div className={styles.infosActions}>
        <div className={styles.infos}>
          <div className={styles.headingInfos}>
            <div className={styles.aura}>aura</div>
            <div className={styles.rightInfos}>
              <div className={styles.min}>2min</div>
              <button className={styles.dots}>
                <div className={styles.dotsChild} />
                <div className={styles.dotsChild} />
                <div className={styles.dotsChild} />
              </button>
            </div>
          </div>
          <div className={styles.iAmExcited}>
            I am excited to share with you my latest projects
          </div>
        </div>
        <div className={styles.imageCarrossel}>
          <PostedImage image="/image@2x.png" />
          <PostedImage image="/image1@2x.png" />
        </div>
        <ActionsButton />
        <ResponseCount />
      </div>
    </div>
  );
};

export default ThreadwithImage;
