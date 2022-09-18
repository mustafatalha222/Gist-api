import Search from "../Search";
import styles from "./header.module.scss";
import { FaGithub } from "react-icons/fa";
import { memo } from "react";
import useGistContext from "../../context/GistContext/useGistContext";

function Header() {
  const { getGistByUser } = useGistContext();
  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <FaGithub className={styles.giticon} />
        <Search onSearch={getGistByUser} />
      </div>
    </header>
  );
}

export default memo(Header);
