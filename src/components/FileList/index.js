import styles from "./index.module.scss";
import { AiOutlineFile } from "react-icons/ai";
import { HELPER } from "../../utils";

export default function FileList({ files }) {
  let fileArr = [];
  for (let file in files) {
    let language = files[file].language;
    //remove duplicate file types
    if (fileArr.indexOf(language) === -1 && language) {
      fileArr.push(language);
    }
  }

  return (
    <>
      {fileArr.length > 0 && (
        <div className={styles.badgeWrapper}>
          {fileArr.map((language, index) => {
            return (
              <span key={index} className={styles.badge}>
                {language}
              </span>
            );
          })}
        </div>
      )}

      <section className={styles.wrapper}>
        <strong>
          {HELPER.pluralizeText(Object.keys(files)?.length, "File")}:
        </strong>
        {Object.keys(files)?.map((file) => {
          const { filename, raw_url } = files[file];
          return (
            <div className={styles.icons} key={filename}>
              <AiOutlineFile />
              <a
                href={raw_url}
                target="_blank"
                rel="noreferrer"
                data-testid="file"
              >
                {filename}
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
}
