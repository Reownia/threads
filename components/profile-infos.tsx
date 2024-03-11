import type { NextPage } from "next";
import styles from "./profile-infos.module.css";

const ProfileInfos: NextPage = () => {
  return (
    <div className={styles.infos}>
      <div className={styles.infos1}>
        <img className={styles.avatarBigIcon} alt="" src="/avatar-big.svg" />
        <div className={styles.infos2}>
          <div className={styles.infos3}>
            <b className={styles.alissonRochinski}>Alisson Rochinski</b>
            <div className={styles.infos4}>
              <div className={styles.arochinski}>arochinski</div>
              <div className={styles.threadsnetWrapper}>
                <div className={styles.threadsnet}>threads.net</div>
              </div>
            </div>
          </div>
          <div className={styles.uiDesignerContainer}>
            <p className={styles.uiDesigner}>
              UI Designer | Let's redesign the world
            </p>
            <p className={styles.uiDesigner}>alisson.rochinski@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.infos5}>
        <div className={styles.respostasECurtidas}>
          <div className={styles.seguidores}>2957 seguidores</div>
          <div className={styles.respostasECurtidasChild} />
          <div className={styles.seguidores}>rochinski.com</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfos;
