import React, { useState } from "react";
import styles from "./gist.module.scss";
import { UserName, FileList, Fork } from "../../components";
import { AiOutlineFile, AiOutlineFork, AiOutlineComment } from "react-icons/ai";
import { GIST_SERVICES, HELPER } from "../../utils";

const Gist = ({ gist = {} }) => {
  const {
    forks_url,
    comments_url,
    owner,
    created_at,
    updated_at,
    description,
    files,
    id,
  } = gist;
  const { avatar_url, login, html_url } = owner;
  const fileCount = Object.keys(files).length;
  const iconsList = [
    {
      text: `${HELPER.pluralize(fileCount, "File")}`,
      icon: <AiOutlineFile />,
      link: "",
    },
    {
      text: "Forks",
      icon: <AiOutlineFork />,
      link: forks_url,
    },
    {
      text: "Comments",
      icon: <AiOutlineComment />,
      link: comments_url,
    },
  ];

  const [forks, setforks] = useState([]);
  const [show, setShow] = useState(false);
  const seeMore = async (id) => {
    if (id && !show) {
      try {
        const res = await fetch(GIST_SERVICES.getSingleGistUrl(id));
        const responseObj = await res.json();
        setforks(responseObj?.forks);
        setShow(true);
      } catch (e) {
        console.error(e, "<-error");
        setShow(false);
      }
    } else {
      setShow(false);
    }
  };

  const ItemLink = (item) => {
    const { link, icon, text } = item;
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={link ? "" : "noEvents"}
      >
        {icon} {text}
      </a>
    );
  };

  return (
    <div className={styles.wrapper} data-testid="gist">
      <header className={styles.header}>
        <div className={styles.info}>
          <UserName src={avatar_url} name={login} link={html_url} />
        </div>
        <aside className={styles.dateWrapper}>
          <div className={styles.date}>
            Created: {new Date(created_at).toISOString().split("T")[0]}
          </div>
          <div className={styles.date}>
            Updated: {new Date(updated_at).toISOString().split("T")[0]}
          </div>
        </aside>
      </header>

      <div className={styles.seeMoreIcons}>
        <div className={styles.iconWrapper}>
          {iconsList.map((item, index) => (
            <React.Fragment key={index}>{ItemLink(item)}</React.Fragment>
          ))}
        </div>
        <div className={styles.button} onClick={() => seeMore(`/${id}`)}>
          <strong>See {show ? "Less" : "Detail"}</strong>
        </div>
      </div>

      <div className={styles.body}>
        <FileList files={files} />

        {show && forks !== [] && (
          <>
            <Fork forks={forks} />
            {!!description && (
              <p>
                <strong>Desciption:</strong> {description}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Gist;
