import { GistList, Header } from "../components";
import GistProvider from "../context/GistContext";

function App() {
  return (
    <GistProvider>
      <Header />
      <GistList />
    </GistProvider>
  );
}

export default App;
