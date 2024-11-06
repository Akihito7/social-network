import Image from "next/image";
import styles from "./user-photo.module.css";

export function UserPhoto() {
  return (
    <Image
      src="/profile-image.png"
      alt="profile image"
      width={244}
      height={244}
      priority
      sizes="144"
      className={styles.img}
    />
  );
}
