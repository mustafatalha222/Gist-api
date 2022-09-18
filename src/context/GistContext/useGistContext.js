import { useContext } from "react";
import { GistContext } from "./index";

export default function useGistContext() {
  const context = useContext(GistContext);
  if (!context) {
    throw new Error("useGistContext must be used within a GistContextProvider");
  }
  return context;
}
