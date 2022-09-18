import styles from "./index.module.scss";
import { FaInfoCircle } from "react-icons/fa";

export default function InfoMessage({ message, testId = "error-message" }) {
  return (
    <section className={styles.wrapper}>
      <FaInfoCircle />
      <h1 data-testid={testId}>{message}</h1>
    </section>
  );
}
