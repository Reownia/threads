import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import MoreButton from "./more-button";
import ActionsButton from "./actions-button";
import styles from "./thread.module.css";

export type ThreadType = {
  avatar?: string;
  vector1?: string;
  vectorIcon?: boolean;
  avatar1?: string;
  avatarIcon?: boolean;
  userName?: string;
  postedTime?: string;
  postedText?: string;
  respostasECurtidas?: boolean;
  rectangle9?: string;
  rectangle8?: string;
  carrossel?: boolean;

  /** Style props */
  vectorIconOverflow?: CSSProperties["overflow"];
  respostasColor?: CSSProperties["color"];
  ellipseDivBackgroundColor?: CSSProperties["backgroundColor"];
  curtidasColor?: CSSProperties["color"];
  carrosselGap?: CSSProperties["gap"];
  carrosselFlexWrap?: CSSProperties["flexWrap"];
  carrosselHeight?: CSSProperties["height"];
  rectangleIconWidth?: CSSProperties["width"];
  rectangleIconHeight?: CSSProperties["height"];
  rectangleIconWidth1?: CSSProperties["width"];
  rectangleIconHeight1?: CSSProperties["height"];
};

const Thread: NextPage<ThreadType> = ({
  avatar,
  vector1,
  vectorIcon,
  vectorIconOverflow,
  avatar1,
  avatarIcon,
  userName,
  postedTime,
  postedText,
  respostasECurtidas,
  respostasColor,
  ellipseDivBackgroundColor,
  curtidasColor,
  rectangle9,
  rectangle8,
  carrossel,
  carrosselGap,
  carrosselFlexWrap,
  carrosselHeight,
  rectangleIconWidth,
  rectangleIconHeight,
  rectangleIconWidth1,
  rectangleIconHeight1,
}) => {
  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: vectorIconOverflow,
    };
  }, [vectorIconOverflow]);

  const respostasStyle: CSSProperties = useMemo(() => {
    return {
      color: respostasColor,
    };
  }, [respostasColor]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const curtidasStyle: CSSProperties = useMemo(() => {
    return {
      color: curtidasColor,
    };
  }, [curtidasColor]);

  const carrosselStyle: CSSProperties = useMemo(() => {
    return {
      gap: carrosselGap,
      flexWrap: carrosselFlexWrap,
      height: carrosselHeight,
    };
  }, [carrosselGap, carrosselFlexWrap, carrosselHeight]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleIconWidth,
      height: rectangleIconHeight,
    };
  }, [rectangleIconWidth, rectangleIconHeight]);

  const rectangleIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: rectangleIconWidth1,
      height: rectangleIconHeight1,
    };
  }, [rectangleIconWidth1, rectangleIconHeight1]);

  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <img className={styles.avatarIcon} alt="" src={avatar} />
        {!vectorIcon && (
          <img
            className={styles.threadChild}
            alt=""
            src={vector1}
            style={vectorIconStyle}
          />
        )}
        {!avatarIcon && (
          <img className={styles.avatarIcon1} alt="" src={avatar1} />
        )}
      </div>
      <div className={styles.infosActions}>
        <div className={styles.infos}>
          <div className={styles.headingInfos}>
            <div className={styles.aura}>{userName}</div>
            <div className={styles.rightInfos}>
              <div className={styles.min}>{postedTime}</div>
              <MoreButton />
            </div>
          </div>
          <div className={styles.temporDolorProident}>{postedText}</div>
        </div>
        {!carrossel && (
          <div className={styles.carrossel} style={carrosselStyle}>
            <img
              className={styles.carrosselChild}
              alt=""
              src={rectangle9}
              style={rectangleIconStyle}
            />
            <img
              className={styles.carrosselChild}
              alt=""
              src={rectangle8}
              style={rectangleIcon1Style}
            />
          </div>
        )}
        <ActionsButton />
        {!respostasECurtidas && (
          <div className={styles.respostasECurtidas}>
            <div className={styles.respostas} style={respostasStyle}>
              7 respostas
            </div>
            <div
              className={styles.respostasECurtidasChild}
              style={ellipseDivStyle}
            />
            <div className={styles.respostas} style={curtidasStyle}>
              59 curtidas
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Thread;
