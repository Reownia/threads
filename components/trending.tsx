import type { NextPage } from "next";
import { memo } from "react";
import styles from "./trending.module.css";

const Trending: NextPage = memo(() => {
  return (
    <div className={styles.trending}>
      <div className={styles.infos}>
        <div className={styles.title}>
          <b className={styles.trendingTopics}>Trending Topics</b>
          <img className={styles.settingsIcon} alt="" src="/settings.svg" />
        </div>
      </div>
      <div className={styles.treanding}>
        <div className={styles.topic}>
          <div className={styles.design}>Design</div>
          <div className={styles.threadsdesktop}>ThreadsDesktop</div>
          <div className={styles.trendingTopics}>123.9k threads</div>
        </div>
        <div className={styles.topic}>
          <div className={styles.design}>movies and series</div>
          <div className={styles.spiderManAcrossThe}>
            Spider-Man: Across the Spider-Verse
          </div>
          <div className={styles.trendingTopics}>93.4k threads</div>
        </div>
        <div className={styles.topic}>
          <div className={styles.design}>tech</div>
          <div className={styles.threadsdesktop}>iPhone 15</div>
          <div className={styles.trendingTopics}>85.2k threads</div>
        </div>
        <div className={styles.topic}>
          <div className={styles.design}>games</div>
          <div className={styles.threadsdesktop}>Riot Games</div>
          <div className={styles.trendingTopics}>71.9k threads</div>
        </div>
        <div className={styles.topic}>
          <div className={styles.design}>Design</div>
          <div className={styles.threadsdesktop}>#Minimalism</div>
          <div className={styles.trendingTopics}>69.1k threads</div>
        </div>
      </div>
      <div className={styles.seeMore}>see more</div>
    </div>
  );
});

export default Trending;
