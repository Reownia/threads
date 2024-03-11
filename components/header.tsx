import type { NextPage } from "next";
import { memo } from "react";
import styles from "./header.module.css";

const Header: NextPage = memo(() => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          className={styles.threadsLogoIcon}
          alt=""
          src="/threads-logo.svg"
        />
        <div className={styles.threads}>threads</div>
      </div>
      <div className={styles.navCenterItems}>
        <div className={styles.nav}>
          <img className={styles.homeIcon} alt="" src="/home.svg" />
          <img className={styles.homeIcon} alt="" src="/search.svg" />
          <img className={styles.homeIcon} alt="" src="/like.svg" />
          <img className={styles.homeIcon} alt="" src="/send.svg" />
          <img
            className={styles.threadsLogoIcon}
            alt=""
            src="/save-later.svg"
          />
        </div>
      </div>
      <div className={styles.rightNavitem}>
        <div className={styles.righInfos}>
          <img className={styles.logo2Icon} alt="" src="/logo-2.svg" />
          <img className={styles.hamburgerIcon} alt="" src="/hamburger.svg" />
        </div>
      </div>
    </div>
  );
});

export default Header;
