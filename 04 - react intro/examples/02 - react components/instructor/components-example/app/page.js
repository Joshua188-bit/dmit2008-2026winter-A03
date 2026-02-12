// styles
import styles from "./page.module.css";

// components
import Hello from "./components/Hello.jsx";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hello />
      </main>
    </div>
  );
}
