import { CardNotification } from "./card-notification";
import styles from "./notifications.module.css";

export function Notifications() {
  return (
    <div className={styles.container}>
      <h1>Notifications</h1>

      <div className={styles.containerNotifications}>
        <p className={styles.p}>Todas notificações</p>

        <CardNotification />
        <CardNotification />
        <CardNotification />
      </div>
    </div>
  );
}
