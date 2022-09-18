import { useCallback, useRef } from "react";
import { HELPER } from "../../utils";
import styles from "./index.module.scss";

function Search({ onSearch }) {
  const handleDebounce = useRef(
    HELPER.debounce((value) => {
      onSearch(value);
    }, 300)
  ).current;

  const onInputChange = useCallback((event) => {
    const value = event.target.value;
    handleDebounce(value);
  }, []);

  return (
    <section className={styles.search}>
      <div className={styles.inputBox}>
        <input
          data-testid="search-input"
          placeholder="Search Gists for username"
          onChange={onInputChange}
        />
      </div>
    </section>
  );
}

export default Search;
