import type { NextPage } from "next";
import { memo } from "react";
import CreaeNewPost from "./creae-new-post";
import Thread from "./thread";
import styles from "./thread-input.module.css";

const ThreadInput: NextPage = memo(() => {
  return (
    <div className={styles.threadInput}>
      <div className={styles.thread}>
        <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
      </div>
      <div className={styles.infosActions}>
        <div className={styles.infos}>
          <div className={styles.infos}>
            <CreaeNewPost />
            <Thread
              avatar="/avatar.svg"
              vector1="/vector-1.svg"
              vectorIcon
              vectorIconOverflow="hidden"
              avatar1="/avatar.svg"
              avatarIcon
              userName="arochinski"
              postedTime="2min"
              postedText="It took so long for this desktop version of Threads to come out, but I'm really excited to start posting tips and content directly from the computer"
              respostasECurtidas
              respostasColor="rgba(255, 255, 255, 0.3)"
              ellipseDivBackgroundColor="rgba(255, 255, 255, 0.3)"
              curtidasColor="rgba(255, 255, 255, 0.3)"
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
              avatar1="/avatar.svg"
              avatarIcon={false}
              userName="aura"
              postedTime="1min"
              postedText={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
              respostasECurtidas={false}
              rectangle9="/rectangle-9@2x.png"
              rectangle8="/rectangle-8@2x.png"
              carrossel={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ThreadInput;
