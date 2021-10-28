import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./styles/globals.scss";

import Navbar from "./navbar";
import Featured from "./components/featured";
import Subscribe from "./components/subscribe";
import Company from "./components/company";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Featured />
        <Subscribe />
        <Company />
      </main>
    </div>
  );
}

export default App;
