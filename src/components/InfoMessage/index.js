import styles from "./index.module.scss";
import { FaInfoCircle } from "react-icons/fa";

export default function InfoMessage({ message }) {
  return (
    <section className={styles.wrapper}>
      <FaInfoCircle />
      <h1 data-testid="error-message">{message}</h1>
    </section>
  );
}
