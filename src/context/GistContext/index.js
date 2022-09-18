import { createContext, useState } from "react";
import { CONSTANTS, GIST_SERVICES } from "../../utils";

export const GistContext = createContext(null);

export default function ({ children }) {
  const [loadingPublicGist, setLoadingPublicGist] = useState(false);
  const [publicGist, setPublicGist] = useState([]);

  const [error, setError] = useState("");
  const [loadingUserGist, setLoadingUserGist] = useState(false);

  // fetch public gist
  const fetchPublicGist = async () => {
    setError("");
    setLoadingPublicGist(true);
    try {
      const res = await fetch(GIST_SERVICES.getPublicGists());
      const responseObj = await res.json();
      setPublicGist(responseObj);
    } catch (error) {
      setError(error.message || CONSTANTS.DEFAULT_ERROR);
    } finally {
      setLoadingPublicGist(false);
    }
  };

  //get gist by user on search
  const getGistByUser = async (username) => {
    // fetch public gist if user remove search
    if (typeof username === "string" && username.trim().length === 0) {
      fetchPublicGist();
      return;
    }
    setError("");
    setLoadingUserGist(true);
    try {
      const res = await fetch(GIST_SERVICES.getGistForUser(username));
      const responseObj = await res.json();
      res.status === 200
        ? setPublicGist(responseObj)
        : setError(responseObj.message || CONSTANTS.DEFAULT_ERROR);
    } catch (error) {
      setError(error.message || CONSTANTS.DEFAULT_ERROR);
    } finally {
      setLoadingUserGist(false);
    }
  };

  return (
    <GistContext.Provider
      value={{
        fetchPublicGist,
        publicGist,
        getGistByUser,
        loadingPublicGist,
        loadingUserGist,
        error,
      }}
    >
      {children}
    </GistContext.Provider>
  );
}
