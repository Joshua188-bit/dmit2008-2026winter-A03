// styles
import styles from "./page.module.css";

// components
import ComponentWrapper from "./components/ComponentWrapper"; // you also don't *need* to specify component file extensions!
import Hello from "./components/Hello.jsx";
import NewConcept from "./components/NewConcept.jsx";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hello />
        <ComponentWrapper textColor="blue">
          {/* We can reuse our components; that's the whole point! */}
          <NewConcept concept="creating components" />
          <NewConcept concept="passing props as data to components" />
          <NewConcept concept="a little bit about machine learning and how neural nets work (oops)" />
        </ComponentWrapper>
      </main>
    </div>
  );
}
