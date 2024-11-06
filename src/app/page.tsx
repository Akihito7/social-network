import { Post } from "@/components/post";
import styles from "./page.module.css";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.containerMain}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
