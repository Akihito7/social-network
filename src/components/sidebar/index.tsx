import Image from "next/image";
import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <Image
          width={64}
          height={64}
          src="/next.svg"
          alt="logo"
          className={styles.logo}
        />
      </div>

      <div className={styles.content}>
        <h2>Menu</h2>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Image
                src="/notification-icon.svg"
                alt="icon"
                width={24}
                height={24}
                priority
                className={styles.icon}
              />
              <a href="/">Notifications</a>
            </li>

            <li>
              <Image
                src="/profile-icon1.svg"
                alt="icon"
                width={24}
                height={24}
                priority
                className={styles.icon}
              />
              <a href="/">Profile</a>
            </li>

            <li>
              <Image
                src="/create-icon.svg"
                alt="icon"
                width={24}
                height={24}
                priority
                className={styles.icon}
              />
              <a href="/">Create</a>
            </li>
          </ul>
        </nav>

        <h2>Settings</h2>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Image
                src="/settings-icon.svg"
                alt="icon"
                width={24}
                height={24}
                priority
                className={styles.icon}
              />

              <a href="/">Settings</a>
            </li>

            <li>
              <Image
                src="/exit-icon.svg"
                alt="icon"
                width={24}
                height={24}
                priority
                className={styles.icon}
              />

              <a href="/">Exit</a>
            </li>
          </ul>
        </nav>
      </div>

      <Image
        src="/closesvg.svg"
        alt="icon"
        width={38}
        height={38}
        priority
        className={styles.closeMenu}
      />
    </div>
  );
}
