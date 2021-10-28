import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./styles/globals.scss";

import Navbar from "./navbar";
import Featured from "./components/featured";
import Subscribe from "./components/subscribe";
import Company from "./components/company";
import Advertise from "./components/advertise";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Featured />
        <Subscribe />
        <Company />
        <Advertise />
      </main>
    </div>
  );
}

export default App;
