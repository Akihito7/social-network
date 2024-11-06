import Image from "next/image";
import styles from "./profile.module.css";
import { Sidebar } from "@/components/sidebar";
import { Gallery } from "@/components/gallery";
import { Notifications } from "@/components/notifications";

export default function Profile() {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.containerMain}>
        <div className={styles.containerBackground}>
          <Image
            alt="capa"
            src="/profile-image.png"
            width={248}
            height={248}
            priority
            sizes="248px"
            className={styles.userPhoto}
          />
          <Image
            alt="capa"
            src="/capa.png"
            width={1800}
            height={600}
            priority
            sizes="100vw"
          />
        </div>

        <div className={styles.containerAboutProfile}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span>@Akihito7</span>
            <span style={{color : "#9B9A9A"}}>(Guilherme Akihito)</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.4rem",
            }}
          >
            <span>3 Publicações</span>
            <span>2444 Seguidores</span>
            <span>99 Seguindo</span>
          </div>

          <p>Desenvolvedor de softwares 🚀</p>
        </div>

        <div className={styles.row}></div>

          <Gallery />

          <Notifications />

      </div>
    </div>
  );
}
