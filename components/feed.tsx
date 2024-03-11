import type { NextPage } from "next";
import { memo } from "react";
import ThreadInput from "./thread-input";
import ThreadwithImage from "./threadwith-image";
import Thread from "./thread";
import styles from "./feed.module.css";

const Feed: NextPage = memo(() => {
  return (
    <div className={styles.feed}>
      <ThreadInput />
      <ThreadwithImage />
      <Thread
        avatar="/avatar.svg"
        vector1="/vector-1.svg"
        vectorIcon={false}
        vectorIconOverflow="unset"
        avatar1="/avatar.svg"
        avatarIcon={false}
        userName="aura"
        postedTime="2min"
        postedText="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        respostasECurtidas
        respostasColor="#999"
        ellipseDivBackgroundColor="#999"
        curtidasColor="#999"
        rectangle9="/rectangle-9@2x.png"
        rectangle8="/rectangle-8@2x.png"
        carrossel={false}
        carrosselGap="0px 8px"
        carrosselFlexWrap="unset"
        carrosselHeight="unset"
        rectangleIconWidth="238px"
        rectangleIconHeight="230px"
        rectangleIconWidth1="238px"
        rectangleIconHeight1="230px"
      />
      <Thread
        avatar="/avatar.svg"
        vector1="/vector-1.svg"
        vectorIcon={false}
        vectorIconOverflow="unset"
        avatar1="/avatar.svg"
        avatarIcon={false}
        userName="aura"
        postedTime="4min"
        postedText="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
        respostasECurtidas={false}
        respostasColor="#999"
        ellipseDivBackgroundColor="#999"
        curtidasColor="#999"
        rectangle9="/rectangle-9@2x.png"
        rectangle8="/rectangle-8@2x.png"
        carrossel={false}
        carrosselGap="0px 8px"
        carrosselFlexWrap="unset"
        carrosselHeight="unset"
        rectangleIconWidth="238px"
        rectangleIconHeight="230px"
        rectangleIconWidth1="238px"
        rectangleIconHeight1="230px"
      />
    </div>
  );
});

export default Feed;
