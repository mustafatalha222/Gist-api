import { memo, useEffect } from "react";
import styles from "./list.module.scss";
import { InfoMessage, Gist } from "../../components";
import useGistContext from "../../context/GistContext/useGistContext";

const GistList = () => {
  const { fetchPublicGist, publicGist, loadingPublicGist, error } =
    useGistContext();

  useEffect(() => {
    // fetch publis gist on initial load
    fetchPublicGist();
  }, []);

  // show loading state
  if (loadingPublicGist) {
    return <InfoMessage message={"Loading..."} />;
  }

  // show error screen on failed
  if (error) {
    return <InfoMessage message={error} />;
  }

  // show no result message if no result found
  if (!publicGist || publicGist?.length === 0) {
    return <InfoMessage message={"No Result Found"} />;
  }

  // show all public gist + searched gist by user
  return (
    <section className={styles.wrapper} data-testid="gist-list">
      {publicGist?.map((gist) => (
        <Gist gist={gist} key={gist.id} />
      ))}
    </section>
  );
};

export default memo(GistList);
