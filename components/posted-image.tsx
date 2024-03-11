import type { NextPage } from "next";
import styles from "./posted-image.module.css";

export type PostedImageType = {
  image?: string;
};

const PostedImage: NextPage<PostedImageType> = ({ image }) => {
  return <img className={styles.imageIcon} alt="" src={image} />;
};

export default PostedImage;
