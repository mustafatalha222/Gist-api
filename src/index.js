import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "../src/pages/App";
import GistProvider from "./context/GistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GistProvider>
    <App />
  </GistProvider>
);
