import ClientComponent from "../_component/client-component";
import styles from "./page.module.css";
import ServerComponent from "../_component/server-component";

export default function Home() {
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
