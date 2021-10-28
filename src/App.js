import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./styles/globals.scss";

import Navbar from "./navbar";
import Featured from "./components/featured";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Featured />
      </main>
    </div>
  );
}

export default App;
