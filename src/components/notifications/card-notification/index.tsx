import { UserPhoto } from "@/components/user-photo";
import styles from "./card-notification.module.css";
import Image from "next/image";

export function CardNotification() {
  return (
    <div className={styles.container}>
      <UserPhoto />
      <p>
        <span>@Xama44</span> Amou sua foto
      </p>

      <div className={styles.containerOptions}>
        <Image
          src="/options.svg"
          alt="icon options"
          width={44}
          height={44}
          className={styles.optionsIcon}
        />
      </div>
    </div>
  );
}
