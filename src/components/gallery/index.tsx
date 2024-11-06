import Image from "next/image";
import styles from "./gallery.module.css";

export function Gallery() {
  return (
    <div className={styles.container}>
      <Image
        src="/profile-image.png"
        alt="profile image"
        width={440}
        height={440}
        priority
      />
      <Image
        src="/profile-image.png"
        alt="profile image"
        width={440}
        height={440}
        priority
        className={styles.imgPinned}
      />
      <Image
        src="/profile-image.png"
        alt="profile image"
        width={440}
        height={440}
        priority
      />
    </div>
  );
}
