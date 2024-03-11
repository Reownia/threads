import type { NextPage } from "next";
import Header from "../components/header";
import ProfileInfos from "../components/profile-infos";
import Feed from "../components/feed";
import Trending from "../components/trending";
import styles from "./index.module.css";

const Index1: NextPage = () => {
  return (
    <div className={styles.index1}>
      <div className={styles.content}>
        <Header />
        <div className={styles.main}>
          <ProfileInfos />
          <Feed />
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default Index1;
